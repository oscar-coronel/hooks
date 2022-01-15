import { useCallback, useEffect, useReducer } from 'react'
import PropTypes from 'prop-types'

import { todoReducer } from './todoReducer'
import TodoList from './TodoList'
import TodoAdd from './TodoAdd'

import './reducer.css'

const init = () => {
    const localStorageData = localStorage.getItem('TODOs')
    const initialState = !!localStorageData ? JSON.parse(localStorageData) : []
    return initialState
}

const TodoApp = ( { title } ) => {

    const [ state, dispatch ] = useReducer(todoReducer, [], init)

    useEffect(() => {
        console.log('cambió el todo')
        localStorage.setItem('TODOs', JSON.stringify(state) )
    }, [ state ])


    const handleDelete = useCallback(
        (id) => {
            const action = {
                type: 'delete',
                payload: id
            }
            dispatch( action )
        },
        [ dispatch ],
    )

    const handleToggle = useCallback(
        (id) => {
            const action = {
                type: 'toggle',
                payload: id
            }
            dispatch( action )
        },
        [ dispatch ],
    )

    const handleAddTodo = useCallback(
        (newTodo) => {
            const action = {
                type: 'add',
                payload: newTodo
            }
            dispatch( action )
        },
        [ dispatch ],
    ) 

    console.log( state )

    return <>
        <div className="p-5">
            <h1>{ title } <small>( { state.length } )</small></h1>
            <hr />

            <div className="row">
                <div className="col-7">
                    <TodoList 
                        todos={ state } 
                        handleToggle={ handleToggle } 
                        handleDelete={ handleDelete } 
                    />
                </div>
                <div className="col-5">
                    
                    <TodoAdd handleAddTodo={ handleAddTodo } />

                </div>
            </div>

        </div>
    </>
}

TodoApp.propTypes = {
    title: PropTypes.string.isRequired
}

TodoApp.defaultProps = {
    title: 'TodoApp'
}

export default TodoApp