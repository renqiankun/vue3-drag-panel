<template>
  <div
    ref="dragRef"
    :class="{ 'drag-editor-wrap': true, disabled: true }"
    :style="{ transform: `scale(${initScaleRatio})`, transformOrigin: '0% 0%' }"
  >
    <VueDragResizeRotate
      v-for="item in components"
      v-bind="{ ...item, url: '' }"
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
import { onMounted, ref, watch } from "vue";
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
let initScaleRatio = ref(1);
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
onMounted(() => {});

const emits = defineEmits(["refLineParams"]);
</script>

<style lang="scss" scoped>
.drag-editor-wrap {
  width: 1000px;
  height: 100%;
  position: relative;
  overflow: auto;
  box-sizing: border-box;
  &.disabled {
    & * {
      pointer-events: none;
    }
  }
}
</style>
