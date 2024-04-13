import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Navigation.css';

export const Navigation = () => {

    const [isActive, setActive] = useState(true)
    const handleToggle = () => {
        setActive(!isActive)
    }

    return (
        <nav className='navbar navbar-expand-lg navbar-dark bg-primary'>
            <div className='container-fluid'>
                <div className='logo'>
                    <NavLink to='/'>
                        <img src="/assets/star-wars.svg" alt="star wars logo" height={"75px"} width={"75px"} />
                    </NavLink>
                </div>
                <NavLink to='/' className='navbar-brand site-name'>
                    Home
                </NavLink>

                {/* Toggler / hamburger button */}
                <button
                    onClick={handleToggle}
                    className='navbar-toggler'
                    type='button'
                    data-bs-toggle='collapse'
                    data-bs-target='#navbarColor01'
                    aria-controls='navbarColor01'
                    aria-expanded='false'
                    aria-label='Toggle navigation'
                >
                    <span className='navbar-toggler-icon'></span>
                </button>

                {/* Links  */}
                <div
                    className={`${isActive ? 'collapse' : ''} navbar-collapse`}
                    id='navbarColor01'
                >
                    <ul className='navbar-nav me-auto'>
                        <li className='nav-item'>
                            <NavLink to='/characters/' className='nav-link'>
                                Characters
                            </NavLink>
                        </li>
                        <li className='nav-item'>
                            <NavLink to='/films/' className='nav-link'>
                                Films
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
