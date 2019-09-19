import React, { Component } from 'react';
const Context = React.createContext();

export class Provider extends Component {
    render(){
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
    return(
        <Context.Consumer>
            {
                store => {
                    return(
                        <Component>

                        </Component>
                    )
                }
            }
        </Context.Consumer>
    )
}