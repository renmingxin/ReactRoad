import React from 'react';
import TodoItem from './TodoItem';

class TodoList extends React.Component{
    render(){
        const {list,fn} = this.props;
        return (
            <>
                <ul>
                    {
                        list.map((item,index)=>(
                            <TodoItem 
                            key={index+item} 
                            task={item} 
                            index={index}
                            deleteTask={fn}>
                            {item}
                            </TodoItem>
                        ))
                    }
                </ul>
            </>
        )
    }
    
}
export default TodoList;