<template>
  <div
    :class="{ 'icon-wrap': true, 'color-self': iconUseSelfColor }"
    v-html="url"
  ></div>
</template>

<script setup lang="ts">
withDefaults(
  defineProps<{
    url: string;
    color?: string;
    bgColor?: string;
    fillColor?: string;
    padding?: string;
    radius?: string;
    fontSize?: string;
    iconUseSelfColor?: boolean; // svg 启用自定义颜色
  }>(),
  {
    color: "",
    bgColor: "",
    fillColor: "",
    padding: "",
    radius: "",
    fontSize: "",
  }
);
</script>

<style lang="scss" scoped>
.icon-wrap {
  color: v-bind(color);
  stroke: v-bind(color);
  fill: v-bind(fillColor);
  background-color: v-bind(bgColor);
  padding: v-bind(padding);
  border-radius: v-bind(radius);
  font-size: v-bind(fontSize);
  &.color-self {
    ::v-deep(*) {
      color: v-bind(color);
      stroke: v-bind(color);
      fill: v-bind(fillColor);
    }
  }
}
</style>
