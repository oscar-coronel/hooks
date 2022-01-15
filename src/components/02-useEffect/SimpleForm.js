import PropTypes from 'prop-types'
import { Fragment, useEffect, useState } from 'react'
import Message from './Message'

import './simple-form.css'

const SimpleForm = ({ title }) => {

    const formData = {
        name: '',
        lastname: ''
    }

    const [ formState, setFormState ] = useState( formData )

    const handleInputChange = (event) => {
        const propToModify = event.target.name
        setFormState( ( oldInfo ) => {
            const newInfo = { ...oldInfo }
            newInfo[propToModify] = event.target.value
            return newInfo
        })
    }

    useEffect( () => {
        console.log('Cambió el apellido')
    }, [ formState.lastname ] )

    return <Fragment>
        <div className="form-div">
            <div>
                <form method="POST">
                    <h4>{ title }</h4>
                    <hr />

                    <div className="mb-3">
                        <input 
                            type="text" 
                            name="name"
                            id="name"
                            value={ formState.name } 
                            placeholder="Name" 
                            onChange={ handleInputChange }
                            className="form-control"
                        />
                    </div>
                    
                    <div className="mb-3">
                        <input 
                            type="text" 
                            name="lastname"
                            id="lastname"
                            value={ formState.lastname } 
                            placeholder="Lastname" 
                            onChange={ handleInputChange }
                            className="form-control"
                        />
                    </div>

                    { formState.name === '123' && <Message /> }

                </form>
            </div>
        </div>
    </Fragment>

}

SimpleForm.propTypes = {
    title: PropTypes.string.isRequired
}

SimpleForm.defaultProps = {
    title: 'Formulario'
}

export {
    SimpleForm as default
}