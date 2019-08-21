import React from 'react';

import Nav from './pages/components/nav/Nav.js'
import './style/app.css'


class App extends React.Component{
	
    render(){
		console.log(this)
		return(
			<div className="app">
				<Nav></Nav>
				<div className="content">
					{this.props.children}
				</div>
			</div>
		)
	}
}
export default App;
