<template>
  <toolBar @refresh="refreshEditorHand" :active="activeComponent" v-model="modelValueCom" />
  <div class="container">
    <div class="left">
      <leftComponentList
        :active="activeComponent?.[0] ?? {}"
        @delete="refreshEditorHand()"
      />
    </div>
    <div class="mid" ref="midRef">
      <el-scrollbar ref="editScrollRef" always>
        <Editor
          :key="editorIndex"
          ref="editorRef"
          @drop="handleDrop"
          @dragover="handleDragOver"
          @refresh="refreshEditorHand()"
          :pannel="pannel"
          v-model="modelValueCom"
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
import { computed, provide,  ref, watch } from "vue";
import toolBar from "@/components/drag-components/toolBar/index.vue";
import Editor from "@/components/drag-components/Editor/index.vue";
import leftComponentList from "@/components/drag-components/toolBar/left-pannel/index.vue";
import rightComponentPanel from "@/components/drag-components/toolBar/right-pannel/index.vue";
import { getUUID } from "@/utils";
import { PannelInterface } from "../drag-components/editor";
const props = withDefaults(
  defineProps<{
    modelValue: any;
    pannel: PannelInterface;
  }>(),
  {
    modelValue: () => ({}),
    pannel: () => {
      return {
        version: "0.1",
        desc: "描述",
        width: 1000,
        height: 700,
        bgColor: undefined,
        color: undefined,
        fontSize: undefined,
        components: [],
      };
    },
  }
);
provide("pannel", props.pannel);
let modelValueCom = computed({
  get() {
    return props.modelValue;
  },
  set(newVal) {
    emits("update:modelValue", newVal);
  },
});
let editorRef = ref();
let editScrollRef = ref();
let activeComponent = computed<Array<any>>(() => {
  return props.pannel.components?.filter?.((item: any) => {
    return item.active;
  });
});
watch(
  () => props.pannel.width,
  () => {
    editScrollRef.value?.update?.();
  },
  {
    flush: "post",
  }
);

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
    props.pannel.components.push(component);
  }
};
const handleDragOver = (e: any) => {
  e.preventDefault();
  e.dataTransfer.dropEffect = "copy";
};

let editorIndex = ref(1);
const refreshEditorHand = () => {
  editorIndex.value += 1;
};

const emits = defineEmits(["update:modelValue"]);
</script>

<style lang="scss" scoped>
.container {
  height: calc(100% - 60px);
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
