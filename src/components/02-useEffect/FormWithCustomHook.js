import PropTypes from 'prop-types'
import { useForm } from '../../hooks/useForm'

import './simple-form.css'

const FormWithCustomHook = ( { title } ) => {

    const formData = {
        name: '',
        password: ''
    }

    const [ form, setFormInputState ] = useForm(formData, 'name')

    const handleSubmit = function( e ){
        e.preventDefault()
        console.log( form )
    }

    return <>
        <div className="form-div">
            <div>
                <form method="POST" onSubmit={ handleSubmit }>
                    <h4>{ title }</h4>
                    <hr />

                    <div className='mb-3'>
                        <input 
                            name="name"
                            id="name"
                            value={ form.name }
                            onChange={ setFormInputState }
                            className='form-control'
                            placeholder="Nombre"
                        />
                    </div>

                    <div className='mb-3'>
                        <input 
                            type="password"
                            name="password"
                            id="password"
                            value={ form.password }
                            onChange={ setFormInputState }
                            className='form-control'
                            placeholder="Contraseña"
                        />
                    </div>

                    <div className='mb-3 text-center'>
                        <button type="submit" className='btn btn-sm btn-primary'>
                            Guardar
                        </button>
                    </div>

                </form>
            </div>
        </div>            
    </>
}

FormWithCustomHook.propTypes = {
    title: PropTypes.string.isRequired
}

FormWithCustomHook.defaultProps = {
    title: 'Formulario'
}

export default FormWithCustomHook
