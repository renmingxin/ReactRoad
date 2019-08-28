import * as Types from '../actionType.js'

const initState = {
    count:0,
}

export default ( state = initState, action )=>{
    const newState = JSON.parse(JSON.stringify(state));
    switch (action.type) {
        case Types.ADD_COUNT:
            newState.count++;
            return newState;
            break;
        default:
            break;
    }
    return state;
}