import { useCallback, useState } from 'react'
import PropTypes from 'prop-types'
import ShowIncrement from './ShowIncrement'

const CallbackHook = ( { title } ) => {

    const [counter, setCounter] = useState( 10 )

    const memoIncrement = useCallback( ( num ) => {
        setCounter( (oldValue) => oldValue + num )
    }, [ setCounter ] )

    return <>
        <div className="container-fluid">
            <div className="row mt-3">
                <div className="col-8 mx-auto">
                    <h4 className="text-center">
                        { title }
                    </h4>
                    <hr />

                    <div>{ counter }</div> 
                    
                    <ShowIncrement action={ memoIncrement } />

                </div>
            </div>
        </div>
    </>

}

CallbackHook.propTypes = {
    title: PropTypes.string.isRequired
}

CallbackHook.defaultProps = {
    title: 'Callback Hook'
}

export default CallbackHook