import * as Types from './actionType.js'

const initState = {
    inpVal:'asdasd',
    list:[1,2,3,4],
    count:0,
}
export default ( state = initState, action )=>{
    const newState = JSON.parse(JSON.stringify(state));
    switch (action.type) {
        case Types.CHANGE_INPUT_VAL:
            newState.inpVal = action.value;
            return newState;
            break;
        case Types.ADD_TODO_ITEM:
            newState.list.push(action.value);
            newState.inpVal = '';
            return newState;
            break;
        case Types.DELETE_TODO_ITEM:
            newState.list.splice(action.index,1);
            return newState;
            break;
        case Types.ADD_COUNT:
            newState.count++;
            return newState;
            break;
        default:
            break;
    }
    return state;
}