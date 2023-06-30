<script setup>
    import { ref } from 'vue';
    import ChatContent from './ChatContent.vue'
    const talkList = ref('')
    const showCursor = ref(true)
    const markdown = `咱就是说这个页面《也许是世界上最简约的 index》 （确信

算是一个小里程碑的 Demo

目前 Demo 的 bug：

- 因为使用了 vue-router 的 history 模式，本地运行(没配置 nginx 的时候刷新页面会 404) 😂
- 还不支持发送 😂
- 对消息发送方的判断还有问题（小问题啦～ 😂

目前实现了的但这个 Demo 看不出来的 feature（雾：

 - emmm。
 - emmm。。
 - emmm。。。
 - emmm。。。。

\`\`\`
{"message":"hello world"}
\`\`\`

2333333333333（bushi

说明组件化还是挺方便的。。
`
    let index = 0
    let timerId = setInterval(() => {
        if (index >= markdown.length) {
            clearInterval(timerId)
            setTimeout(() => {
                showCursor.value = false
            }, 1000)
            return
        }
        talkList.value += markdown[index++]
    }, 50)
</script>

<template>
    <div class="container">
        <ChatContent class="home" :showCursor="showCursor" :content="talkList"></ChatContent>
        <!-- <h1 style="font-size: 4em; margin-bottom: 0;">😂</h1>
        <p>Tips：因为使用了 vue-router 的 history 模式，没配置 nginx 的时候刷新页面会 404</p> -->
    </div>
</template>

<style scoped>
    .container {
        display: flex;
        position: relative;
    }
    .home {
        margin: 20px 0 0 20px;
    }
</style>