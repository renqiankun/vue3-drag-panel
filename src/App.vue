<template>
  <toolBar />
  <div class="container">
    <div class="left">
      <leftComponentList />
    </div>
    <div class="mid" ref="midRef">
      <div :style="{ height: initHeight + 'vh' }">
        <Editor :parentWidth="1000" :components="components" v-model="data">
        </Editor>
      </div>
    </div>
    <div class="right">
      <rightComponentPanel :active="activeComponent" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted, provide, reactive, ref } from "vue";
import toolBar from "@/components/toolBar/index.vue";
import Editor from "@/components/drag-components/Editor/index.vue";
import leftComponentList from "@/components/toolBar/left-component-list.vue";
import rightComponentPanel from "@/components/toolBar/right-component-panel.vue";
import { initHeight } from "./components/drag-components/Editor/layout";
let components = ref([
  // {
  //   name: 'Text',
  //   w:'auto',
  //   h:'auto',
  //   prop: 'name1'
  // }
]);
provide("components", components);
let activeComponent = computed(() => {
  let active = "";
  components.value.forEach((item: any) => {
    if (!active && item.active) {
      active = item;
    }
  });
  return active;
});
let data = reactive({
  name1: "哈哈",
});

let midRef = ref();
let parentWidth = ref(0);
onMounted(() => {
  parentWidth.value = midRef.value.offsetWidth;
});
</script>

<style lang="scss" scoped>
.container {
  height: calc(100vh - 60px);
  display: flex;
  .left {
    width: 100px;
    // box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
    overflow: hidden;
  }
  .mid {
    flex: 1;
    overflow: hidden;
    display: flex;
    justify-content: center;
    overflow-y: auto;
  }
  .right {
    width: 200px;
    height: 100%;
    // box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
    overflow: hidden;
  }
}
</style>
