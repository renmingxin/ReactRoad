import React, { Component } from 'react';
import { createStore } from "../redux";

const initState = {
    inpVal:'123'
}

function reducer(state = initState, action){
    const newState = JSON.parse(JSON.stringify(state));

    switch (action.type) {
        case 'CHANGE_VAL':
            newState.inpVal = action.value;
            // store.dispatch({type:'console'})
            return newState;
            break;
        case 'console':
            return newState;
        default:
            break;
    }

    return state;
}

const store = createStore(reducer, {a:100});

class Input extends Component{
    state = store.getState();

    componentDidMount(){
        this.unsub = store.subscribe(()=>{
            this.setState(store.getState());
            this.unsub();
        });
    }

    render() {
        return (
            <div>
                <span>输入框：</span>
                <input type="text" value={ this.state.inpVal } onChange={ this.handleChange }/>
                <button onClick={ this.handleClick }>点击</button>
                <p>{ this.state.inpVal }</p>
            </div>
        )
    }

    handleChange = (e)=>{
        const action = {
            type: 'CHANGE_VAL',
            value: e.target.value
        }
        store.dispatch(action)
    }

    handleClick = ()=>{
        console.log(store.getState().inpVal)
    }
}

export default Input;