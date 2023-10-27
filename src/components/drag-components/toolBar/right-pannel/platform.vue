<template>
  <el-form size="small">
    <el-form-item label="版本">
      <el-input  v-model="pannel.version"></el-input>
    </el-form-item>
    <el-form-item label="描述">
      <el-input v-model="pannel.desc"></el-input>
    </el-form-item>
    <el-form-item label="宽度">
      <el-input-number v-model="pannel.width"></el-input-number>
    </el-form-item>
    <el-form-item label="高度">
      <el-input-number v-model="pannel.height"></el-input-number>
    </el-form-item>
    <el-form-item label="文字颜色">
      <el-color-picker v-model="pannel.color" />
    </el-form-item>
    <el-form-item label="背景色">
      <el-color-picker v-model="pannel.bgColor" />
    </el-form-item>
    <el-form-item label="文字大小">
      <el-input placeholder="0px" v-model="pannel.fontSize"></el-input>
    </el-form-item>
  </el-form>
</template>

<script setup lang="ts">
import { PannelInterface } from "@/components/drag-components/editor";

withDefaults(
  defineProps<{
    pannel: PannelInterface;
  }>(),
  {}
);
</script>

<style lang="scss" scoped>
.wrap {
  box-sizing: border-box;
  padding: 10px 5px;
  max-height: 100%;
  overflow: hidden;
  overflow-y: auto;
}
</style>
