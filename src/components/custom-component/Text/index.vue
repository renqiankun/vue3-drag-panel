<template>
  <div
    :contenteditable="canEdit"
    @blur="handleBlur"
    @input="handleInput"
    ref="text"
    :class="{ 'text-wrap': true, 'can-edit': canEdit }"
    @dblclick="setEdit"
  >
    {{ modelValue || defaultModelValue }}
  </div>
</template>

<script setup lang="ts">
import { ref, nextTick } from "vue";

const props = withDefaults(
  defineProps<{
    modelValue: any;
    defaultModelValue: any;
    data: any;
    color?: string;
    bgColor?: string;
    padding?: string;
    radius?: string;
    fontSize?: string;
    borderColor?: string;
    align?:string
    w?: any;
    h?: any;
    noWordWrap?: boolean;
    overEllipsis?: boolean;
    disabled?:boolean
    hasModelValue?:boolean
  }>(),
  {
    modelValue: "",
    color: "",
    bgColor: "",
    padding: "",
    radius: "",
    fontSize: "",
    borderColor: "",
    noWordWrap: false,
    overEllipsis: false,
    disabled:false
  }
);
let canEdit = ref(false);
let text = ref();
const setEdit = async () => {
  if(props.disabled) return
  canEdit.value = true;
  // 全选
  selectText(text.value);
  await nextTick();
  text.value.focus();
};

const selectText = (element: any) => {
  const selection: any = window.getSelection();
  const range = document.createRange();
  range.selectNodeContents(element);
  selection.removeAllRanges();
  selection.addRange(range);
};

const handleBlur = () => {
  canEdit.value = false;
};
const handleInput = (e: any) => {
  if(props.hasModelValue){
    eimts("update:modelValue", e.target.innerText);
  }
  eimts("update:defaultModelValue", e.target.innerText);
};
const eimts = defineEmits([
  "update:modelValue",
  "update:defaultModelValue",
  "click",
]);
</script>

<style lang="scss" scoped>
.text-wrap {
  color: v-bind(color);
  background-color: v-bind(bgColor);
  padding: v-bind(padding);
  border-radius: v-bind(radius);
  font-size: v-bind(fontSize);
  border: v-bind(borderColor);
  word-break: break-all;
  white-space: v-bind("noWordWrap?'nowrap':''");
  overflow: v-bind("overEllipsis?'hidden':'auto'");
  text-overflow: v-bind("overEllipsis?'ellipsis':'unset'");
  text-align:v-bind("align?align:'left'");
}
</style>
