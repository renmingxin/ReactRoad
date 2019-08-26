import React, { Component } from 'react'

export default class Home extends Component {
    authorInput = React.createRef();
    articleInput = React.createRef();
    render() {
        console.log(this.authorInput)
        return (
            <div>
                <header>发表话题</header>
                <content>
                    <form onSubmit= {this.handleSubmit}>
                        <div>
                            <label htmlFor="author">作者姓名:</label>
                            <input 
                            id="author" 
                            required 
                            type="text"
                            ref={this.authorInput}
                            />
                        </div>
                        <div>
                            <label htmlFor="article">文章标题:</label>
                            <input 
                            id="article" 
                            required 
                            type="text"
                            ref={this.articleInput}
                            />
                        </div>
                        <button>提交</button>
                    </form>
                </content>
            </div>
        )
    }
    handleSubmit=(e)=>{
        e.preventDefault();//阻止默认事件的发生
        const isLogin = document.cookie.includes('login=true');
        const author = this.authorInput.current.value;
        const title = this.articleInput.current.value;
        const id = Math.floor(Math.random() * 1000000000);
        
        const article = {
            id,
            author,
            title
        }
        if(isLogin) {
            this.setArticleStorage(article);
        }else {
            alert('未登录，即将跳转到登录页面')
            this.props.history.push('/login');
        }
    }

    setArticleStorage = (article)=>{
        const articleList = JSON.parse(localStorage.getItem('articleList')) || [];
        articleList.push(article);
        localStorage.setItem('articleList',JSON.stringify(articleList));
        this.jumpLink();
    }
    jumpLink=()=>{
        console.log(this.props)
        this.props.history.push('/topics');
    }

}
