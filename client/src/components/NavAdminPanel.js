import React, { useContext } from "react"
import { AuthContext } from "../context/AuthContext"
import { useNavigate } from "react-router-dom"

export const NavAdminPanel = () => {
    const auth = useContext(AuthContext)

    let navigate = useNavigate();
    const loginHandler = event => {
        event.preventDefault()
        auth.logout()
        navigate("/")
    }
    return (
        <nav className="blue-grey darken-4">
            <div className="nav-wrapper">
                <div className='container'>
                    <a href="/admin" className="brand-logo">Admin panel 104</a>
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        <li><a href='/admin-concerts-page'>Концерты</a></li>
                        <li><a href='/admin-tracks-page'>Треки</a></li>
                        <li><a href='/admin-video-page'>Видео</a></li>
                        <li><a href="/" onClick={loginHandler}>Выход</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}