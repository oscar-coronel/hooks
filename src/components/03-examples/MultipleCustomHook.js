import PropTypes from 'prop-types'
import useCounter from '../../hooks/useCounter'
import { useFetch } from '../../hooks/useFetch'

const MultipleCustomHook = ( { title } ) => {

    const [ values, , actions ] = useCounter( {counter1: 1} )

    const { counter1: counter } = values 
    const { actions: { increment } } = actions

    const [state] = useFetch( `https://breakingbadapi.com/api/quotes/${ counter }` )

    const { data: quotes, loading } =  state

    return  <>
        <div className="row">
            <div className="col-7 mx-auto pt-3">
                <h4 className="text-center">
                    { title }
                </h4>

                <ul>
                    { 
                        quotes?.map( e => <li key={ e.quote_id }>{ e.author }</li> ) 
                    }
                    {
                        loading && 
                        <div className="alert alert-primary">
                            Loading...
                        </div>
                    }
                </ul>  

                <button className='btn btn-sm btn-secondary' type="button" onClick={ () => increment() }>Get</button>
            </div>
        </div>
    </>

}

MultipleCustomHook.propTypes = {
    title: PropTypes.string.isRequired
}

MultipleCustomHook.defaultProps = {
    title: 'Hooks'
}

export default MultipleCustomHook