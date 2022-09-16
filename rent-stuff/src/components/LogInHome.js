import React from "react";
import {useAuthState} from "react-firebase-hooks/auth";
import {auth} from "../Firebase";

const LogInHom= ()=> {

    const [user, loading, error] = useAuthState(auth)

    return(
        <>
        <div>Zalogownao {user?.email}</div>
        </>
    )
}

export default LogInHom;