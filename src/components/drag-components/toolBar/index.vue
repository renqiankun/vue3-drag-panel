<template>
  <div class="toolbar-wrap">

    <uploadImg
      accept=".png,.gif,.jpg,.jpeg"
      type="primary"
      plain
      @change="getCompressImgHand"
      >上传图片并压缩</uploadImg
    >
    <fileSelect accept=".png,.gif,.jpg,.jpeg" @change="getImgHand"
      >上传图片</fileSelect
    >
    <fileSelect accept=".svg" @change="getSvgHand">上传svg</fileSelect>
    <fileSelect accept=".png,.gif,.jpg,.jpeg" @change="getScaleImgHand"
      >上传缩放图片</fileSelect
    >
    <el-button type="primary" plain @click="previewHand">预览</el-button>
    <el-button type="primary" plain @click="previeJson">json</el-button>
    <el-button
      type="primary"
      :disabled="isMutiSelectList.length <= 1"
      plain
      @click="setGroupHand"
    >
      组合</el-button
    >
    <el-button
      type="primary"
      :disabled="
        isMutiSelectList.length != 1 ||
        isMutiSelectList?.[0]?.self?.name != 'Group'
      "
      plain
      @click="splitComponentHand()"
    >
      拆分</el-button
    >
    <el-button
      style="width: 100px"
      :loading="isSaving"
      type="primary"
      plain
      @click="setIntervalSaveHand()"
      >临时缓存
    </el-button>
    <history />
    <div class="label">
      缩放
      <el-input-number
        size="small"
        :step="0.1"
        v-model="initScaleRatio"
      ></el-input-number>
    </div>
  </div>

  <el-dialog
    align-center
    append-to-body
    width="1040px"
    title="预览"
    destroy-on-close
    v-model="dialogVisible"
  >
    <div class="preview-wrap">
      <preview v-if="dialogVisible" :pannel="pannel" v-model="data"></preview>
    </div>
  </el-dialog>

  <el-dialog
    align-center
    append-to-body
    width="1200px"
    title="预览JSON"
    v-model="jsonDialogVisible"
  >
    <div class="preview-wrap-json">
      <pre style="min-height: 200px" contenteditable>{{ pannel }}</pre>
    </div>
    <template #footer>
      <el-button type="primary">确认</el-button>
    </template>
  </el-dialog>
</template>

<script setup lang="ts">
import fileSelect from "@/components/file-select/index.vue";
import { computed, inject, reactive, ref, nextTick } from "vue";
import preview from "@/components/custom-component/preview/index.vue";
import { initScaleRatio } from "@/components/drag-components/Editor/layout";
import { getMinComponentArea, getUUID } from "@/utils/index";
import { ComponentsInterface } from "../editor";
import uploadImg from "./upload-img.vue";
import { setPannel } from "@/utils/storage";
import history from "./history.vue";
let pannel: any = inject("pannel", reactive({ components: [] }));
let data: any = reactive({
  name1: "哈哈",
  state: 1,
});

setInterval(() => {
  data.state = data.state == 1 ? 2 : 1;
  data.rate = data.rate == "40%" ? "100%" : "40%";
}, 1000);
let isMutiSelectList = computed(() => {
  return pannel.components.filter((item: any) => {
    return item.active;
  });
});
// 定时保存
let isSaving = ref(false);
const setIntervalSaveHand = () => {
  isSaving.value = true;
  setPannel(pannel);
  setTimeout(() => {
    isSaving.value = false;
  }, 500);
};
const getCompressImgHand = ({ url }: any) => {
  let image: any = new Image();
  image.src = url;
  image.onload = () => {
    pannel.components.push({
      w: image.width,
      h: image.height,
      self: {
        id: getUUID(),
        name: "Image",
        desc: "图片",
        url: url,
      },
    });
  };
};
const getImgHand = (file: any) => {
  const fileReader = new FileReader();
  fileReader.onload = () => {
    const srcData = fileReader.result;
    let image: any = new Image();
    image.src = srcData;
    image.onload = () => {
      pannel.components.push({
        w: image.width,
        h: image.height,
        self: {
          id: getUUID(),
          name: "Image",
          desc: "图片",
          url: srcData,
        },
      });
    };
  };
  fileReader.readAsDataURL(file);
};
const getSvgHand = (file: any) => {
  let fileReader: any = new FileReader();
  let fileReaderText: any = new FileReader();
  fileReader.onload = () => {
    const srcData = fileReader.result;
    let image: any = new Image();
    image.src = srcData;
    image.onload = () => {
      let w = image.width;
      let h = image.height;
      fileReaderText.onload = () => {
        pannel.components.push({
          w,
          h,
          self: {
            id: getUUID(),
            name: "icon-svg",
            desc: "缩放图片",
            url: fileReaderText.result,
          },
        });
        fileReaderText.abort();
        fileReader.abort();
        fileReader = null;
        fileReaderText = null;
      };
      fileReaderText.readAsText(file);
    };
  };
  fileReader.readAsDataURL(file);
};
let dialogVisible = ref(false);
const previewHand = () => {
  dialogVisible.value = true;
};

let jsonDialogVisible = ref(false);
const previeJson = () => {
  jsonDialogVisible.value = true;
};
const getScaleImgHand = (file: any) => {
  const fileReader = new FileReader();
  fileReader.onload = () => {
    const srcData = fileReader.result;
    let image: any = new Image();
    image.src = srcData;
    image.onload = () => {
      pannel.components.push({
        w: image.width,
        h: image.height,
        self: {
          id: getUUID(),
          name: "img-scale",
          url: srcData,
        },
      });
    };
  };
  fileReader.readAsDataURL(file);
};
// 组合
const setGroupHand = async () => {
  let mutiList: Array<any> = isMutiSelectList.value || [];
  let allListContentGroup: Array<ComponentsInterface> = [];
  mutiList.forEach((item) => {
    if (item.self.name == "Group") {
      allListContentGroup.push(...splitGroupHand(item));
    } else {
      allListContentGroup.push(item);
    }
  });
  let { left, right, top, bottom } = getMinComponentArea(allListContentGroup);
  let newMutiList = allListContentGroup.map((item) => {
    return {
      ...item,
      active: false,
      preventDeactivation: false,
      x: item.x - left,
      y: item.y - top,
    };
  });
  let components = pannel.components.filter((item: any) => {
    return isMutiSelectList.value.every((list: any) => item !== list);
  });
  let area = {
    x: left,
    y: top,
    w: right - left,
    h: bottom - top,
    self: {
      id: getUUID(),
      desc: "组合",
      name: "Group",
    },
    group: newMutiList,
  };
  components.push(area);
  await nextTick();
  pannel.components = components;
};
// 拆分
const splitComponentHand = () => {
  let group = isMutiSelectList.value?.[0] ?? {};
  let childs = splitGroupHand(group);
  let removeGroupComponents = pannel.components.filter((item: any) => {
    return group !== item;
  });
  removeGroupComponents.push(...childs);
  pannel.components = removeGroupComponents;
};
const splitGroupHand = (group: any) => {
  let components = group?.group ?? [];
  let groupX = group.x;
  let groupY = group.y;
  return components.map((item: any) => {
    return {
      ...item,
      x: groupX + item.x,
      y: groupY + item.y,
    };
  });
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
  // height: 80vh;
  height: 700px;
  width: 100%;
  overflow: hidden;
  margin: 0 auto;
}
.preview-wrap-json {
  // height: 80vh;
  overflow: auto;
}
.label {
  margin-left: 20px;
  font-size: 14px;
}
</style>
