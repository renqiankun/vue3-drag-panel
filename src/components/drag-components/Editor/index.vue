<template>
  <div
    ref="dragRef"
    :class="{ 'drag-editor-wrap': true, disabled: disabled }"
    @click.self.stop="resetAllActiveHand"
    @mousedown="initKeyEventHand()"
    v-on-click-outside="closeOutSideEditorHand"
    :style="styleCom"
  >
    <VueDragResizeRotate
      v-for="item in pannel.components"
      v-bind="{ ...commonAttr, ...item, self: '', dySelf: '' }"
      :h="item.h == 'auto' ? item.h : parseFloat(item.h) || 0"
      :w="item.w == 'auto' ? item.w : parseFloat(item.w) || 0"
      @activated="onActivated(item)"
      @deactivated="onDeactivated(item)"
      @refLineParams="refLineParams"
      @resizing="(x: any, y: any, width: any, height: any) => onResize(x, y, width, height, item)"
      @resizestop="(x: any, y: any, width: any, height: any) => onResize(x, y, width, height, item)"
      @dragging="(left:any, top:any) => dragging(item, left, top)"
      @dragstop="(left:any, top:any) => dragstop(item, left, top)"
      @rotating="(rotate:any)=>onRotating(rotate,item)"
      @rotatestop="(rotate:any)=>onRotating(rotate,item)"
      :scaleRatio="initScaleRatio"
      :style="getStyleHand(item)"
    >
      <component
        class="dycomponent-class"
        :is="getComponentHand(item.self.name)"
        :data="item"
        :h="item.h"
        :w="item.w"
        v-bind="getItemArrtHand(item)"
        :hasModelValue="!!item.self.modelValue"
        v-model="modelValue[item.self.modelValue]"
        v-model:defaultModelValue="item.self.defaultModelValue"
        :groupModel="modelValue"
      ></component>
    </VueDragResizeRotate>
    <subLine ref="subLineRef" />
  </div>
</template>

<script setup lang="ts">
import subLine from "../subline/index.vue";
import { computed, onMounted, onUnmounted, reactive, ref } from "vue";
import { commonAttr, initScaleRatio } from "./layout.ts";
import { ComponentsInterface, PannelInterface } from "../editor";
import { getComponent } from "@/components/custom-component/index";
import { vOnClickOutside } from "@vueuse/components";
import { getUUID, resetComponentAttrHand } from "@/utils";
import {
  useActiveElement,
  useMagicKeys,
  whenever,
  onKeyStroke,
} from "@vueuse/core";
import { logicAnd } from "@vueuse/math";
import { useClipboard } from "@vueuse/core";
const props = withDefaults(
  defineProps<{
    pannel: PannelInterface;
    modelValue?: Record<any, any>;
    disabled?: boolean;
    active: Array<any>;
  }>(),
  {
    components: () => [],
    modelValue: () => ({}),
    disabled: false,
    parentWidth: 0,
    active: () => [],
  }
);
let editorIsActive = ref(false);
let styleCom = computed(() => {
  return {
    transform: `scale(${initScaleRatio.value})`,
    transformOrigin: "50% 0%",
    width: props.pannel.width + "px",
    height: props.pannel.height + "px",
    color: props.pannel.color,
    fontSize: props.pannel.fontSize,
    backgroundColor: props.pannel.bgColor,
  };
});
const { text, copy } = useClipboard({ legacy: true });

let dragRef = ref();
let dataForm = reactive({
  isAllAsync: false, // 空格按下
  controlKey: false, // control键按下
  draggingId: null,
  prevOffsetX: 0,
  prevOffsetY: 0,
});
onMounted(() => {
  // if (!props.disabled) {
  //   initKeyEventHand();
  // }
  initCopyEventHand();
});
onUnmounted(() => {
  removeEventHand();
});
const getStyleHand = (item: ComponentsInterface) => {
  return {
    fontSize: props.pannel.fontSize || item.fontSize,
  };
};
const getComponentHand = (name: string) => {
  return (getComponent(name) as any)?.default ?? "";
};
// 监听复制
const initCopyEventHand = () => {
  const activeElement = useActiveElement();
  const notUsingInput = computed(() => {
    return (
      activeElement.value?.tagName !== "INPUT" &&
      activeElement.value?.tagName !== "TEXTAREA" &&
      activeElement.value?.getAttribute("contenteditable") !== "true" &&
      editorIsActive.value
    );
  });
  const { Ctrl_C, Ctrl_V, Delete } = useMagicKeys();
  whenever(logicAnd(Ctrl_C, notUsingInput), () => {
    activeJsonToClibordHand();
  });

  whenever(logicAnd(Ctrl_V, notUsingInput), () => {
    activeJsonParseHand();
  });

  whenever(logicAnd(Delete, notUsingInput), () => {
    deleteActiveHand();
  });

  onKeyStroke(["ArrowDown"], (e) => {
    if (!notUsingInput.value) return;
    e.preventDefault();
    keyArrowMoveHand("down");
  });
  onKeyStroke(["ArrowLeft"], (e) => {
    if (!notUsingInput.value) return;
    e.preventDefault();
    keyArrowMoveHand("left");
  });
  onKeyStroke(["ArrowRight"], (e) => {
    if (!notUsingInput.value) return;
    e.preventDefault();
    keyArrowMoveHand("right");
  });
  onKeyStroke(["ArrowUp"], (e) => {
    if (!notUsingInput.value) return;
    e.preventDefault();
    keyArrowMoveHand("up");
  });
};
// 复制json
const activeJsonToClibordHand = () => {
  if (!props.active.length) return;
  try {
    let activeJson = JSON.stringify(props.active);
    copy(activeJson);
  } catch (error) {}
};
let activeJsonParseHand = () => {
  try {
    props.active?.forEach?.((item: any) => {
      item.active = false;
    });
    let json = JSON.parse(text.value);
    json.forEach((item: any) => {
      item.active = true;
      item.self.id = getUUID();
    });
    props.pannel.components.push(...json);
  } catch (error) {}
};
// 删除激活的组件
const deleteActiveHand = () => {
  props.pannel.components = props.pannel.components.filter((item: any) => {
    return !item.active;
  });
  emits("refresh");
};
const initKeyEventHand = () => {
  editorIsActive.value = true;
  window.addEventListener("keydown", setSyncStateHand);
  window.addEventListener("keyup", resetSyncStateHand);
  window.addEventListener("keydown", setControlHand);
  window.addEventListener("keyup", resetControlHand);
};
const removeEventHand = () => {
  window.removeEventListener("keydown", setSyncStateHand);
  window.removeEventListener("keyup", resetSyncStateHand);
  window.removeEventListener("keydown", setControlHand);
  window.removeEventListener("keyup", resetControlHand);
};
const closeOutSideEditorHand = () => {
  removeEventHand();
  editorIsActive.value = false;
};
const setSyncStateHand = (ev: any) => {
  if (ev.keyCode === 32) {
    ev.preventDefault();
    dataForm.isAllAsync = true;
  }
};
const resetSyncStateHand = (ev: any) => {
  if (ev.keyCode === 32) {
    ev.preventDefault();
    dataForm.isAllAsync = false;
  }
};
const setControlHand = (ev: any) => {
  if (ev.keyCode === 17) {
    dataForm.controlKey = true;
  }
};
const resetControlHand = (ev: any) => {
  if (ev.keyCode === 17) {
    dataForm.controlKey = false;
  }
};

let subLineRef = ref();
const refLineParams = (data: any) => {
  subLineRef.value?.init(data);
};
const onActivated = (item: any) => {
  if (dataForm.controlKey) {
    item.preventDeactivation = true;
  } else {
    props.active?.forEach?.((el) => {
      el.active = false;
      el.preventDeactivation = false;
    });
  }
  item.preventDeactivation = true;
  item.active = true;
};
const onDeactivated = (item: any) => {
  item.active = false;
  item.preventDeactivation = false;
};
const resetAllActiveHand = () => {
  if (props.disabled) return;
  initKeyEventHand();
  if (dataForm.controlKey && editorIsActive) return;
  props.active.forEach((el) => {
    el.active = false;
    el.preventDeactivation = false;
  });
};
const onResize = (x?: any, y?: any, width?: any, height?: any, item?: any) => {
  Object.assign(item, {
    x,
    y,
    w: width || item.width,
    h: height || item.width,
  });
};

const dragging = (id: any, left: any, top: any) => {
  dataForm.draggingId = id;
  const offsetX = left - (id.x ?? 0);
  const offsetY = top - (id.y ?? 0);
  const deltaX: any = deltaXHand(offsetX);
  const deltaY: any = deltaYHand(offsetY);
  // 仅激活的移动
  if (!dataForm.isAllAsync) {
    props.active?.forEach?.((el) => {
      if (el.active && el !== id) {
        el.x = (el.x ?? 0) + deltaX;
        el.y = (el.y ?? 0) + deltaY;
      }
    });
    return;
  }
  // 全部移动
  props.pannel.components.forEach((el) => {
    if (el !== id) {
      el.x = (el.x ?? 0) + deltaX;
      el.y = (el.y ?? 0) + deltaY;
    }
  });
};
const dragstop = (id: any, left: any, top: any) => {
  props.active?.forEach?.((el) => {
    if (el === id) {
      el.x = left;
      el.y = top;
    }
  });
  dataForm.draggingId = null;
  dataForm.prevOffsetX = 0;
  dataForm.prevOffsetY = 0;
};
const deltaXHand = (offsetX: any) => {
  const ret = offsetX - dataForm.prevOffsetX;
  dataForm.prevOffsetX = offsetX;
  return ret;
};
const deltaYHand = (offsetY: any) => {
  const ret = offsetY - dataForm.prevOffsetY;
  dataForm.prevOffsetY = offsetY;
  return ret;
};

const keyArrowMoveHand = (position: string) => {
  let x = 0;
  let y = 0;
  switch (position) {
    case "up":
      y = -1;
      break;
    case "down":
      y = 1;
      break;
    case "left":
      x = -1;
      break;
    case "right":
      x = 1;
      break;
    default:
      break;
  }
  props.active?.forEach?.((el) => {
    el.x = (el.x ?? 0) + x;
    el.y = (el.y ?? 0) + y;
  });
};

const onRotating = (rotate: any, item: any) => {
  item.r = rotate;
};

const getItemArrtHand = (obj: any) => {
  return resetComponentAttrHand(obj, props.modelValue);
};
const emits = defineEmits(["refLineParams", "refresh"]);
defineExpose({ ref: dragRef });
</script>

<style lang="scss" scoped>
.drag-editor-wrap {
  // width: 100%;
  position: relative;
  overflow: hidden;
  margin: 0 auto;
  border: solid 1px rgba(0, 0, 0, 0.1);
  border-top: none;
  box-sizing: border-box;
  background: linear-gradient(-90deg, rgba(0, 0, 0, 0.1) 1px, transparent 1px)
      0% 0% / 20px 20px,
    linear-gradient(rgba(0, 0, 0, 0.1) 1px, transparent 1px) 0% 0% / 20px 20px;
  ::v-deep(.handle) {
    background-color: transparent;
    box-shadow: inset 0 0 3px #fff;
  }
  &.disabled {
    background: none;
    border: none;
    & * {
      pointer-events: none;
    }
  }
}
.dycomponent-class {
  &[hide] {
    display: none;
  }
}
</style>
