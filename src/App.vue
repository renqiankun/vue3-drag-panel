<template>
  <div class="wrap">
    <dragPannelEditor :pannel="pannel" v-model="data" />
  </div>
</template>

<script setup lang="ts">
import dragPannelEditor from "@/components/drag-pannel-editor/index.vue";
import { reactive } from "vue";
import initJson from "@/utils/initJson";
import { getPannel } from "./utils/storage";
import { mergeObjHand } from "./utils";

let pannel = reactive({
  version: "0.1",
  desc: "描述",
  width: 1000,
  height: 700,
  bgColor: undefined,
  color: undefined,
  fontSize: undefined,
  components: [],
});
try {
  let sessioPanel: any = getPannel();
  sessioPanel = sessioPanel.version ? sessioPanel : initJson;
  mergeObjHand(pannel, sessioPanel);
} catch (error) {}

let data: any = reactive({
  name1: "哈哈",
  state: 1,
});
setInterval(() => {
  data.state = data.state == 1 ? 2 : 1;
  data.red = data.red == "red" ? "green" : "red";
  data.rate = data.rate == 40 ? 80 : 40;
}, 1000);
</script>

<style lang="scss" scoped>
.wrap {
  height: 100vh;
}
</style>
