<template>
  <div
    ref="dragRef"
    :class="{ 'drag-editor-wrap': true, disabled: disabled }"
    @click.self.stop="resetAllActiveHand"
    :style=" {transform: `scale(${initScaleRatio})`,transformOrigin:'0% 0%'}"
  >
    <VueDragResizeRotate
      v-for="item in components"
      v-bind="{ ...commonAttr, ...item, url: '' }"
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
    >
      <Text
        v-if="item.name == 'Text'"
        v-model="modelValue[item.prop]"
        v-model:defaultText="item.defaultText"
      ></Text>
      <Picture
        v-if="item.name == 'Picture'"
        :url="item.url"
        :w="item.w"
        :h="item.h"
        :flip="item.flip"
      ></Picture>
    </VueDragResizeRotate>
    <subLine ref="subLineRef" />
  </div>
</template>

<script setup lang="ts">
import Text from "../Text/index.vue";
import Picture from "../Picture/index.vue";
import subLine from "@/components/subline/index.vue";
import { onMounted, onUnmounted, reactive, ref, watch } from "vue";
import { commonAttr, initScaleRatio } from "./layout.ts";
const props = withDefaults(
  defineProps<{
    components: Array<any>;
    modelValue?: Record<any, any>;
    disabled?: boolean;
    parentWidth?: any;
  }>(),
  {
    components: () => [],
    modelValue: () => ({}),
    disabled: false,
    parentWidth: 0,
  }
);
let dragRef = ref();
let dataForm = reactive({
  isAllAsync: false, // 空格按下
  controlKey: false, // control键按下
  draggingId: null,
  prevOffsetX: 0,
  prevOffsetY: 0,
});
watch(
  () => props.parentWidth,
  () => {
    let scale = props.parentWidth / 1000;
    initScaleRatio.value = scale;
  },
  {
    immediate: true,
    flush: "post",
  }
);
onMounted(() => {
  if (!props.disabled) {
    initKeyEventHand();
  }
});
onUnmounted(() => {
  window.removeEventListener("keydown", setSyncStateHand);
  window.removeEventListener("keyup", resetSyncStateHand);
});
const initKeyEventHand = () => {
  window.addEventListener("keydown", setSyncStateHand);
  window.addEventListener("keyup", resetSyncStateHand);
  window.addEventListener("keydown", setControlHand);
  window.addEventListener("keyup", resetControlHand);
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
// let componentsMap: any = {
//   Text,
//   Picture
// };

let subLineRef = ref();
const refLineParams = (data: any) => {
  subLineRef.value?.init(data);
};
const onActivated = (item: any) => {
  if (dataForm.controlKey) {
    item.preventDeactivation = true;
  } else {
    props.components.forEach((el) => {
      el.active = false;
      el.preventDeactivation = false;
    });
  }
  item.active = true;
};
const onDeactivated = (item: any) => {
  item.active = false;
};
const resetAllActiveHand = () => {
  if (props.disabled) return;
  props.components.forEach((el) => {
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

  if (!dataForm.isAllAsync) {
    props.components.forEach((el) => {
      if (el.active && el !== id) {
        el.x = (el.x ?? 0) + deltaX;
        el.y = (el.y ?? 0) + deltaY;
      }
    });
    return;
  }
  props.components.forEach((el) => {
    if (el !== id) {
      el.x = (el.x ?? 0) + deltaX;
      el.y = (el.y ?? 0) + deltaY;
    }
  });
};
const dragstop = (id: any, left: any, top: any) => {
  props.components.forEach((el) => {
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
const onRotating = (rotate: any, item: any) => {
  item.r = rotate;
};
const emits = defineEmits(["refLineParams"]);
</script>

<style lang="scss" scoped>
.drag-editor-wrap {
  // width: 100%;
  width: 1000px;
  height: 100%;
  position: relative;
  overflow: auto;
  // margin: 0 auto;
  border: solid 1px rgba(0, 0, 0, 0.1);
  border-top: none;
  box-sizing: border-box;
  background: linear-gradient(-90deg, rgba(0, 0, 0, 0.1) 1px, transparent 1px)
      0% 0% / 20px 20px,
    linear-gradient(rgba(0, 0, 0, 0.1) 1px, transparent 1px) 0% 0% / 20px 20px;
  &.disabled  {
    background: none;
    border: none;
    & *{
      pointer-events: none;
    }
  }
}
</style>
