import React from 'react';
import {useHistory} from "react-router-dom";

function LoginPage({isAuth, toggleAuth}) {
    const history= useHistory()
    function handleClick(){
        history.push("/")
        toggleAuth(!isAuth)
    }
    return (
        <>
            <h1>Login pagina</h1>
            <p>Druk op de knop om je in te loggen</p>
            <button
                type="button"
                onClick={handleClick}
            >
                Inloggen
            </button>
        </>
    )
}

export default LoginPage