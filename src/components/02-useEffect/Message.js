import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'

const Message = ( { title } ) => {

    const [state, setstate] = useState({x:0, y:0})

    useEffect( () => {

        const mouseMove = (event) => {
            const coors = { x: event.x, y: event.y }
            setstate( coors )
        }
        
        window.addEventListener('mousemove', mouseMove)

        return () => {
            console.log('Message demounted')
            window.removeEventListener('mousemove', mouseMove)
        }
    }, [])

    return <>

        <h4>{ title }</h4>
        <h6>Coor x: { state.x }</h6>
        <h6>Coor y: { state.y }</h6>

    </>
}

Message.propTypes = {
    title: PropTypes.string.isRequired
}

Message.defaultProps = {
    title: 'Eres genial!!!'
}

export default Message