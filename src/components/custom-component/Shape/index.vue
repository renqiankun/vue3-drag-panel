<template>
  <div class="shap-wrap">
    <!-- {{ modelValue || defaultModelValue }} -->
  </div>
</template>

<script setup lang="ts">
withDefaults(
  defineProps<{
    modelValue?: any;
    defaultModelValue?: any;
    data: any;
    color?: string;
    bgColor?: string;
    padding?: string;
    radius?: string;
    fontSize?: string;
    borderColor?: string;
    w?: any;
    h?: any;
  }>(),
  {
    modelValue: "",
    defaultModelValue: "",
    color: "",
    bgColor: "",
    padding: "",
    radius: "",
    fontSize: "",
    borderColor: "",
  }
);
</script>

<style lang="scss" scoped>
.shap-wrap {
  word-break: break-all;
  box-sizing: border-box;
  height: 100%;
  color: v-bind(color);
  background-color: v-bind(bgColor);
  padding: v-bind(padding);
  border-radius: v-bind(radius);
  font-size: v-bind(fontSize);
  border: v-bind(borderColor);

}
</style>
