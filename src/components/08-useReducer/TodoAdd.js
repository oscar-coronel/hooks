import React from 'react'
import PropTypes from 'prop-types'
import { useForm } from '../../hooks/useForm'

const TodoAdd = React.memo(( { handleAddTodo } ) => {

    console.log('Se renderizó TodoAdd :(')

    const [formState, handleInputChange, reset] = useForm( {desc: ''} )

    const handleSubmit = function( event ){
        event.preventDefault()
        if (formState.desc.trim() === '')
            return
        
        const newTodo = {
            id: new Date().getTime(),
            desc: formState.desc,
            done: false
        }

        handleAddTodo( newTodo )
        reset()
    }

    return (
        <>
            <h4>Agregar TODO</h4>
            <hr />

            <form method="POST" onSubmit={ handleSubmit }>
                <input 
                    value={ formState.desc }
                    onChange={ handleInputChange }
                    type="text"
                    name="desc" 
                    id="desc" 
                    className="form-control" 
                    placeholder="Aprender ..."
                    autoComplete="off"
                />

                <button 
                    type="submit"
                    className="btn btn-primary btn-sm d-block w-100 mt-3"
                >
                    Agregar
                </button>
            </form>
        </>
    )
})

TodoAdd.propTypes = {
    handleAddTodo: PropTypes.func.isRequired
}

export default TodoAdd