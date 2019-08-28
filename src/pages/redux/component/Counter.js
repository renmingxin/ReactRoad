import React from 'react';
import store from '../index.js'
import * as Actions from '../actions/counter.js'

class Counter extends React.Component{

    state = {
        count:store.getState().counter.count
    }

    componentDidMount(){
        store.subscribe(()=>{
            this.setState({
                count:store.getState().counter.count
            })
        })
    }

    render(){
        return (
            <div>
                <span>{ this.state.count }</span>
                <button onClick={this.handleAdd}>Add</button>
            </div>
        )
    }

    handleAdd=()=>{
        const action = Actions.getCountAddAction();
        store.dispatch(action);
    }

    // handleStoreChange = ()=>{
    //     this.setState(store.getState())
    // }
}

export default Counter;