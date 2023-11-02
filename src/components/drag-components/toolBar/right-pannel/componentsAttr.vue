<template>
  <el-collapse v-model="activeNames">
    <el-collapse-item title="特有属性" name="1">
      <el-form size="small">
        <el-form-item label="组件名称" title="self.name">
          <el-input disabled v-model="activeCom.self.name"></el-input>
        </el-form-item>
        <el-form-item label="组件id" title="self.id">
          <el-input v-model="activeCom.self.id"></el-input>
        </el-form-item>
        <el-form-item label="点击事件" title="self.click">
          <el-switch v-model="activeCom.self.click"></el-switch>
        </el-form-item>
        <el-form-item label="width" title="w">
          <el-input v-model="activeCom.w"></el-input>
        </el-form-item>
        <el-form-item label="height" title="h">
          <el-input v-model="activeCom.h"></el-input>
        </el-form-item>
        <el-form-item  v-if="isScaleImage" label="图片内部宽度" title="self.imgWidth">
          <el-input v-model="activeCom.self.imgWidth" placeholder="动态控制%"></el-input>
        </el-form-item>
        <el-form-item  v-if="isScaleImage" label="图片内部高度" title="self.imgHeight">
          <el-input v-model="activeCom.self.imgHeight" placeholder="动态控制%"></el-input>
        </el-form-item>
        <div v-if="isSvg">
          <el-form-item label="icon自定义颜色" title="self.iconUseSelfColor">
            <el-switch v-model="activeCom.self.iconUseSelfColor"></el-switch>
          </el-form-item>
          <el-form-item label="icon背景色" title="self.fillColor">
            <el-color-picker v-model="activeCom.self.fillColor" />
          </el-form-item>
        </div>
        <el-form-item label="颜色" title="self.color">
          <el-color-picker v-model="activeCom.self.color" />
        </el-form-item>

        <el-form-item label="背景色" title="self.bgColor">
          <el-color-picker v-model="activeCom.self.bgColor" />
        </el-form-item>
        <el-form-item label="边框" title="self.borderColor">
          <el-input
            placeholder="solid 1px #000000"
            v-model="activeCom.self.borderColor"
          />
        </el-form-item>
        <el-form-item label="padding" title="self.padding">
          <el-input
            v-model="activeCom.self.padding"
            placeholder="0px 0px 0px 0px"
          ></el-input>
        </el-form-item>
        <el-form-item label="radius" title="self.radius">
          <el-input
            v-model="activeCom.self.radius"
            placeholder="0px 0px 0px 0px"
          ></el-input>
        </el-form-item>
        <el-form-item label="文字大小" title="self.fontSize">
          <el-input
            v-model="activeCom.self.fontSize"
            placeholder="0px"
          ></el-input>
        </el-form-item>
        <el-form-item label="modelValue" title="self.modelValue">
          <el-input
            placeholder="绑定属性"
            v-model="activeCom.self.modelValue"
          ></el-input>
        </el-form-item>
        <div v-if="isText">
          <el-form-item label="默认值" title="self.defaultModelValue">
            <el-input v-model="activeCom.self.defaultModelValue"></el-input>
          </el-form-item>
          <el-form-item label="禁止换行" title="self.noWordWrap">
            <el-switch v-model="activeCom.self.noWordWrap"></el-switch>
          </el-form-item>
          <el-form-item label="超出省略" title="self.overEllipsis">
            <el-switch v-model="activeCom.self.overEllipsis"></el-switch>
          </el-form-item>
        </div>
        <div v-if="isImage || isScaleImage || isSvg">
          <el-form-item label="url" title="self.url">
            <el-input  v-model="activeCom.self.url"></el-input>
          </el-form-item>
        </div>
      </el-form>
    </el-collapse-item>
    <el-collapse-item title="逻辑处理" name="3">
      <el-form size="small" label-position="top">
        <el-form-item label="prop" title="self.prop">
          <el-input
            placeholder="绑定属性"
            v-model="activeCom.self.prop"
          ></el-input>
        </el-form-item>
        <el-form-item label="值匹配">
          <el-select
            title="self.activeMode"
            v-model="activeCom.self.activeMode"
          >
            <el-option
              v-for="item in activeModeList"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
          <br />
          <br />
          <el-input
            title="self.activeValue"
            :placeholder="`1 (${activeCom.self.prop || 'prop'}${
              activeCom.self.activeMode || ''
            }1)`"
            v-model="activeCom.self.activeValue"
          />
        </el-form-item>
        <el-form-item label="匹配后重置属性" title="self.activeMap">
          <el-input
            type="textarea"
            placeholder='{"bgColor":"red || ${red}"}'
            v-model="activeCom.self.activeMap"
          />
        </el-form-item>
        <el-form-item
          v-if="isScaleImage"
          label="图片比例固定"
          title="self.lockAspectRatio"
        >
          <el-switch v-model="activeCom.self.lockAspectRatio"></el-switch>
        </el-form-item>
        <el-form-item
          v-if="isScaleImage"
          label="图片比例起始位置"
          title="self.position"
        >
          <el-select v-model="activeCom.self.position">
            <el-option
              v-for="item in positionArr"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </el-form-item>
      </el-form>
    </el-collapse-item>

    <el-collapse-item title="通用属性" name="2">
      <el-form size="small">
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
    </el-collapse-item>
  </el-collapse>
</template>

<script setup lang="ts">
import { computed, ref } from "vue";
import { commonAttr } from "@/components/drag-components/Editor/layout";
let activeNames = ref(["1", "3", "2"]);
const props = withDefaults(
  defineProps<{
    active: any;
  }>(),
  {}
);
let activeCom = computed(() => {
  if (props.active) {
    let allObj = { ...commonAttr, ...props.active };
    return Object.assign(props.active, allObj);
  }
  return props.active;
});
let positionArr = [
  { label: "靠上", value: "top" },
  { label: "靠下", value: "bottom" },
  { label: "靠左", value: "left" },
  { label: "靠右", value: "right" },
];
let activeModeList = [
  { label: "大于", value: "大于" },
  { label: "小于", value: "小于" },
  { label: "等于", value: "等于" },
  { label: "不等于", value: "不等于" },
  { label: "大于等于", value: "大于等于" },
  { label: "小于等于", value: "小于等于" },
  { label: "存在(!null && !undefind)", value: "存在" },
  { label: "不存在(null || undefind)", value: "不存在" },
];
let isTextArr = ["Text", "Shape"];
let isText = computed(() => {
  return isTextArr.indexOf(props.active.self.name) > -1;
});
let isImage = computed(() => {
  return props.active.self.name == "Image";
});
let isScaleImage = computed(() => {
  return props.active.self.name == "img-scale";
});
let isSvg = computed(() => {
  return props.active.self.name == "icon-svg";
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
