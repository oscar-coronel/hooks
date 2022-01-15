import PropTypes from 'prop-types'

const TodoListItem = ({ todo, index, handleDelete, handleToggle }) => {

    const { id, desc, done } = todo

    console.log('TodoListItem: Me volví a renderizar :(')

    return (
        <li 
            className="
                list-group-item 
                d-flex justify-content-between align-items-center
            " 
        >
            <p 
                className={ `
                    text-center 
                    m-0 
                    user-select-all
                ` + (done && 'complete' )
                }
                onClick={ () => handleToggle( id ) }
            >
                { index + 1 }. { desc }
            </p>
            <button 
                className="btn btn-danger btn-sm"
                onClick={ () => handleDelete(id) }
            >
                Borrar tarea
            </button>
        </li> 
    )
}

TodoListItem.propTypes = {
    todo: PropTypes.object.isRequired,
    index: PropTypes.number.isRequired,
    handleDelete: PropTypes.func.isRequired,
    handleToggle: PropTypes.func.isRequired
}

export default TodoListItem