import React, { useContext } from 'react'
import { UserContext } from './UserContext'

export const LoginScreen = () => {

    const { setUser } = useContext(UserContext)

    const handleChangeUser = () => {
        const newUser = {
            id: 1,
            name: 'Daniel',
            email: 'daniel@gmail.com'
        }
        setUser( newUser )
    }

    return (
        <div>
            <h1>Login Screen</h1>
            <hr />

            <button 
                className='btn btn-primary'
                onClick={ handleChangeUser }
            >
                Set User
            </button>

        </div>
    )
}
