<template>
  <div class="wrap" v-if="active">
    <el-form size="small">
      <el-form-item label="组件名称">
        <el-input readonly v-model="activeCom.name"></el-input>
      </el-form-item>
      <div v-if="isText">
        <el-form-item label="prop">
          <el-input v-model="activeCom.prop"></el-input>
        </el-form-item>
        <el-form-item label="默认值">
          <el-input v-model="activeCom.defaultText"></el-input>
        </el-form-item>
      </div>
      <div v-if="isImage">
        <el-form-item label="url">
          <el-input readonly v-model="activeCom.url"></el-input>
        </el-form-item>
        <el-form-item label="width">
          <el-input-number v-model="activeCom.w"></el-input-number>
        </el-form-item>
        <el-form-item label="height">
          <el-input-number v-model="activeCom.h"></el-input-number>
        </el-form-item>
      </div>

      <el-form-item label="left">
          <el-input-number v-model="activeCom.x"></el-input-number>
        </el-form-item>
        <el-form-item label="top">
          <el-input-number v-model="activeCom.y"></el-input-number>
        </el-form-item>
        <el-form-item label="zIndex">
          <el-input-number v-model="activeCom.z"></el-input-number>
        </el-form-item>
        <el-form-item label="旋转">
            <el-input-number :min="0" v-model="activeCom.r"></el-input-number>
        </el-form-item>
        <el-form-item label="锁定比例">
            <el-switch v-model="activeCom.lockAspectRatio"></el-switch>
        </el-form-item>
        <el-form-item label="缩放">
            <el-switch v-model="activeCom.resizable"></el-switch>
        </el-form-item>
        <el-form-item label="旋转">
            <el-switch v-model="activeCom.rotatable"></el-switch>
        </el-form-item>
        <el-form-item label="父级约束">
            <el-switch v-model="activeCom.parent"></el-switch>
        </el-form-item>
        <el-form-item label="吸附">
            <el-switch v-model="activeCom.snap"></el-switch>
        </el-form-item>
        <el-form-item label="吸附距离">
            <el-input-number v-model="activeCom.snapTolerance"></el-input-number>
        </el-form-item>
      
    </el-form>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { commonAttr } from "../drag-components/Editor/layout";

const props = withDefaults(
  defineProps<{
    active: any;
  }>(),
  {}
);
let activeCom = computed(()=>{
    if(props.active){
        let allObj = {...commonAttr,...props.active}
        return Object.assign(props.active,allObj)
    }
   return props.active
})
let isText = computed(() => {
  return props.active.name == "Text";
});
let isImage = computed(() => {
  return props.active.name == "Picture";
});
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
