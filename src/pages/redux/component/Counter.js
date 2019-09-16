import React from 'react';
// import store from '../index.js' // 一起注释的行
import { connect } from 'react-redux' //connect方法

import * as Actions from '../actions/counter.js'

class Counter extends React.Component{

    // 一起注释的行
    // state = {
    //     count:store.getState().counter.count 
    // }

    // 一起注释的行
    // componentDidMount(){
    //     store.subscribe(()=>{
    //         this.setState({
    //             count:store.getState().counter.count
    //         })
    //     })
    // }

    render(){
        return (
            <div>
                {/* <span>{ this.state.count }</span> */}
                <span>{this.props.count}</span>
                <button onClick={this.handleAdd}>Add</button>
            </div>
        )
    }

    handleAdd=()=>{
        //// 一起注释的行
        // const action = Actions.getCountAddAction();
        // store.dispatch(action);

        this.props.add();
    }

    // handleStoreChange = ()=>{
    //     this.setState(store.getState())
    // }
}

const mapStateToProps = (state) =>({
    count: state.counter.count
})

const mapDispatchToProps = (dispatch) =>({
    add:()=>{
        dispatch(Actions.getCountAddAction())
    }
})

//参数是俩对象
export default connect(mapStateToProps, mapDispatchToProps)(Counter);