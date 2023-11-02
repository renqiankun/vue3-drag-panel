<template>
  <div class="component-list" @dragstart="handleDragStart">
    <div
      v-for="(item, index) in components"
      :key="index"
      class="list"
      :draggable="true"
      :data-index="index"
    >
      <span>{{ item.self.desc }} </span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { components } from "@/components/drag-components/index";

const handleDragStart = (e: any) => {
  let content = JSON.stringify(components[e.target.dataset.index]);
  e.dataTransfer.setData("component", content);
};
</script>

<style lang="scss" scoped>
.component-list {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: flex-start;
  align-content: flex-start;
  .list {
    width: 45%;
    height: 30px;
    margin-bottom: 10px;
    border: 1px solid #ddd;
    cursor: grab;
    text-align: center;
    color: #333;
    padding: 2px 5px;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: center;
    &:active {
      cursor: grabbing;
    }
  }
}
</style>
