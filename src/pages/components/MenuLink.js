import React from 'react';
import { Route } from 'react-router-dom'

//component  只去渲染一个组件 并且需要匹配
//render     匹配路径的时候 渲染render函数的返回值
//children   不管你路径匹不匹配 都会去渲染children的返回值


const MenuLink = ({ to, ...props })=>{
    return (
        <Route path={to} {...props} children={(RouteProps)=>{
            console.log(RouteProps.match)
            return (
                <span 
                onClick={()=>{ RouteProps.history.push(to) }}
                className={RouteProps.match ? 'active':''}
                
                >{ props.children }</span>
            )
        }}>
        </Route>
    )
}

export default MenuLink;