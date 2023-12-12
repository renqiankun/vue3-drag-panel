<template>
  <div ref="wrapRef" class="drag-editor-preivew-wrap">
    <div :class="{ 'drag-editor-preivew': true }" :style="styleCom">
      <div
        v-for="item in pannel.components"
        :class="{'preview-item-wrap':true,'click-able':item.self.click}"
        :style="getStyleHand(item)"
        @click.self="clickHand($event,item)"
        @dblclick.self="dbclickHand($event,item)"
      >
        <component
          :class="{'dycomponent-class':true,}"
          :is="getComponentHand(item.self.name)"
          :data="item"
          :h="item.h"
          :w="item.w"
          v-bind="getItemArrtHand(item)"
          v-model="modelValue[item.self.modelValue]"
          v-model:defaultModelValue="item.self.defaultModelValue"
          :groupModel="modelValue"
          :disabled="true"
          :id="item.self?.id||''"
        ></component>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts" name="dragPannelPreview">
import { getComponent } from "@/components/custom-component/index";
import {
  ComponentsInterface,
  PannelInterface,
} from "@/components/drag-components/editor";
import { resetComponentAttrHand } from "@/utils";
import { nextTick, ref, onMounted } from "vue";
const props = withDefaults(
  defineProps<{
    pannel: PannelInterface;
    modelValue?: Record<any, any>;
    disabled?: boolean;
    parentWidth?: any;
  }>(),
  {
    // pannel: () => ({}),
    modelValue: () => ({}),
    disabled: false,
    parentWidth: 0,
  }
);
let wrapRef = ref();
let styleCom = ref({});
onMounted(() => {
  getSytpeMapHand();
});
const getStyleHand = (item: ComponentsInterface) => {
  return {
    width: item.w === "auto" ? item.w : item.w + "px",
    height: item.h === "auto" ? item.h : item.h + "px",
    fontSize: props.pannel.fontSize || item.fontSize,
    zIndex: item.z || "auto",
    transform: `translate(${item.x || 0}px, ${item.y || 0}px) rotate(${
      item.r || 0
    }deg)`,
  };
};
const getSytpeMapHand = async () => {
  await nextTick();
  let styleMap = {
    transformOrigin: "0% 0%",
    width: props.pannel.width + "px",
    height: props.pannel.height + "px",
    color: props.pannel.color,
    fontSize: props.pannel.fontSize,
    backgroundColor: props.pannel.bgColor,
  };
  // if (!props.pannel.fit) {
  //   styleCom.value = styleMap;
  // }
  let parentBounding = wrapRef.value.getBoundingClientRect();
  let { endRate, translateX, translateY } = getFitTransforOrigin(
    parentBounding.width,
    parentBounding.height
  );
  styleCom.value = {
    ...styleMap,
    // width: right - left + "px",
    // height: bottom - top + "px",
    transform: `translate(${translateX}px, ${translateY}px) scale(${endRate})`,
  };
};

const getFitTransforOrigin = (width: number, height: number) => {
  // 父级宽高
  // let { left, right, top, bottom } = getMinLeft();
  let rateX = width / props.pannel.width;
  let rateY = height / props.pannel.height;
  let endRate = rateX > rateY ? rateY : rateX;
  // if (rateX >= 1 && rateY >= 1) {
  //   endRate = rateX > rateY ? rateY : rateX;
  // }
  let translateX = rateX <= rateY ? 0 : width * endRate;
  let translateY = rateY <= rateX ? 0 : height * endRate;
  return {
    endRate,
    translateX:
      translateX > 0
        ? width / 2 - (props.pannel.width / 2) * endRate
        : translateX,
    translateY:
      translateY > 0
        ? height / 2 - (props.pannel.height / 2) * endRate
        : translateY,
  };
};
const getComponentHand = (name: string) => {
  return (getComponent(name) as any).default;
};
const clickHand = (event:any,item: any) => {
  if (!item.self.click) return;
  // console.log("click",event.target);
  emits("click", {event,item});
};
const dbclickHand = (event:any,item: any) => {
  if (!item.self.click) return;
  // console.log("dblclick",event.target);
  emits("dblclick", {event,item});
};

const getItemArrtHand = (obj: any) => {
  return resetComponentAttrHand(obj, props.modelValue);
};
const emits = defineEmits(["click",'dblclick']);
</script>

<style lang="scss" scoped>
.drag-editor-preivew-wrap {
  width: 100%;
  height: 100%;
  min-width: 200px;
  min-height: 200px;
}
.drag-editor-preivew {
  width: 100%;
  height: 100%;
  ::v-deep(.handle) {
    display: none !important;
  }
}
.preview-item-wrap {
  touch-action: none;
  position: absolute;
  box-sizing: border-box;
  user-select: none;
  img {
    -webkit-user-drag: none;
  }
}
.dycomponent-class {
    pointer-events: none;
    &[hide] {
      display: none;
    }
  }
</style>
