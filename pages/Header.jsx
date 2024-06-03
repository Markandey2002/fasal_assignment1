import React from 'react'
import './Header.css'

const Header = () => {
    return (
        <div>
            <header className="header">
                <div className="app-name">MovieApp</div>
                <nav className="nav">
                    <a href="/SignIn" className="nav-link">Login</a>
                    <a href="/SignUp" className="nav-link">Sign Up</a>
                </nav>
            </header>
        </div>
    )
}

export default Header
