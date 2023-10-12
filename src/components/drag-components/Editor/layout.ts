import { ref } from "vue";
export let commonAttr = {
  snap: true,
  snapTolerance: 5,
  parent: true,
  debug: false,
  rotatable: true,
  r: 0, // 选择角度
  active: false, // 是否激活
  preventDeactivation: false, // 阻止失活
  resizable: true,
};

// 初始缩放
export let initScaleRatio = ref(1);
export let initHeight = ref(90);
