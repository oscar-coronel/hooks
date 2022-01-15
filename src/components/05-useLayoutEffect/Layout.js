import PropTypes from 'prop-types'
import { useLayoutEffect, useRef, useState } from 'react'
import useCounter from '../../hooks/useCounter'
import { useFetch } from '../../hooks/useFetch'

const Layout = ( { title } ) => {

    const [ values, , actions ] = useCounter( {counter1: 1} )

    const { counter1: counter } = values 
    const { actions: { increment } } = actions

    const [state] = useFetch( `https://breakingbadapi.com/api/quotes/${ counter }` )

    const { data: quotes } =  state
    const { quote } = !!quotes && quotes[0]


    const [boxSize, setBoxSize] = useState({})
    const ref = useRef()

    useLayoutEffect(() => {
        setBoxSize(ref.current.getBoundingClientRect())
    }, [ quote ])


    return  <>
        <div className="row">
            <div className="col-7 mx-auto pt-3">
                <h4 className="text-center">
                    { title }
                </h4>

                <div className="d-flex">
                    { 
                        <div ref={ ref } className="border">{ quote }</div> 
                    }
                    {
                        false && 
                        <div className="alert alert-primary">
                            Loading...
                        </div>
                    }
                </div>
                <pre>
                    { JSON.stringify(boxSize, null, 3) }
                </pre>

                <button className='btn btn-sm btn-secondary' type="button" onClick={ () => increment() }>Get</button>
            </div>
        </div>
    </>

}

Layout.propTypes = {
    title: PropTypes.string.isRequired
}

Layout.defaultProps = {
    title: 'Use Layout Effect'
}

export default Layout