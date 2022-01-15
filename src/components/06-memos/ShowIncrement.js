import React from "react"

const ShowIncrement = React.memo(( { action } ) => {

    console.log('Me volví a generar')

    return <>
        <button className="btn btn-sm btn-secondary mt-2" onClick={ () => {
            action( 4 )
        } }>
            +1
        </button>
    </>
})

export default ShowIncrement