<template>
    <canvas ref="canvas"></canvas>
</template>

<script setup lang="ts">
import { ref, onMounted, watch } from 'vue';

const props = withDefaults(defineProps<{
    url: any,
    w: any,
    h: any,
    flip?: {
        horizontal?: boolean,
        vertical?: boolean
    }
}>(), {})
let canvas = ref()
let ctx: any = ''
let isFirst = true
let img: any = ''
watch(() => [props.w, props.h], () => drawImage())
watch(() => [props.flip?.horizontal, props.flip?.vertical], () => mirrorFlip())
onMounted(() => {
    ctx = canvas.value.getContext('2d')
    drawImage()
})

const drawImage = () => {
    let width = props.w
    let height = props.h
    canvas.value.width = width
    canvas.value.height = height
    if (isFirst) {
        isFirst = false
        img = document.createElement('img')
        img.src = props.url
        img.onload = () => {
            ctx.drawImage(img, 0, 0, width, height)
            mirrorFlip()
        }
    } else {
        mirrorFlip()
    }
}

const mirrorFlip = () => {
    const { vertical, horizontal } = props.flip ?? {}
    let width = props.w
    let height = props.h
    const hvalue = horizontal ? -1 : 1
    const vValue = vertical ? -1 : 1

    // 清除图片
    ctx.clearRect(0, 0, width, height)
    // 平移图片
    ctx.translate(width / 2 - width * hvalue / 2, height / 2 - height * vValue / 2)
    // 对称镜像
    ctx.scale(hvalue, vValue)
    ctx.drawImage(img, 0, 0, width, height)
    // 还原坐标点
    ctx.setTransform(1, 0, 0, 1, 0, 0)
}


</script>

<style lang="scss" scoped>

</style>