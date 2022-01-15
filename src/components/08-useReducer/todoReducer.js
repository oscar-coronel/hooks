const todoReducer = ( state = [], action = {}) => {
    const { type, payload } = action

    switch( type ){
        case 'add':
            return [ ...state, payload ]
        case 'delete':
            return state.filter( e => e.id !== payload )
        case 'toggle':
            return state.map( e => ({ ...e, done: e.id === payload ? !e.done : e.done }) )
        default:
            return state;
    }
}

export {
    todoReducer
}