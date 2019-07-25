import React from 'react';

//受控组件与非受控组件
//受控：在标签上面加name
class UnControl extends React.Component{
    taskB = React.createRef();//16.3版本之后
    state = {
        list:[],
    }
    render(){
        return (
            <>
                <div style={{marginTop:'30px'}}>
                    <span>A任务:</span>
                    <input 
                    type="text" 
                    ref={(dom)=>{this.taskA = dom}}
                    />
                    <button 
                    name="taskA"
                    onClick={this.handleClickA}
                    >
                    添加A任务
                    </button>
                </div>
                <div>
                    <span>B任务:</span>
                    <input 
                    type="text" 
                    ref={this.taskB}
                    />
                    <button 
                    onClick={this.handleClickB}
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
    handleClickA=(e)=>{
        const type = e.target.name;
        let task = this[type].value;
        if(type === 'taskA'){
            task = `任务A：${task}`
        }else {
            task = `任务B：${task}`
        }
        this.setState({
            list:[...this.state.list,task],
        })
        this[type].value = '';
    }
    handleClickB=(e)=>{
       let task = this.taskB.current.value;
       let lastValue = `任务A：${task}`;
       this.setState({
            list:[...this.state.list,lastValue],
       })
       this.taskB.current.value = '';
    }
    

}
export default UnControl;