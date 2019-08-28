import React, { Component } from 'react'
import store from '../index.js'
import * as Types from '../actionType.js'
import * as Actions from '../actions/todoList.js'

export default class ReduxTodoList extends Component {
    state = store.getState().todoList;

    componentDidMount(){
        store.subscribe(this.handleStoreChange);
    }

    render() {
        // console.log(this.state)
        return (
            <>
                <div>
                    <div>输入待办事项</div>
                    <input value={ this.state.inpVal } onChange={this.handleChange} type="text"/>
                    <button onClick={ this.handleAdd }>添加</button>
                </div>
                <ul>
                    {
                        this.state.list.map( (item,index)=>(
                            <li key={item+index}>
                                { item }
                                <button onClick={()=>{this.handleDel(index)}}>X</button>
                            </li>
                        ))
                    }
                </ul>
            </>
        )
    }
    handleChange=(e)=>{
        // const action = {
        //     type: Types.CHANGE_INPUT_VAL,
        //     value:e.target.value
        // }

        const action = Actions.getTodoChangeInputValAction(e.target.value);
        store.dispatch(action);
    }

    handleStoreChange = ()=>{
        this.setState(store.getState().todoList)
    }
    
    handleAdd = ()=>{
        // const action = {
        //     type:Types.ADD_TODO_ITEM,
        //     value:this.state.inpVal
        // }
        const action = Actions.getTodoAddItemAction(this.state.inpVal);
        store.dispatch(action);
    }

    handleDel = (index)=>{
        // const action = {
        //     type:Types.DELETE_TODO_ITEM,
        //     index:index
        // }
        const action = Actions.getTodoDeleteItemAction(index);
        store.dispatch(action);
    }
}
