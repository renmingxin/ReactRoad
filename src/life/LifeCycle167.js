import React from 'react';

//React 16.7版本的声明周期
class LifeCycle167 extends React.Component {

    static defalutProps = {}
    static propsType = {}

    constructor(){
        console.log('3.constructor')
        super();
        this.state = {}
    }

    static getDerivedStateFromProps(){
        console.log('3.getDerivedStateFromProps')
        return null;
    }

    render(){
        console.log('3.render')
        return (
            <div>LifeCycle167</div>
        )
    }

    componentDidMount(){
        console.log('3.componentDidMount')
    }
}

export default LifeCycle167;