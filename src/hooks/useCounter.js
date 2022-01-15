import { useState } from 'react'

const useCounter = ( counters ) => {

    const [ values, setValues ] = useState( counters )

    const setCounter1 = ( newValue ) => {
        setValues( { ...values, counter1: newValue } )
    }

    const increment = ( factor = 1 ) => {
        setCounter1( values.counter1 + factor )
    }

    const decrement = ( factor = 1 ) => {
        setCounter1( values.counter1 - factor )
    }

    const reset = ( originValue ) => {
        setCounter1( originValue )
    }

    return [
        values,
        setCounter1,
        {
            actions: {
                increment,
                decrement,
                reset
            }
        }
    ]

}

export default useCounter