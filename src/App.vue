<template>
  <toolBar />
  <div class="container">
    <div class="left">
      <leftComponentList />
    </div>
    <div class="mid" ref="midRef">
      <el-scrollbar ref="editScrollRef" always>
        <Editor
          ref="editorRef"
          @drop="handleDrop"
          @dragover="handleDragOver"
          :pannel="pannel"
          v-model="data"
          :active="activeComponent"
        >
        </Editor>
      </el-scrollbar>
    </div>
    <div class="right">
      <el-scrollbar>
        <rightComponentPanel
          :activeLength="activeComponent.length"
          :active="activeComponent[0]"
        />
      </el-scrollbar>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, provide, reactive, ref, watch } from "vue";
import toolBar from "@/components/drag-components/toolBar/index.vue";
import Editor from "@/components/drag-components/Editor/index.vue";
import leftComponentList from "@/components/drag-components/toolBar/left-pannel/index.vue";
import rightComponentPanel from "@/components/drag-components/toolBar/right-pannel/index.vue";
import { getUUID, mergeObjHand } from "./utils";
import { ComponentsInterface } from "./components/drag-components/editor";
import { getPannel } from "./utils/storage";
let pannel = reactive({
  version: "0.1",
  desc: "描述",
  width: 1000,
  height: 700,
  bgColor: undefined,
  color: undefined,
  fontSize: undefined,
  components: <Array<ComponentsInterface>>[],
});

try {
  let sessioPanel = getPannel();
  mergeObjHand(pannel, sessioPanel);
} catch (error) {}
let editorRef = ref();
let editScrollRef = ref();
provide("pannel", pannel);
let activeComponent = computed<Array<any>>(() => {
  return pannel.components?.filter?.((item: any) => {
    return item.active;
  });
});
watch(
  () => pannel.width,
  () => {
    editScrollRef.value?.update?.();
  },
  {
    flush: "post",
  }
);
let data: any = reactive({
  name1: "哈哈",
  state: 1,
});
setInterval(() => {
  data.state = data.state == 1 ? 2 : 1;
  data.red = data.red == "red" ? "green" : "red";
  data.rate = data.rate == "40%" ? "100%" : "40%";
}, 1000);
const handleDrop = (e: any) => {
  e.preventDefault();
  e.stopPropagation();

  const componentStr = e.dataTransfer.getData("component");
  let component: any = JSON.parse(componentStr);
  const rectInfo = editorRef.value.ref.getBoundingClientRect();
  if (component) {
    component.y = e.clientY - rectInfo.y;
    component.x = e.clientX - rectInfo.x;
    component.self.id = getUUID();
    pannel.components.push(component);
  }
};
const handleDragOver = (e: any) => {
  e.preventDefault();
  e.dataTransfer.dropEffect = "copy";
};
</script>

<style lang="scss" scoped>
.container {
  height: calc(100vh - 60px);
  display: flex;
  .left {
    min-width: 180px;
    overflow: hidden;
    box-sizing: border-box;
    padding: 10px;
  }
  .mid {
    flex: 1;
    overflow: hidden;
    box-sizing: border-box;
    background-color: #f2f3f5;
  }
  .right {
    min-width: 250px;
    max-width: 250px;
    height: 100%;
    box-sizing: border-box;
    overflow: hidden;
  }
}
</style>
