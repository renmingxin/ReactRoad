import React from 'react';
import {Route} from 'react-router-dom'

import Nav from './pages/components/nav/Nav.js'
import './style/app.css'


class App extends React.Component{
	
    render(){
		return(
			<div className="app">
                <Nav></Nav>
                {/* ↓↓↓↓↓高阶组件（组件返回一个组件）↓↓↓↓↓ */}
                {/* <Route path="/" component={Nav}></Route> */}
				<div className="content">
					{this.props.children}
				</div>
			</div>
		)
	}
}
export default App;
