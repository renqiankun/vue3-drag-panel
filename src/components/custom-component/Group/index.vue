<template>
  <div class="group-wrap">
    <div v-for="item in data.group" class="group-item" :style="styleHand(item)">
      <component
        :is="getComponentHand(item.self.name)"
        :data="item"
        v-bind="item.self"
        v-model="modelValue[item.self.prop]"
        v-model:defaultText="item.self.defaultText"
        :h="item.h"
        :w="item.w"
      ></component>
    </div>
  </div>
</template>

<script setup lang="ts">
import { getComponent } from "@/components/custom-component/index";
withDefaults(
  defineProps<{
    data: any;
    modelValue?: Record<any, any>;
  }>(),
  {
    modelValue: () => ({}),
  }
);
const getComponentHand = (name: string) => {
  return (getComponent(name) as any).default;
};
const styleHand = (item: any) => {
  return {
    width: item.w == "auto" ? item.w : item.w + "px",
    height: item.h == "auto" ? item.h : item.h + "px",
    transform: `translate(${item.x}px, ${item.y}px) rotate(${item.r}deg)`,
  };
};
</script>

<style lang="scss" scoped>
.group-wrap {
  position: absolute;
  left: 0;
  top: 0;
  .group-item {
    position: absolute;
  }
}
</style>
