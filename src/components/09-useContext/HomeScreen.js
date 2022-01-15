import { useContext } from 'react'
import { UserContext } from './UserContext'

export const HomeScreen = () => {

    const { user: userContext } = useContext( UserContext )

    return (
        <div>
            <h1>Home Screen</h1>
            <pre>
                { JSON.stringify( userContext, null, 3 ) }
            </pre>
        </div>
    )
}
