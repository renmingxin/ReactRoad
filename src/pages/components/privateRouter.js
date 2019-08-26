import React from 'react';
import { Route,Redirect } from 'react-router-dom';

const PrivateRouter = ({component:Component,...props})=>{
    console.log(props)
    return(
        <Route {...props} render={(routeProps)=>{
            const isLogin = document.cookie.includes('login=true');
            if(isLogin){
                return <Component></Component>
            }else {
                alert('未登录，跳转到登录页')
                return <Redirect to={{
                    pathname:'/login',
                    state:{
                        from:routeProps.location.pathname
                    }
                }}></Redirect>
            }
        }}></Route>
    )
}

export default PrivateRouter;