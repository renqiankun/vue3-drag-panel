<template>
  <div class="group-wrap">
    <div
      v-for="item in data.group"
      :a="item.active"
      class="group-item"
      :style="styleHand(item)"
    >
      <component
        :is="getComponentHand(item.self.name)"
        :data="item"
        :h="item.h"
        :w="item.w"
        v-bind="getItemArrtHand(item)"
        v-model="groupModel[item.self.modelValue]"
        v-model:defaultModelValue="item.self.defaultModelValue"
        :disabled="true"
      ></component>
    </div>
  </div>
</template>

<script setup lang="ts">
import { getComponent } from "@/components/custom-component/index";
import { resetComponentAttrHand } from "@/utils";
const props = withDefaults(
  defineProps<{
    data: any;
    modelValue?: Record<any, any>;
    groupModel?: Record<any, any>;
    disabled?:boolean
  }>(),
  {
    modelValue: () => ({}),
    groupModel: () => ({}),
  }
);
const getComponentHand = (name: string) => {
  return (getComponent(name) as any).default;
};
const styleHand = (item: any) => {
  return {
    width: item.w == "auto" ? item.w : item.w + "px",
    height: item.h == "auto" ? item.h : item.h + "px",
    transform: `translate(${item.x}px, ${item.y}px) rotate(${item.r || 0}deg)`,
  };
};
const getItemArrtHand = (obj: any) => {
  return resetComponentAttrHand(obj, props.groupModel);
};
</script>

<style lang="scss" scoped>
.group-wrap {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100;
  .group-item {
    position: absolute;
  }
}
</style>
