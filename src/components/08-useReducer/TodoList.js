import React from 'react'
import PropTypes from 'prop-types'
import TodoListItem from './TodoListItem'

const TodoList = React.memo(( { todos, handleDelete, handleToggle } ) => {

    console.log('me volví a renderizar :(')

    return (
        <ul className="list-group list-group-flush">
            { 
                todos.map( 
                    (todo, index) => 
                    <TodoListItem 
                        key={ todo.id }
                        todo={ todo } 
                        index={ index } 
                        handleDelete={ handleDelete }
                        handleToggle={ handleToggle } 
                    />
                )
            }
        </ul>
    )
})

TodoList.propTypes = {
    todos: PropTypes.array.isRequired,
    handleDelete: PropTypes.func.isRequired,
    handleToggle: PropTypes.func.isRequired,
}

export default TodoList
