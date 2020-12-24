import React from 'react';
import './Login.css';
import { Button } from '@material-ui/core';
import {auth, provider} from "./firebase";
import { actionTypes } from './reducer';
import { useStateValue } from "./StateProvider";

function Login() {
    const [state, dispatch] = useStateValue();
    const signIn = () => {
        // signIn
        // sign in with the provider,
        // once we get that, then get the result
        auth.signInWithPopup(provider).then((result) => {
            dispatch({
                type:actionTypes.SET_USER,
                user:result.user,
            });
        })
        .catch((error) => alert(error.message));
    };
    return (
        <div className="login">
            {/* login logo */}
            <div className = "login_logo"></div>
            <img src = "logo.png"></img>
            <img src = " "></img>
            {/* Button */}
            <Button type="submit" onClick={signIn}>
                <p>Sign In</p>
            </Button>
        </div>
    );
}

export default Login;
