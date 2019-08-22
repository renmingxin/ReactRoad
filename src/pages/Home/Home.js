import React, { Component } from 'react'

export default class Home extends Component {
    render() {
        return (
            <div>
                <header>发表话题</header>
                <content>
                    <div>
                        <span>作者姓名:</span>
                        <input type="text"/>
                    </div>
                    <div>
                        <span>文章标题:</span>
                        <input type="text"/>
                    </div>
                </content>
                <button>提交</button>
            </div>
        )
    }
}
