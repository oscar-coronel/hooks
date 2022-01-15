import React, { useContext } from 'react'
import { UserContext } from './UserContext'

export const AboutScreen = () => {

    const { setUser } = useContext( UserContext )

    const handleChangeUser = () => {
        const newUser = {
            id: 2,
            name: 'Oscar',
            cellphone: '0948393233'
        }
        setUser( newUser )
    }

    return (
        <div>
            <h1>About Screen</h1>
            <hr />

            <button
                className="btn btn-primary"
                onClick={ handleChangeUser }
            >
                Set User 2
            </button>

        </div>
    )
}
