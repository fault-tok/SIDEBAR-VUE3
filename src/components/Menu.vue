<template>
    <div class="menu">
        <MenuItem
            v-for="(item, index) in menu_tree"
            :key="index"
            :label="item.label"
            :icon="item.icon"
            :depth="0"
            :data="item.children"
        >
        </MenuItem>
    </div>
</template>
<script setup>
import MenuItem from './MenuItem.vue';
import { ref, reactive, computed, onMounted } from "vue";

const menu_tree = reactive([
    {
        label: "Home",
        icon: "menu",
        children: [
            {
                label: "level 1.1",                
                children: [
                    {
                        label: "level 1.1.1",
                        patg: "2"
                    }
                ]
            },
            {
                label: "level 1.2",
                children: [
                    {
                        label: "level 1.2.1"
                    }
                ]
            }
        ]
    },
    {
        label: "DOWNLOAD",
        icon: "menu",
        children: [
            {
                label: "level 2.1"
            }
        ]
    }
])
</script>
<style lang="css">
.menu{
    position: fixed;
    height: 100vh;
    width: 240px;
    top: 0;
    left: 0;
    border-right: 1px solid #2dbdff;
    transition: all .3s ease;
    overflow: auto;
}
</style>