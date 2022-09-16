import React from "react";
import {useAuthState} from "react-firebase-hooks/auth";
import {auth} from "../Firebase";
import {useNavigate} from "react-router-dom";


const LogInHom= ()=> {
    const navigate = useNavigate();
    const [user, loading, error] = useAuthState(auth)
    const signOutClick = () => {
        auth.signOut();
        navigate('Wylogowano')
    }

    return(
        <>
        <div>Zalogownao {user?.email}</div>
            <button onClick={()=>signOutClick()}>Wyloguj</button>
        </>
    )
}

export default LogInHom;