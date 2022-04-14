import { useEffect, useReducer } from 'react'
import { AuthContext } from './auth/authContext'
import { authReducer } from './auth/authReducer';
import { AppRouter } from './routers/AppRouter'


const init = () => {
    // si no existe regresa logged en false (el init) x lo q useEffet se ejecuta
    return JSON.parse( localStorage.getItem('user') ) || { logged: false }; // puede no existir 
}

export const HeroesApp = () => {

    const [ user, dispatch] = useReducer( authReducer, {}, init );

    useEffect(() => {
        if(!user) return;  
        
        localStorage.setItem('user', JSON.stringify(user));
    }, [user])
    

    return (
        <AuthContext.Provider value={{
            user,
            dispatch
        }}> 
        <AppRouter />
        </AuthContext.Provider>
    )
}

