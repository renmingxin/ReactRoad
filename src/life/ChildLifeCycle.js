import React from 'react';



class ChildLifeCycle extends React.Component{
    render(){
        console.log('2.render')
        return (
            <div>11111</div>
        )
    }

    //组件将要接收传递的参数
    componentWillReceiveProps(nextProps){
        //可以进行状态的设置，也可以发送ajax请求 官方也不建议 在16.3也被移除了
        console.log('2.componentWillReceiveProps')
    }
    shouldComponentUpdate(){
        console.log('2.shouldComponentUpdate')
        return true;
    }
    componentWillUpdate(){
        console.log('2.componentWillUpdate')
    }
    componentDidUpdate(){
        console.log('2.componentDidUpdate')
    }
    //组件将要被卸载
    componentWillUnmount(){
        console.log('2.componentWillUnmount')
    }
}
export default ChildLifeCycle;