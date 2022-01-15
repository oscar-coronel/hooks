import PropTypes from 'prop-types'
import { useMemo, useState } from 'react'
import useCounter from '../../hooks/useCounter'

const MemoHook = ( { title } ) => {

    const [values, , actions] = useCounter( {counter1: 5000} )

    const { counter1: count } = values
    const { actions: { increment } } = actions


    const [show, setShow] = useState(true)


    const procesoPesado = ( iteraciones ) => {
        for ( let i = 0 ; i < iteraciones ; i++ ) {
            console.log('Ahí vamos...')
        }
        return `${ iteraciones } iteraciones realizadas.`
    }

    const memoProcesoPesado = useMemo(() => procesoPesado(count), [count])


    return <>
        <div className="container-fluid">
            <div className="row mt-3">
                <div className="col-8 mx-auto">
                    <h4 className="text-center">
                        { title }
                    </h4>
                    <hr />

                    <p>{ memoProcesoPesado }</p>

                    <p>{ count }</p>

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

MemoHook.propTypes = {
    title: PropTypes.string.isRequired
}

MemoHook.defaultProps = {
    title: 'Memo Hook'
}

export default MemoHook