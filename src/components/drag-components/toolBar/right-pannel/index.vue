<template>
  <div class="wrap">
    <el-tabs v-model="activeName" class="demo-tabs">
      <el-tab-pane label="平台" name="plat">
        <platform :pannel="pannel"></platform>
      </el-tab-pane>
      <el-tab-pane label="组件" name="com">
        <componentsAttr v-if="activeLength == 1" :active="active" />
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script setup lang="ts">
import { inject, reactive, ref, watch } from "vue";
import platform from "./platform.vue";
import componentsAttr from "./componentsAttr.vue";
import { PannelInterface } from "@/components/drag-components/editor";
let activeName = ref("");
let pannel: PannelInterface = inject("pannel", reactive<any>({}));
const props = withDefaults(
  defineProps<{
    active: any;
    activeLength: Number;
  }>(),
  {
    active: () => ({}),
  }
);
watch(
  () => props.activeLength,
  (newVal) => {
    if (newVal == 1) {
      activeName.value = "com";
    } else {
      activeName.value = "plat";
    }
  },
  {
    immediate: true,
  }
);
</script>

<style lang="scss" scoped>
.wrap {
  box-sizing: border-box;
  padding: 10px 20px 10px 15px;
  max-height: 100%;
  overflow: hidden;
  overflow-y: auto;
  ::v-deep(.el-tabs__nav) {
    width: 100%;
    .el-tabs__item {
      flex: 1;
    }
  }
}
</style>
