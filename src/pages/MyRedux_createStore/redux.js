// import { createStore } from 'redux';

const ActionTypes = {
    INIT:'@@redux/INIT'
}

/**
 * 
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
