const initState = {
    inpVal:'asdasd',
    list:[1,2,3,4]
}

export default ( state = initState, action )=>{
    const newState = JSON.parse(JSON.stringify(state));
    switch (action.type) {
        case 'CHANGE_INPUT_VAL':
            newState.inpVal = action.value;
            return newState;
            break;
        case 'ADD_TODO_ITEM':
            newState.list.push(action.value);
            newState.inpVal = '';
            return newState;
            break;
        case 'DELETE_TODO_ITEM':
            newState.list.splice(action.index,1);
            return newState;
            break;
        default:
            break;
    }
    return state;
}