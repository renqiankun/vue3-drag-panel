<template>
    <div class="text-wrap" :contenteditable="canEdit" @blur="handleBlur" @input="handleInput" ref="text" :class="{ 'can-edit': canEdit }" @dblclick="setEdit">
        {{ modelValue || defaultText }}
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

withDefaults(defineProps<{
    modelValue: any,
    defaultText: any
}>(), {
    modelValue: ''
})
let canEdit = ref(false)
let text = ref()
const setEdit = () => {
    canEdit.value = true
    // 全选
    selectText(text.value)
}

const selectText = (element: any) => {
    const selection: any = window.getSelection()
    const range = document.createRange()
    range.selectNodeContents(element)
    selection.removeAllRanges()
    selection.addRange(range)
}

const handleBlur = () => {
    canEdit.value = false
}
const handleInput = (e: any) => {
    eimts("update:modelValue", e.target.innerText)
    eimts("update:defaultText", e.target.innerText)
}
const eimts = defineEmits(['update:modelValue', 'update:defaultText'])
</script>

<style lang="scss" scoped></style>