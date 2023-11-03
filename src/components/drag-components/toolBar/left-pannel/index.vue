<template>
  <div class="com-list-wrap">
    <div class="com-wrap">
      <componentsList />
    </div>
    <div class="real-scroll-wrap">
      <el-scrollbar height="100%" always>
        <div ref="nodeWrap" class="real-com-wrap">
          <div
            :class="{ 'com-item': true, active: item.active }"
            v-for="(item,index) in pannel.components"
            @click="setActiveHand(item)"
          >
            <div class="close-wrap" @click.stop="delHand(item)">
              <el-icon><Close /></el-icon>
            </div>
            {{ item.self.desc || item.self.name }}-{{ index }}
            {{ item.self.name == "Group" ? item.group.length : "" }}
          </div>
        </div>
      </el-scrollbar>
    </div>
  </div>
</template>

<script setup lang="ts">
import { inject, ref, watch } from "vue";
import componentsList from "./components-list.vue";
import { Close } from "@element-plus/icons-vue";
const props = withDefaults(
  defineProps<{
    active: any;
  }>(),
  {}
);
let pannel: any = inject("pannel", ref({}));

const setActiveHand = (item: any) => {
  item.active = true;
};
const delHand = (delItem: any) => {
  pannel.components = pannel.components.filter((item: any) => {
    return item !== delItem;
  });
  emits("delete");
};

watch(
  () => props.active,
  () => {
    scrollActiveHand();
  },
  {
    flush: "post",
  }
);

let nodeWrap: any = ref();
const scrollActiveHand = () => {
  if (!props.active) return;
  let node = nodeWrap.value.querySelector(".active");
  node?.scrollIntoView({ block: "nearest", behavior: "smooth" });
};

const emits = defineEmits(["delete"]);
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
  display: flex;
  flex-direction: column;
  .com-wrap {
    flex: 1;
    border-bottom: solid 1px #eaeaea;
  }
}
.real-scroll-wrap {
  height: 300px;
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
      background-color: #e4f0fe;
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
