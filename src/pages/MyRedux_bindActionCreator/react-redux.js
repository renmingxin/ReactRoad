import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
const Context = React.createContext();

export class Provider extends Component {
    render(){
        console.log(this.props)
        return(
            <Context.Provider value = { this.props.store }>
                { this.props.children }
            </Context.Provider>
        )
    }
}

// export const connect = ()=>{
//     return ()=>{
//         return()=>{
//         }
//     }
// }

//↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓
export const connect = ( mapStateToProps, mapDispatchToProps )=> Component =>()=>{
    
    class Connect extends Component{
        componentDidMount(){
            const { store } = this.props;
            this.unsub = store.subscribe(()=>{
                this.setState(store.getState())
            })
        }

        componentWillUnmount(){
            this.unsub();
        }

        render(){
            const { store } = this.props;
            const state = mapStateToProps(store.getState());
            let dispatchMethods;
            if(typeof mapDispatchToProps === 'function'){
                dispatchMethods = mapDispatchToProps(store.dispatch);
            }else if(typeof mapDispatchToProps === 'object'){
                dispatchMethods = bindActionCreators(mapDispatchToProps, store.dispatch)
            }else {
                throw new Error(`mapDispatchToProps的值得类型只能为function或object`)
            }

            const dispatchMethods = mapDispatchToProps(store.dispatch);
            return(
                <Component {...state} {...dispatchMethods}> </Component>
            )
        }
    }
    
    
    
    
    return(
        <Context.Consumer>
            {
                store => { return( <Connect store={store}></Connect> ) }
            }
        </Context.Consumer>
    )
}