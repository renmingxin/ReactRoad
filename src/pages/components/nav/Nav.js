import React, { Component } from 'react'
import { NavLink, Route, withRouter } from 'react-router-dom';

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
            <div className="nav">
                <span style={{marginRight:'10px'}} onClick={ this.handleClick }>主页</span>
                <NavLink to="/" exact>首页</NavLink>
                <NavLink to="/activities">动态</NavLink>
                <NavLink to="/topics">话题</NavLink>
                <NavLink to="/login">登录</NavLink>
            </div>
        )
    }
    handleClick=()=>{
        console.log(this.props)
        this.props.history.push('/');
    }
}
export default withRouter(Nav);