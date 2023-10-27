<template>
  <div ref="dragRef" :class="{ 'drag-editor-preivew': true }" :style="styleCom">
    <VueDragResizeRotate
      v-for="item in pannel.components"
      v-bind="{ ...previewAttr, ...item, self: '' }"
      :scaleRatio="initScaleRatio"
      :active="false"
    >
      <component
        :is="getComponentHand(item.self.name)"
        :data="item"
        v-model="modelValue[item.self.modelValue]"
        v-model:defaultModelValue="item.self.defaultModelValue"
        :h="item.h"
        :w="item.w"
        v-bind="getItemArrtHand(item)"
        @click.capture.self="clickHand(item)"
      ></component>
    </VueDragResizeRotate>
  </div>
</template>

<script setup lang="ts">
import { getComponent } from "@/components/custom-component/index";
import { resetComponentAttrHand } from "@/utils";
import { computed, ref } from "vue";
const props = withDefaults(
  defineProps<{
    pannel: Record<any, any>;
    modelValue?: Record<any, any>;
    disabled?: boolean;
    parentWidth?: any;
  }>(),
  {
    pannel: () => ({}),
    modelValue: () => ({}),
    disabled: false,
    parentWidth: 0,
  }
);
let previewAttr = {
  snap: false,
  debug: false,
  rotatable: false,
  draggable: false,
  resizable: false,
};
let initScaleRatio = ref(1);
let styleCom = computed(() => {
  return {
    transformOrigin: "50% 0%",
    width: props.pannel.width + "px",
    height: props.pannel.height + "px",
    color: props.pannel.color,
    fontSize: props.pannel.fontSize,
    backgroundColor: props.pannel.bgColor,
  };
});
const getComponentHand = (name: string) => {
  return (getComponent(name) as any).default;
};
const clickHand = (item: any) => {
  if (!item.self.click) return;
  emits("click", item);
};
const getItemArrtHand = (obj: any) => {
  return resetComponentAttrHand(obj, props.modelValue);
};
const emits = defineEmits(["click"]);
</script>

<style lang="scss" scoped>
.drag-editor-preivew {
  ::v-deep(.handle) {
    display: none !important;
  }
}
</style>
