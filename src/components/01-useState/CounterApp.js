import { Fragment, useState } from 'react'
import PropTypes from 'prop-types'

import './counter.css'

const CounterApp = ({ value }) => {

    const [{ counter1, counter2 }, setCounter] = useState({
        counter1: value,
        counter2: 10
    })

    const handleAdd = () => {
        setCounter( (counters) =>  { 
            return { 
                ...counters, 
                counter1: counter1 + 1 
            }
        })
    }

    return <Fragment>
        <h1>Counter App</h1>
        <hr />
        <h4>{ counter1 }</h4>
        <h4>{ counter2 }</h4>
        <button className="btn btn-primary btn-sm" onClick={ handleAdd }>+1</button>
    </Fragment>
}

CounterApp.propTypes = {
    value: PropTypes.number.isRequired
}

CounterApp.defaultProps = {
    value: 0
}

export default CounterApp
