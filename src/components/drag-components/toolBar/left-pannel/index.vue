<template>
  <div class="com-list-wrap">
    <div class="com-wrap">
      <componentsList />
    </div>
    <el-scrollbar height="50%" always>
      <div class="real-com-wrap">
        <div
          :class="{ 'com-item': true, active: item.active }"
          v-for="item in pannel.components"
          @click="setActiveHand(item)"
        >
          <div class="close-wrap" @click.stop="delHand(item)">
            <el-icon><Close /></el-icon>
          </div>
          {{ item.self.desc || item.self.name }}
        </div>
      </div>
    </el-scrollbar>
  </div>
</template>

<script setup lang="ts">
import { inject, ref } from "vue";
import componentsList from "./components-list.vue";
import { Close } from "@element-plus/icons-vue";
let pannel: any = inject("pannel", ref({}));
const setActiveHand = (item: any) => {
  item.active = true;
};
const delHand = (delItem: any) => {
  pannel.components = pannel.components.filter((item: any) => {
    return item !== delItem;
  });
};
</script>

<style lang="scss" scoped>
.com-list-wrap {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  padding: 0 5px;
  font-size: 14px;
  color: #333;
  overflow: hidden;
  .com-wrap {
    height: 50%;
    border-bottom: solid 1px #eaeaea;
  }
}

.real-com-wrap {
  box-sizing: border-box;
  padding: 0 15px 0 0;
  .com-item {
    box-sizing: border-box;
    padding: 6px;
    text-align: center;
    margin-top: 10px;
    font-size: 13px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
    border: solid 1px #eaeaea;
    cursor: pointer;
    position: relative;
    &.active {
      background-color: #f2f3f5;
    }
  }
  .close-wrap {
    position: absolute;
    right: 0;
    top: 0;
    font-size: 13px;
    width: 13px;
    height: 13px;
    display: flex;
    align-items: center;
    justify-content: center;
    &:hover {
      background-color: #eaeaea;
    }
  }
}
</style>
