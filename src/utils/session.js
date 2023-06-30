export default (
    [
        {
            hash: "a0b923820dcc509a",
            titlle: "使用 Go 语言编写返回 JSON 的例子",
            talk: [
                {
                    type: 0,
                    cursor: false,
                    content: '如何使用 Go 语言返回一个 JSON 格式的 hello world？'
                },
                {
                    type: 1,
                    cursor: false,
                    content: `以下是使用 Go 语言编写的返回 JSON 格式 hello world 的例子：
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
                }
            ]
        },
        {
            hash: "9d4c2f636f067f89",
            titlle: "使用 PHP 语言编写返回 JSON 的例子",
            talk: [
                {
                    type: 0,
                    cursor: false,
                    content: '如何使用 PHP 语言返回一个 JSON 格式的 hello world？'
                },
                {
                    type: 1,
                    cursor: false,
                    content: '不会呢～'
                }
            ]
        },
        {
            hash: "4b5ce2fe28308fd9",
            titlle: "使用 Node.js 语言编写返回 JSON 的例子",
            talk: [
                {
                    type: 0,
                    cursor: false,
                    content: '如何使用 Node.js 语言返回一个 JSON 格式的 hello world？'
                },
                {
                    type: 1,
                    cursor: false,
                    content: `以下是关于如何使用 Node.js 语言返回一个 JSON 格式的 hello world 的例子：
 - 亲亲这边建议您去百度呢～
`
                }
            ]
        },
        {
            hash: "a2f3e71d9181a67b",
            titlle: "使用 Java 语言编写返回 JSON 的例子",
            talk: [
                {
                    type: 0,
                    cursor: false,
                    content: '如何使用 Java 语言返回一个 JSON 格式的 hello world？'
                },
                {
                    type: 1,
                    cursor: false,
                    content: '也不会呢～'
                }
            ]
        }
    ]
)
