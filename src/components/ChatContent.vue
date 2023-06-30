<script setup>
    import { computed, onMounted, onUpdated, reactive, ref } from 'vue'
    import { marked } from 'marked'
    import hljs from 'highlight.js'
    import 'github-markdown-css/github-markdown-dark.css'
    import 'highlight.js/styles/vs2015.css'

    marked.setOptions({
        highlight: function(code, lang) {
            if (lang && hljs.getLanguage(lang)) {
                return hljs.highlight(code, { language: lang }).value
            }
            return hljs.highlightAuto(code).value
        }
    })

    const markdownContent = computed(() => {
        return marked.parse(props.content)
    })
    const props = defineProps({
        content: {
            type: String,
            required: true
        },
        showCursor: {
            type: Boolean,
            required: false
        }
    })
    const pos = reactive({ x: 0, y: 0 })
    const contentRef = ref(null)

    function getLastTextNode(dom) {
        const children = dom.childNodes
        for (let i = children.length - 1; i >= 0; i--) {
            const node = children[i]
            if (node.nodeType === Node.TEXT_NODE && /\S/.test(node.nodeValue)) {
                node.nodeValue = node.nodeValue.replace(/\s+$/, '')
                return node
            } else if (node.nodeType === Node.ELEMENT_NODE) {
                const last = getLastTextNode(node)
                if(last) {
                    return last
                }
            }
        }
        return null
    }

    function updateCursor() {
        const contentDom = contentRef.value
        const lastText = getLastTextNode(contentDom)
        const textNode = document.createTextNode('\u200b')
        if (lastText) {
            lastText.parentElement.appendChild(textNode)
        } else {
            contentDom.appendChild(textNode)
        }
        const domRect = contentDom.getBoundingClientRect()
        const range = document.createRange()
        range.setStart(textNode, 0)
        range.setEnd(textNode, 0)
        const rect = range.getBoundingClientRect()
        pos.x = rect.left - domRect.left
        pos.y = rect.top - domRect.top
        textNode.remove()
    }

    onMounted(updateCursor)
    onUpdated(updateCursor)
</script>

<template>
    <div class="container">
        <div class="markdown-body" ref="contentRef" v-html="markdownContent"></div>
        <div v-show="showCursor" class="cursor"></div>
    </div>
</template>

<style scoped>
.container {
    position: relative;
    width: 100%;
}

.markdown-body {
    background: inherit;
}

.cursor {
    content: '';
    position: absolute;
    width: 10px;
    height: 18px;
    background: rgb(187, 187, 187);
    animation: toggle .5s infinite;
    opacity: 0;
    left: calc(v-bind('pos.x') * 1px);
    top: calc(v-bind('pos.y') * 1px);
}

@keyframes toggle {
    30% {
        opacity: 1;
    }
}

</style>