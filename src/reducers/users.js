let initial_state = {

}

export default function userReducers(state=initial_state,action){
    switch (action.type) {
        case 'SOME_ACTION':
            return state;
    
        default:
            return state;
    }
}