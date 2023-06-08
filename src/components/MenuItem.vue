<template>
    <div class="menu-item" :class="{expanded: expanded}">
        <div 
            class="label"
            @click="toggleMenu()"
            :style="{
                paddingLeft: depth * 20 + 20 + 'px'
            }"
        >
            <div class="left">
                <i v-if="icon" class="material-symbols-outlined"> {{ icon }} </i>
                <span class="menu-header">{{ label }}</span>
            </div>
            <div v-if="data" class="right">
                <i class="material-symbols-outlined expand" :class="{expanded: expanded}"> chevron_right </i>
            </div>                        
        </div>
        <div 
            class="item-container" 
            v-show="showChildren"
            ref="container"
            :style="{height : containerHeight}"
        > 
            <MenuItem
                v-for="(item,index) in data"
                :key="index"
                :label="item.label"
                :icon="item.icon"
                :depth="depth + 1"
                :data="item.children"
            >
            </MenuItem>           
        </div>
    </div>
</template>
<script setup>
import { ref } from "vue";
import { nextTick } from 'vue';

const showChildren = ref(false);
const expanded = ref(false);
const containerHeight = ref(0);
const container = ref(null);
const props = defineProps({
    label: {
        type: String,
        required : true
    },
    icon: {
        type: String
    },
    depth: {
        type: Number,
        required : true
    },
    data: {
        type: Array
    }
})

const toggleMenu = () => {    
    expanded.value = !expanded.value

    if(!showChildren.value){
        showChildren.value = true;
        nextTick(() => {
            console.log(container.value.scrollHeight);
            containerHeight.value = `${container.value.scrollHeight}px`;
            setTimeout(() =>{
                containerHeight.value = "fit-content";
                container.value.style.overflow = "visible";
            }, 500)
        })
    }else{
        containerHeight.value = `${container.value.scrollHeight}px`;
        container.value.style.overflow = "hidden";        
        setTimeout(() => {
            containerHeight.value = `0px`
        },10)
        setTimeout(() => {
            showChildren.value = false;
        },500)
        
    }
}
</script>
<style lang="css">
.menu-header {
    font-size: 24px;
    color: #353535;
}
.menu-item{
    position: relative;
    width: 100%;        
}
/* CLASS LABEL */
.label{
    display: flex;
    flex-direction: row;
    transition: all .5s ease;
}
.label > div{
    width: 100%;
    display: flex;
    align-items: center;
    gap: 10px;
}
.label i{
    font-size: 30px;
    color: #535353;
    transition: all 0.3s ease;
}
.label i.expand{
    font-size: 22px;
    margin-top: 5%;
    transition: all .3s ease;
}
.label i.expand.expanded{
    transform: rotate(90deg);
}
.label:hover{
    background-color: #e7e7e7;
    cursor: pointer;
}
/* CLASS LABEL */
.item-container{
    width: 100%;
    overflow: hidden;
    transition: height .5s ease;;
}

</style>