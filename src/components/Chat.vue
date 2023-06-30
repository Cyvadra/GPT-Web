<script setup>
    import { onMounted, onUpdated, ref } from 'vue'
    import { useRouter } from 'vue-router'
    import { Promotion } from '@element-plus/icons-vue'
    import ChatContent from './ChatContent.vue'
    import json from '../utils/session'
    const router = useRouter()
    const routerPath = ref('')
    const talkList = ref([])
    const textarea = ref('')
//     const talkList = ref([
//         {
//             type: 0,
//             cursor: false,
//             content: `\`\`\`
// {"message":"hello world"}
// \`\`\``
//         },
//         {
//             type: 1,
//             cursor: false,
//             content: `哈喽沃德哈喽沃德
// 表头|表头|表头
// ---|:--:|---:
// 内容|内容|内容
// 内容|内容|内容


// 哈喽沃德哈喽沃德
// - 列表内容
// - 列表内容
// - 列表内容
// - 列表内容
// `
//         }
//     ])
    const markdown = `以下是使用 Go 语言编写的返回 JSON 格式 hello world 的例子：
\`\`\`go
package main

import (
    "encoding/json"
    "fmt"
)

func main() {
    data := map[string]string{
        "message": "hello world",
    }

    jsonStr, err := json.Marshal(data)
    if err != nil {
        fmt.Println("error:", err)
        return
    }

    fmt.Println(string(jsonStr))
}
\`\`\`

这个程序会生成以下的 JSON 数据：

\`\`\`
{"message":"hello world"}
\`\`\`

希望对你有所帮助！
`
    function pushNewContent() {
        const newItemTarget = talkList.value.push({ type: (talkList.value.length % 2 == 0) ? 0 : 1, cursor: true, content: ''}) - 1
        let index = 0
        let timerId = setInterval(() => {
            if (index >= markdown.length) {
                clearInterval(timerId)
                setTimeout(() => {
                    talkList.value[newItemTarget].cursor = false
                }, 1000)
                return
            }
            talkList.value[newItemTarget].content += markdown[index++]
        }, 50)
    }

    function handleSessionChange() {
        routerPath.value = router.currentRoute.value.path.replace('/', '')
        const sessionId = routerPath.value
        console.log(sessionId)
        for (let i = 0; i < json.length; i++) {
            if (sessionId == json[i].hash) {
                talkList.value = json[i].talk
            }
        }
    }

    onMounted(() => {
        handleSessionChange()
    })
    onUpdated(() => {
        handleSessionChange()
    })
</script>

<template>
    <div class="container">
        <div class="scroll">
            <el-scrollbar class="infinite-list" max-height="calc(100vh - 75px)">
                <div v-for="i in talkList" :key="i.index" :class="(i.type == 1) ? 'infinite-list-item grey' : 'infinite-list-item'">
                    <div class="infinite-list-item-result">
                        <el-avatar class="infinite-list-item-avatar" shape="square" :size="32">{{ (i.type == 1) ? 'GPT' : '😂' }}</el-avatar>
                        <ChatContent :showCursor="i.cursor" :content="i.content"></ChatContent>
                    </div>
                </div>
            </el-scrollbar>
        </div>
        <div class="input">
            <el-input
                input-style="font-size: 1rem;"
                v-model="textarea"
                type="textarea"
                resize="none"
                autosize
                placeholder="Send a message..."
            />
            <el-icon style="font-size: 22px;" @click="pushNewContent"><Promotion /></el-icon>
        </div>
    </div>

</template>

<style scoped>
.container {
    display: flex;
    flex-direction: column;
    height: 100%;
}

.scroll {
    height: 100%;
}

.input {
    background-color: transparent;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, .05);
    border-top: 1px solid rgba(0, 0, 0, .1);
}

.input .el-textarea {
    padding: 20px;
    max-width: 48rem;
    flex: 1;
}

.infinite-list {
    list-style: none;
}

.infinite-list .grey {
    background-color: #f7f7f8;
}

.infinite-list-item-avatar {
    width: 32px;
    height: 32px;
    margin-right: 10px;
    margin-left: -52px;
    border-radius: 6px;
}

.infinite-list-item-result {
    padding: 1rem;
    max-width: 48rem;
    margin: auto;
    flex: 1;
    display: flex;
    align-items: flex-start;
}

.infinite-list .infinite-list-item {
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 30px;
    border-bottom: 1px solid rgba(0, 0, 0, .1);
}

.infinite-list .infinite-list-item:last-child {
    border-bottom: none;
}

.infinite-list .infinite-list-item + .list-item {
    margin-bottom: 10px;
}

</style>