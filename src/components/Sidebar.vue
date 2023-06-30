<script setup>
    import { Plus, ChatSquare } from '@element-plus/icons-vue'
    import json from '../utils/session'
</script>

<template>
    <div class="sidebar">
        <div class="sidebar-view">
            <div class="items new-chat"><el-icon><Plus /></el-icon><el-text class="span" truncated>New chat</el-text></div>
            <el-scrollbar class="infinite-list" max-height="calc(100vh - 72px)">
                <div v-for="i in json" :key="i">
                    <router-link :to="i['hash']">
                        <div class="items session"><el-icon><ChatSquare /></el-icon><el-text class="span" truncated>{{ i['titlle'] }}</el-text><span></span></div>
                    </router-link>
                </div>
            </el-scrollbar>
        </div>
    </div>
</template>

<style scoped>
.sidebar {
    color: #fff;
    height: 100%;
    background-color: rgb(32, 33, 35);
}
.sidebar-view {
    padding: 10px;
}

/* .sidebar-view .infinite-list {
    margin-right: -8px;
    padding-right: 10px;
} */

.sidebar-view .items {
    padding: 10px;
    border-radius: 4px;
    display: flex;
    align-items: center;
    cursor: pointer;
    user-select: none;
}

.sidebar .session {
    margin-bottom: 10px;
    transition: background-color .075s linear;
}

.sidebar .session:last-child {
    margin-bottom: 0;
}

.sidebar .session:hover {
    background-color: rgba(255, 255, 255, .075);
}

.sidebar-view .new-chat {
    border: 1px solid rgba(255, 255, 255, .2);
    transition: border-color, background-color .075s linear;
    margin-bottom: 10px;
}

.sidebar-view .new-chat .span {
    font-size: 16px;
}

.sidebar-view .new-chat:hover {
    background-color: rgba(255, 255, 255, .055);
    border-color: rgba(255, 255, 255, .4);
}

.sidebar-view .items .span {
    margin-left: 10px;
    color: inherit;
}
</style>