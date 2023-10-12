<template>
    <div class="com-list-wrap">
        <div class="com-item" v-for="item in components" @click="setActiveHand(item)">
            <div class="close-wrap" @click.stop="delHand(item)">x</div>
            {{ item.name }}
        </div>
    </div>
</template>

<script setup lang="ts">
import { inject, ref } from 'vue';

let components: any = inject('components', ref([]))
const setActiveHand = (item:any)=>{
    item.active = true
}
const delHand = (delItem:any)=>{
    components.value = components.value.filter((item:any)=>{
        return item !== delItem
    })
}
</script>

<style lang="scss" scoped>
.com-list-wrap {
    width: 100%;
    box-sizing: border-box;
    padding: 0 5px;
    font-size: 14px;
    color: #333;
    height: 100%;
    overflow: hidden;
    overflow-y: auto;
    .com-item{
        box-sizing: border-box;
        padding: 10px;
        text-align: center;
        margin-top: 10px;
        box-shadow: 0 0 10px rgba(0,0,0,0.1);
        cursor: pointer;
        position: relative;
    }
}
.close-wrap{
    position: absolute;
    right: 0;
    top: 0;
    font-size: 12px;
    width: 12px;
    height: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    &:hover{
        background-color: #eaeaea;
    }
}
</style>