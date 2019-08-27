import React, { Component } from 'react'
import { NavLink, Route, withRouter } from 'react-router-dom';

import MenuLink from '../MenuLink.js'

import './style.css'

console.log(withRouter)
// 手写withRouter:解决 不是页面级的router
// const withRouter = (Component)=>{
//     console.log(Component);
//     return ()=>{
//         return <Route component={ Component }></Route>
//     }
// }

class Nav extends Component {
    render() {
        return (
            // <div className="nav">
            //     <span style={{marginRight:'10px'}} onClick={ this.handleClick }>主页</span>
            //     <NavLink to="/" exact>首页</NavLink>
            //     <NavLink to="/activities">动态</NavLink>
            //     <NavLink to="/topics">话题</NavLink>
            //     <NavLink to="/login">登录</NavLink>
            // </div>
            // ↑↑↑↑↑↑↑把NavLink 默认a标签的link 替换成 我们自己写的span标签的link 高阶组件↓↓↓↓↓↓↓
            <div className="nav">
                <span style={{marginRight:'10px'}} onClick={ this.handleClick }>主页</span>
                <MenuLink to="/" exact>首页</MenuLink>
                <MenuLink to="/activities">动态</MenuLink>
                <MenuLink to="/topics">话题</MenuLink>
                <MenuLink to="/login">登录</MenuLink>
            </div>
        )
    }
    handleClick=()=>{
        this.props.history.push('/');
    }
}
export default withRouter(Nav);