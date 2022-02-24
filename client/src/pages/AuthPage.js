import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { useHttp } from "../hooks/http.hook";
import { useMassager } from "../hooks/massager.hook";

export const AuthPage = () => {
    const message = useMassager();
    const auth = useContext(AuthContext);
    const { loading, error, request, clearError } = useHttp()
    const [form, setForm] = useState({
        login: '',
        password: ''
    })

    useEffect(() => {
        message(error)
        clearError()
    }, [error, message, clearError]);

    /*    useEffect(() => {
          window.M.updateTextFields()
       }); */

    const chengeHandler = event => {
        setForm({ ...form, [event.target.name]: event.target.value })
    }

    const registerHandler = async () => {
        try {
            const data = await request('/api/auth/register', 'POST', { ...form })
            message(data.message)
        } catch (e) { }
    }

    const loginHandler = async () => {
        try {
            const data = await request('/api/auth/login', 'POST', { ...form })
            auth.login(data.token, data.userId)
        } catch (e) { }
    }

    return (
        <div className="container__wrapper">
            <div className="row">
                <div className="col s12">
                    <div className="row">
                        <div className="input-field col s12">
                            <input
                                type="text"
                                id="login"
                                name="login"
                                className="autocomplete"
                                value={form.login}
                                onChange={chengeHandler} />
                            <label htmlFor="autocomplete-input">Login</label>
                        </div>
                        <div className="input-field col s12">
                            <input
                                type="password"
                                id="password"
                                name="password"
                                className="autocomplete"
                                value={form.password}
                                onChange={chengeHandler} />
                            <label htmlFor="autocomplete-input">Password</label>
                        </div>
                        <div className="col s12">
                            <button className="btn blue-grey darken-4" onClick={loginHandler} disabled={loading}>sign in</button>
                            <button className="btn blue-grey darken-4 blac" onClick={registerHandler} disabled={loading}>register</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}