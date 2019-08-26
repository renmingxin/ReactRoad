import React, { Component } from 'react'


// export default class Article extends Component {
//     render() {
//         const { match,location } = this.props; 
//         console.log(location)
//         return (
//             <div>
//                 <div>文章id：{match.params.id}</div>
//                 <div>文章作者：{location.state.author}</div>
//                 <div>文章标题：{location.state.title}</div>
//             </div>
//         )
//     }
// }
//↑↑↑↑↑↑↑↑↑↑↑↑↑↑把类组件改写成函数组件(简易的)↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓
const Article = (props)=>{
    const { match,location } = props; 
    return (
        <div>
            <div>文章id：{match.params.id}</div>
            <div>文章作者：{location.state.author}</div>
            <div>文章标题：{location.state.title}</div>
        </div>
    )
}

export default Article;