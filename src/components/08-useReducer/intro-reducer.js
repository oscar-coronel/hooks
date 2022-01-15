
const initialState = [
    {
        id: 1,
        todo: 'Comprar pan',
        done: false
    }
]

const todoReducer = ( state = initialState, action = {} ) => {
    const { type } = action
    switch( type ){
        case 'add':
            return action.controller( state )    
        default:
            break;
    }
    
    return state
}

let todos = todoReducer();

const newTodo = {
    id: 2,
    todo: 'Comprar leche',
    done: false
}

const addAction = {
    type: 'add',
    payload: newTodo,
    controller: function( state ){
        return [...state, this.payload]
    }
}

todos = todoReducer( todos, addAction)

console.log(todos)