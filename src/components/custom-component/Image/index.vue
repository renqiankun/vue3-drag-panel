<template>
  <img class="custom-image" :width="w" :height="h" :src="url" alt="" />
</template>

<script setup lang="ts">
import { watch, onMounted } from "vue";

const props = withDefaults(
  defineProps<{
    url: any;
    w: any;
    h: any;
    color?: string;
    bgColor?: string;
    padding?: string;
    radius?: string;
  }>(),
  {
    color:'',
    bgColor:'',
    padding:'',
    radius:''
  }
);
watch(
  () => [props.w, props.h],
  () => drawImage()
);
onMounted(() => {
  drawImage();
});
const drawImage = () => {
  //   let width = props.w;
  //   let height = props.h;
};
</script>

<style lang="scss" scoped>
.custom-image {
  color: v-bind(color);
  background-color: v-bind(bgColor);
  padding: v-bind(padding);
  border-radius: v-bind(radius);
}
</style>
