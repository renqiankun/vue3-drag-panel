<template>
  <el-dropdown style="margin: 0 10px" :hide-on-click="false" max-height="300">
    <el-button type="primary" plain>
      历史<el-icon class="el-icon--right"><arrow-down /></el-icon>
    </el-button>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item
          v-for="(item, index) in historyList"
          @click.self="resetHistoryHand(item)"
          >序号 {{ historyList.length - index }}</el-dropdown-item
        >
      </el-dropdown-menu>
    </template>
  </el-dropdown>
  <el-button @click="taggleAutoHand()" plain :type="unWatch?'primary':'danger'">{{
    unWatch ? "自动保存中" : "已暂停保存"
  }}</el-button>
</template>

<script setup lang="ts">
import { debounce } from "lodash-es";
import { inject, onMounted, onUnmounted, reactive, ref, watch } from "vue";
import { ArrowDown } from "@element-plus/icons-vue";
import { mergeObjHand } from "@/utils";
let pannel: any = inject("pannel", reactive({ components: [] }));
let historyList: any = ref([]);
onMounted(() => {
  initWatchHan();
});
onUnmounted(() => {
  historyList.value = null;
  unWatch.value = null;
});
let unWatch: any = ref("");
const initWatchHan = () => {
  unWatch.value = watch(
    () => pannel,
    (newVal) => {
      saveHistoryHand(newVal);
    },
    {
      deep: true,
      flush: "post",
      immediate: true,
    }
  );
};

const saveHistoryHand = debounce((val: any) => {
  try {
    historyList.value.unshift(JSON.parse(JSON.stringify(val)));
  } catch (error) {}
}, 1000);

const resetHistoryHand = (item: any) => {
  unWatch.value?.();
  unWatch.value = null;
  mergeObjHand(pannel, item);
};
const taggleAutoHand = () => {
  if (unWatch.value) {
    unWatch.value?.();
    unWatch.value = null;
  } else {
    initWatchHan();
  }
};
</script>

<style lang="scss" scoped></style>
