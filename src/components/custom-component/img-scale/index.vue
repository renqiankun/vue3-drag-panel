<template>
  <!-- 图片比例显示 -->
  <div class="img-scale-wrap">
    <div class="img-scale-reduce" :style="wrapStyeCom">
      <img class="img-scale" :src="url" alt="" :style="imgStyleCom" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";

const props = withDefaults(
  defineProps<{
    url: any;
    w: any;
    h: any;
    color?: string;
    bgColor?: string;
    padding?: string;
    radius?: string;
    lockAspectRatio?: boolean;
    position?: "left" | "right" | "top" | "bottom";
    imgWidth?:string
    imgHeight?:string
  }>(),
  {
    color: "",
    bgColor: "",
    padding: "",
    radius: "",
    lockAspectRatio:false,
    position: "left",
  }
);
let wrapStyeCom = computed(() => {
  return {
    [props.position as any]: 0,
    width:  props.imgWidth,
    height:  props.imgHeight ,
  };
});
let imgStyleCom = computed(() => {
  return {
    [props.position as any]: 0,
    width: !props.lockAspectRatio? undefined : props.w + 'px' ,
    height:  !props.lockAspectRatio? undefined : props.h  + 'px',
  };
});
</script>

<style lang="scss" scoped>
.img-scale-wrap {
  position: relative;
  width: 100%;
  height: 100%;
  color: v-bind(color);
  background-color: v-bind(bgColor);
  padding: v-bind(padding);
  border-radius: v-bind(radius);
  .img-scale-reduce {
    position: absolute;
    overflow: hidden;
    width: 100%;
    height: 100%;
    transition: 0.1s;
  }
  .img-scale {
    display: block;
    position: absolute;
    width: 100%;
    height: 100%;
  }
}
</style>
