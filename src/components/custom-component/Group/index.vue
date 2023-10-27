<template>
  <div class="group-wrap">
    <component
      v-for="item in data.group"
      :is="getComponentHand(item.self.name)"
      :data="item"
      v-bind="item.self"
      v-model="modelValue[item.self.prop]"
      v-model:defaultText="item.self.defaultText"
      :h="item.h"
      :w="item.w"
      :style="styleHand(item)"
    ></component>
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
const styleHand = (item:any) => {
  return {
    transform: `translate(${item.x}px, ${item.y}px) rotate(${item.r}deg)`,
  };
};
</script>

<style lang="scss" scoped></style>
