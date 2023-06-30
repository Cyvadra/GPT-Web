<script setup>
import Sidebar from './Sidebar.vue';
import Chat from './Chat.vue';
</script>

<template>
    <el-row class="row">
        <el-col :span="3">
            <Sidebar />
        </el-col>
        <el-col :span="21">
            <router-view></router-view>
        </el-col>
    </el-row>
</template>

<style scoped>
    .row {
        height: inherit;
    }
</style>