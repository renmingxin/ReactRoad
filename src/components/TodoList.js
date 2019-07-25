import React from 'react';

//类不像函数 必须手动添加render方法
class TodoList extends React.Component{
    constructor(){
        super();
        // this.state = {
        //     list:[1,2,3]
        // }
    }
    state = {
        intVal:'',
        list:[11111,22222,33333],
        count:0,
    }
    render(){
        return (
            <>
                <div>
                    <input 
                    type="text" 
                    value={this.state.intVal}
                    onChange={this.handleChange.bind(this)}
                    ></input>
                    <button onClick={this.handleClick}>添加</button>
                </div>
                <ul>
                    {
                        this.state.list.map((item,index)=>(
                            <li key={item}>
                                <span>{ item }</span>
                                <button onClick={()=>{this.deleteClick(index)}}>X</button>
                            </li>
                        ))
                    }
                </ul>
                <div  style={{marginBottom:'20px'}}>
                    <span>{this.state.count}</span>
                    <button onClick={this.addClick}>添加</button>
                </div>
            </>
        )
    }
    //如果使用es5的函数声明方式就需要用bind绑定this
    handleChange(e){
        console.log(this)
        // this.state.intVal = e.target.value;
        this.setState({
            intVal:e.target.value
        })
    }
    //如果用es6箭头函数来声明就不需要绑定this，this就是为不是箭头函数的this
    handleClick=()=>{
        if(this.state.intVal){
            console.log(this)
            this.setState({
                list:[...this.state.list,this.state.intVal]
            });
            this.state.intVal = '';
        }
    }
    deleteClick = (index) => {
        console.log(this)
        let list = this.state.list;
        list.splice(index,1);
        this.setState({
            list
        })
    }
    addClick=()=>{
        //↓↓↓↓↓最后执行只有3 因为在setState中传入的是对象 key值会被覆盖 所以一直都是最后一个值↓↓↓↓↓
        // this.setState({count:this.state.count+1})
        // this.setState({count:this.state.count+2})
        // this.setState({count:this.state.count+3})





        //传入函数的话 就会返回一个不会被覆盖的值 会层层累加 然后输出  得到6
        this.setState((prevState)=>{
            console.log(prevState);//{count: 0, intVal: "", list: [11111, 22222, 33333]}
            return {
                count:prevState.count + 1
            }
        })
        this.setState((prevState)=>{
            return {
                count:prevState.count + 2
            }
        })
        this.setState((prevState)=>{
            return {
                count:prevState.count + 3
            }
        })
    }
}

 
export default TodoList;