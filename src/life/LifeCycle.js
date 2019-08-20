import React from 'react'
import ChildLifeCycle from './ChildLifeCycle.js'
import LifeCycle167 from './LifeCycle167.js'


//React16.3版本之前的生命周期
//16.3版本移除了  componentWillMount  componentWillUpdate componentWillReceiveProps 三个函数
class LifeCycle extends React.Component{
    static defaultProps = {}
    static propTypes = {}

    
    constructor(){
        console.log('1.constructor')
        super();
        this.state = {
            count:0
        };
    }

    //组件将要挂载
    componentWillMount(){
        //这里可以进行一些ajax的请求  但是官方不建议 有冲突 在 16.3版本后就被移除了componentWillMount 这里可以干的事情在constructor也能干
        console.log('1.componentWillMount')
    }
    render(){
        //这里不要进行ajax请求 和setState 会栈溢出
        console.log('1.render')
        return(
            <>
                <div>
                    <div>count的值:{this.state.count}</div>
                    <button onClick={this.handleClick}>增加count的值</button>
                </div>
                {/* {
                    this.state.count === 0
                    ?<ChildLifeCycle n={this.state.count}></ChildLifeCycle>
                    :''
                }
                 */}
                 <LifeCycle167 n={this.state.count}></LifeCycle167>
            </>
        )
    }

    componentDidMount(){
        //这里可以愉快的进行ajax请求 赋值
        console.log('1.componentDisMount')
    }

    //将要更新组件吗？
    shouldComponentUpdate(nextProps, nextState){
        //可以优化性能
        console.log(nextProps,nextState)
        console.log('1.shouldComponentUpdate')
        if(nextState.count === this.state.count) {
            return false
        }else {
            return true;
        }
    }

    //组件将要更新
    componentWillUpdate(){
        //不能进行setState操作 会栈溢出
        //基本上不会去使用这个生命周期函数 16.3移除
        console.log('1.componentWillUpdate')
    }

    //更新完毕
    componentDidUpdate(){
        //不能进行setState操作 会栈溢出
        //基本上不会去使用这个生命周期函数
        console.log('1.componentDidUpdate')
    }

    handleClick=()=>{
        //会去执行shouldComponentUpdate -> componentWillUpdate -> render -> componentDidUpdate
        this.setState({
            count:this.state.count+0 
        })
    }
}
export default LifeCycle;