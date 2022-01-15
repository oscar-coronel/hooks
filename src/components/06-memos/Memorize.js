import PropTypes from 'prop-types'
import { useState } from 'react'
import useCounter from '../../hooks/useCounter'
import Counter from './Counter'

const Memorize = ( { title } ) => {

    const [values, , actions] = useCounter( {counter1: 0} )

    const { counter1: count } = values
    const { actions: { increment } } = actions


    const [show, setShow] = useState(true)


    return <>
        <div className="container-fluid">
            <div className="row mt-3">
                <div className="col-8 mx-auto">
                    <h4 className="text-center">
                        { title }
                    </h4>
                    <hr />

                    <Counter value={ count } />

                    <div>
                        <button className="btn btn-sm btn-primary" onClick={ () => increment() }>
                            +1
                        </button>
                    </div>

                    { show && <h4>Hola mundo</h4> }

                    <div>
                        <button className="btn btn-sm btn-outline-info" onClick={ () => setShow( !show ) }>
                            Show/Hide
                        </button>
                    </div>

                </div>
            </div>
        </div>
    </>
}

Memorize.propTypes = {
    title: PropTypes.string.isRequired
}

Memorize.defaultProps = {
    title: 'Memo Method'
}

export default Memorize