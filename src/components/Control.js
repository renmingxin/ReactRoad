import React from 'react';

//受控组件与非受控组件
//受控：在标签上面加name
class Control extends React.Component{
    state = {
        list:[],
        taskA:'',
        taskB:''
    }
    render(){
        return (
            <>
                <div>
                    <span>A任务:</span>
                    <input 
                    type="text" 
                    name="taskA" 
                    onChange={this.handleChange} 
                    value={this.state.taskA}
                    />
                    <button 
                    name="taskA"
                    onClick={this.handleClick}
                    >
                    添加A任务
                    </button>
                </div>
                <div>
                    <span>B任务:</span>
                    <input 
                    type="text" 
                    name="taskB" 
                    onChange={this.handleChange} 
                    value={this.state.taskB}
                    />
                    <button 
                    onClick={this.handleClick}
                    name="taskB"
                    >
                    添加B任务
                    </button>
                </div>
                <ul>
                    {
                        this.state.list.map((item,index)=>(
                            <li key={item}>
                                <span>{item}</span>
                            </li>
                        ))
                    }
                </ul>
            </>
        )
    }

    handleChange = (e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }


    handleClick=(e)=>{
        const type = e.target.name;
        let task = this.state[type]
        if(type === 'taskA'){
            task = `任务A：${task}`
        }else {
            task = `任务B：${task}`
        }
        this.setState({
            list:[...this.state.list,task],
            [type]:'',
        })
    }
   

}
export default Control;