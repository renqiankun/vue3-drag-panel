<template>
  <div class="toolbar-wrap">
    <fileSelect accept=".png,.gif,.jpg,.jpeg" @change="getImgHand"
      >上传文件</fileSelect
    >
    <el-button type="primary" plain @click="addTextHand">添加文字</el-button>
    <el-button type="primary" plain @click="previewHand">预览</el-button>
    <el-button type="primary" plain @click="previeJson">json</el-button>

    <div style="margin-left: 20px;">
      缩放
      <el-input-number :step="0.1" v-model="initScaleRatio"></el-input-number>
    </div>

    <div style="margin-left: 20px;">
      高度(vh)
      <el-input-number :step="1" v-model="initHeight"></el-input-number>
    </div>
  </div>

  <el-dialog align-center width="1040px" title="预览" v-model="dialogVisible">
    <div class="preview-wrap">
      <preview disabled :parent-width="1000" :components="components"></preview>
    </div>
  </el-dialog>

  <el-dialog
    align-center
    width="1200px"
    title="预览JSON"
    v-model="jsonDialogVisible"
  >
    <div class="preview-wrap-json">
      <pre>{{ components }}</pre>
    </div>
  </el-dialog>
</template>

<script setup lang="ts">
import fileSelect from "@/components/file-select/index.vue";
import { inject, ref } from "vue";
import preview from "@/components/drag-components/Editor/preview.vue";
import { initScaleRatio,initHeight } from "@/components/drag-components/Editor/layout";
let components: any = inject("components", ref([]));
const getImgHand = (file: any) => {
  const fileReader = new FileReader();
  fileReader.onload = () => {
    const srcData = fileReader.result;
    let image: any = new Image();
    image.src = srcData;
    image.onload = () => {
      components.value.push({
        name: "Picture",
        url: srcData,
        w: image.width,
        h: image.height,
        lockAspectRatio: true,
        flip: {
          horizontal: false,
        },
      });
    };
  };
  fileReader.readAsDataURL(file);
};

const addTextHand = () => {
  let uid = "prop_" + parseInt((Math.random() * 10000) as any);
  components.value.push({
    name: "Text",
    prop: uid,
    w: "auto",
    h: "auto",
    defaultText: uid,
  });
};

let dialogVisible = ref(false);
const previewHand = () => {
  dialogVisible.value = true;
};

let jsonDialogVisible = ref(false);
const previeJson = () => {
  jsonDialogVisible.value = true;
};
</script>

<style lang="scss" scoped>
.toolbar-wrap {
  width: 100%;
  height: 60px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
  display: flex;
  align-items: center;
  box-sizing: border-box;
  padding: 0 30px;
}

.preview-wrap {
  height: 80vh;
}
.preview-wrap-json {
  height: 80vh;
  overflow: auto;
}
</style>
