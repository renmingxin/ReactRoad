// import { createStore } from 'redux';
import todoList from './store/reducers/todoList';
import counter from './store/reducers/counter';


const ActionTypes = {
    INIT:'@@redux/INIT'
}

/**
 * createStore
 * @param {Function} reducer  获取一个最新的状态，根据派发的任务进行一个处理
 * @param {Object}   preloadedState 相当于initState一个初始的状态 值
 * @param {Function} enhancer 用于浏览器的redux的插件
 * 
 */
export const createStore = (reducer, preloadedState, enhancer)=>{

    if (typeof preloadedState === 'function' && typeof enhancer === 'undefined') {
        enhancer = preloadedState;
        preloadedState = undefined;
    }

    if (typeof enhancer === 'function') {
        return enhancer(createStore)(reducer, preloadedState)
    }

    if (typeof reducer !== 'function') {
        throw new Error('传入的reducer必须为函数')
    }


    let state = preloadedState;
    let listeners = [];
    let isDispatching = false;

    const getState = () => state;  //const getState = () => {return state}

    const dispatch = action =>{
        if(typeof action !== 'object'){
            throw new Error('传入的action必须为一个简单对象')
        }
        if(typeof action.type === 'undefined'){
            throw new Error('传入的action.type的值不能为undefined')
        }

        if(isDispatching){
            throw new Error('不能在reducer中调用dispatch')
        }

        try{
            isDispatching = true;
            state = reducer( state, action );
        }finally{
            isDispatching = false;
        }
        

        listeners.forEach( item => item() );
    }; 

    const subscribe = fn =>{
        listeners.push(fn) //方法数组

        return ()=>{ //返回一个取消订阅的函数
            const index = listeners.indexOf(fn);
            listeners.splice(index,1);
        }
    }

    dispatch({type: ActionTypes.INIT});

    return {
        getState,
        dispatch,
        subscribe
    }
}





const reducers = {
    todoList,
    counter,
}

/**
 * combineReducers
 */
export const combineReducers = (reducers)=>{
    const finallyReducers = {};

    for (const key in reducers) {
        const reducer = reducers[key];
        if (typeof reducer === 'undefined') {
            console.error(`reducer${key}的值为undefined`)
        }
        if (typeof reducer === 'function') {
            finallyReducers[key] = reducer;
        }
    }

    for (const key in finallyReducers) {
        const reducer = finallyReducers[key];
        const state =  reducer(undefined,{type: ActionTypes.INIT})
        
        if (typeof state === 'undefined') {
            throw new Error(`Reducer${key}的值为undefined,该reducer非法`)
        }
    }

    return (state = {}, action)=>{
        for (const key in finallyReducers) {
            const reducer = finallyReducers[key];
            const newState = reducer(state[key], action);
            state[key] = newState;
        }
        // state['todoList'] = todoList;
        // state['counter'] = counter;
        return state;
    }
}

console.log(combineReducers(reducers)(undefined, {type: ActionTypes.INIT}))
;
