import React, { Component } from 'react'

export default class Article extends Component {
    render() {
        const { match,location } = this.props; 
        console.log(location)
        return (
            <div>
                <div>文章id：{match.params.id}</div>
                <div>文章作者：{location.state.author}</div>
                <div>文章标题：{location.state.title}</div>
            </div>
        )
    }
}
