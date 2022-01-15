import PropTypes from 'prop-types'
import { memo } from 'react'

const Counter = memo(( { value } ) => {

    console.log('Me volví a mostrar :(')

    return <>
        <p className="fw-bold text-secondary display-4">{ value }</p>
    </>
})

Counter.propTypes = {
    value: PropTypes.number.isRequired
}

export default Counter