import { useState, useEffect, useRef } from "react"

const useFetch = ( url ) => {

    const isMounted = useRef(true)

    const [ state, setState ] = useState({
        data: null,
        loading: true,
        error: null
    })

    useEffect( () => {

        return () => {
            isMounted.current = false
        }
    }, [])

    const getInfo = async () => {
        setState( oldData => ({...oldData, 'loading': true}) )
        const response = await fetch(url).then( resp => resp.json() )
        const newData = {
            ...state,
            'data': response,
            loading: false
        }

        setTimeout( () => {
            if( isMounted.current )
                setState(newData)
        }, 2000)
        
    }
    
    useEffect( () => {
        getInfo()
        console.log('cambió url')
    }, [url])

    return [
        state,
        setState
    ]

}

export {
    useFetch
}