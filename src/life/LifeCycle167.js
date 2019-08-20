import React from 'react';

//React 16.7版本的声明周期
class LifeCycle167 extends React.Component {

    static defalutProps = {}
    static propsType = {}

    constructor(){
        console.log('3.constructor')
        super();
        this.state = {
            childCount:0
        }
    }

    static getDerivedStateFromProps(){
        console.log('3.getDerivedStateFromProps')
        return null;
    }

    render(){
        console.log('3.render')
        return (
            <div>
               <div>另一个子组件的childCount值：{this.state.childCount}</div> 
               <button onClick={ this.handleClick }>增加childCount的值</button>
            </div>
        )
    }

    componentDidMount(){
        console.log('3.componentDidMount')
    }

    shouldComponentUpdate(){
        console.log('3.shouldComponentUpdate')
        return true;
    }

    //拿到之前的快照
    getSnapshotBeforeUpdate(){
        // 必须和componentDidUpdate写在一起
        console.log('3.getSnapshotBeforeUpdate')
        return {
            a:10
        };
    }

    
    componentDidUpdate(prevProps, prevState, snapShot){
        console.log(prevProps, prevState, snapShot)//{n: 0} {childCount: 0} {a: 10}
        console.log('3.componentDidUpdate')
    }


    handleClick = ()=>{
        this.setState({
            childCount:this.state.childCount+1
        })
    }
}

export default LifeCycle167;