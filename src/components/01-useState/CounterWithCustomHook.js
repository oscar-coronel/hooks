import { Fragment } from 'react'
import PropTypes from 'prop-types'

import useCounter from './../../hooks/useCounter'

import './counter.css'

const CounterWithCustomHook = ({ value }) => {

    const [
        { counter1, counter2 }, 
        setCounter,
        { actions: { increment, decrement, reset } }
    ] = useCounter({
        counter1: value,
        counter2: 10,
        counter3: 20,
        counter4: 30,
        counter5: 40,
        counter6: 50,
    })

    return <Fragment>
        <h1>Counter With Custom Hook</h1>
        <hr />
        <h4>{ counter1 }</h4>
        <h4>{ counter2 }</h4>
        <button className="btn btn-danger btn-sm me-3" onClick={ () => decrement(2) }>-1</button>
        <button className="btn btn-secondary btn-sm me-3" onClick={ () => reset(value) }>{ value }</button>
        <button className="btn btn-primary btn-sm" onClick={ () => increment(2)  }>+1</button>
    </Fragment>
}

CounterWithCustomHook.propTypes = {
    value: PropTypes.number.isRequired
}

CounterWithCustomHook.defaultProps = {
    value: 0
}

export default CounterWithCustomHook
