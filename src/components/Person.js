import React from 'react';
import PropTypes from 'prop-types';

class Person extends React.Component{
    
    static defaultProps = {
        name:'rmx111'
    }
    static propTypes = {
        name:PropTypes.string,
        age:PropTypes.number,
        sex:PropTypes.oneOf(['男','女'])
    }
    render(){
        // console.log(this)
        // console.log(this.props)
        //解构赋值一下
        let {name,age,height,sex} = this.props;
        return (
            <>
                <div>姓名：{name}</div>
                <div>年龄：{this.props.age}</div>
                <div>身高：{height}</div>
                <div>性别：{sex}</div>
                <button onClick = {this.handleClick}>点击</button>
            </>
        )
    }
    handleClick = ()=>{
        this.setState({
            name:'rmxxxxxxxxxxxx'
        })
    }
}
export default Person;