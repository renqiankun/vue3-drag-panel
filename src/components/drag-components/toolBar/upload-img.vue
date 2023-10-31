<template>
  <el-button @click="setDialogViisbleHand" v-bind="$attrs">
    <slot>上传图片</slot>
    <el-dialog
      append-to-body
      destroy-on-close
      width="1200px"
      v-model="dialogVisible"
      @close="resetFileHand"
    >
      <div class="drap-wrap" ref="dropZoneRef">
        <fileSelect :accept="accept" @change="getImgHand"
          >拖拽或点击选择图片</fileSelect
        >
      </div>
      <el-form ref="formRef" style="margin-top: 20px" :model="dataForm" inline>
        <el-form-item label="质量">
          <el-input-number
            v-model="dataForm.quality"
            :step="0.1"
            :max="1"
            :min="0.1"
          ></el-input-number>
        </el-form-item>
        <el-form-item label="宽度" prop="width">
          <el-input-number v-model="dataForm.width"></el-input-number>
        </el-form-item>
        <el-form-item label="高度" prop="height">
          <el-input-number v-model="dataForm.height"></el-input-number>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="resetCompressHand"
            >重新处理</el-button
          >
          {{ compressFile?.size / 1000 || 0 }}KB
        </el-form-item>
      </el-form>
      <div class="img-wrap">
        <img class="img" :src="dataForm.url" alt="" />
      </div>
      <template #footer>
        <el-button @click="closeHand">关闭</el-button>
        <el-button @click="confirmHand">确认</el-button>
      </template>
    </el-dialog>
  </el-button>
</template>

<script setup lang="ts">
import { useDropZone } from "@vueuse/core";
import { reactive, ref, nextTick, shallowRef } from "vue";
import fileSelect from "@/components/file-select/index.vue";
import Compressor from "compressorjs";
import { ElMessage } from "element-plus";
const props = withDefaults(
  defineProps<{
    accept?: string;
  }>(),
  {
    accept: "*",
  }
);
let dialogVisible = ref(false);
let formRef = ref();
let originFile: any = "";
let compressFile: any = shallowRef("");
let dataForm = reactive({
  quality: 0.8,
  width: undefined,
  height: undefined,
  url: <any>"",
});
const setDialogViisbleHand = async () => {
  dialogVisible.value = true;
  await nextTick();
};
const dropZoneRef = ref<HTMLDivElement>();
const onDrop = (files: any) => {
  let file = files?.[0] ?? "";
  if (!file) return;
  getImgHand(file);
};
useDropZone(dropZoneRef, onDrop);
const resetCompressHand = () => {
  if (!originFile) return;
  getImgHand(originFile);
};
const getImgHand = (file: any) => {
  let accept = props.accept;
  let fileName = file.name;
  let suffix = fileName.substring(fileName.lastIndexOf(".")).toLowerCase();
  if (accept != "*") {
    let hasInSuffix = props.accept.split(",").indexOf(suffix) > -1;
    if (!hasInSuffix) {
      ElMessage.error("文件格式有误");
      return;
    }
  }
  originFile = file;
  new Compressor(file, {
    quality: dataForm.quality,
    width: dataForm.width || undefined,
    height: dataForm.height || undefined,
    success(file) {
      compressFile.value = file;
      let fileReader:any = new FileReader();
      fileReader.onload = () => {
        dataForm.url = fileReader.result;
        fileReader = null
      };
      fileReader.readAsDataURL(file);
    },
    error() {
      ElMessage.error("压缩图片失败");
    },
  });
};

const closeHand = () => {
  dialogVisible.value = false;
};
const confirmHand = () => {
  emits("change", { url: dataForm.url, file: compressFile.value });
  closeHand();
};
const resetFileHand = () => {
  formRef.value.resetFields();
  dataForm.url = "";
  originFile = null;
  compressFile.value = null;
};
const emits = defineEmits(["change"]);
</script>

<style lang="scss" scoped>
.drap-wrap {
  width: 100%;
  height: 100px;
  background-color: #f2f3f5;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
}
.img-wrap {
  width: 100%;
  height: 100%;
  text-align: center;
}
</style>
