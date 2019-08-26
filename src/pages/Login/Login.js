import React, { Component } from 'react'

export default class Login extends Component {
    state = {
        isLogin:document.cookie.includes('login=true')
    }

    render() {
        return (
            <div>
                <button onClick={this.hanleLogin}>{this.state.isLogin?'退出':'登录'}</button>
            </div>
        )
    }

    hanleLogin = ()=>{
        const isLogin = this.state.isLogin;
        if(isLogin){
            this.setCookie('login','',-1);
        }else {
            this.setCookie('login',true,300);
        }
        this.setState({
            isLogin: !isLogin
        })
    }

    setCookie = (key, value, day)=>{
        const expires = day * 24 * 60 * 60 * 1000;
        const date = new Date(+new Date() + expires);
        document.cookie = `${key}=${value};expires=${date.toUTCString()}`
    }
}
