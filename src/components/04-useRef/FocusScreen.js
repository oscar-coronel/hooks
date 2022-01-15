import PropTypes from 'prop-types'
import { useRef } from 'react'

const FocusScreen = ( { title } ) => {

    const ref = useRef()

    const handleClick = () => ref.current.select()

    return <>
        <div className="container-fluid">
            <div className="row mt-3">
                <div className="col-8 mx-auto">
                    <h4 className="text-center">
                        { title }
                    </h4>
                    <hr />

                    <div className="mb-3">
                        <input
                            ref={ ref } 
                            className="form-control" 
                            placeholder="Nombre..." 
                        />
                    </div>

                    <button 
                        className="btn btn-primary btn-sm"
                        onClick={ handleClick }
                    >
                        Focus
                    </button>

                </div>
            </div>
        </div>  
    </>
}

FocusScreen.propTypes = {
    title: PropTypes.string.isRequired
}

FocusScreen.defaultProps = {
    title: 'Focus Screen'
}

export default FocusScreen