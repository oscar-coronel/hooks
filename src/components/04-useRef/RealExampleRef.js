import PropTypes from 'prop-types'
import { useState } from 'react'

import MultipleCustomHook from './../03-examples/MultipleCustomHook'

const RealExampleRef = ( { title } ) => {

    const [show, setShow] = useState(false)

    const handleShow = () =>  setShow( !show )

    return <>
        <div className="container-fluid">
            <div className="row mt-3">
                <div className="col-8 mx-auto">
                    <h4 className="text-center">
                        { title }
                    </h4>
                    <hr />

                    {
                        show && <MultipleCustomHook />
                    }

                    <button className="btn btn-primary btn-sm" onClick={ handleShow }>
                        { show ? 'Ocultar' : 'Mostrar' }
                    </button>

                </div>
            </div>
        </div>
    </>

}

RealExampleRef.propTypes = {
    title: PropTypes.string.isRequired
}

RealExampleRef.defaultProps = {
    title: 'Real Example Ref'
}

export default RealExampleRef