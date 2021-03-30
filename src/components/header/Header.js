import React from 'react'
import './header.css'
import { Link, NavLink } from 'react-router-dom'

const Header = () => {

    return (
        <div className='header'>
            <nav className='header_container'>
                <NavLink to='/all' activeClassName="active">
                    <div className='nav_link' > Все</div>
                </NavLink>

                <NavLink to='/blocked' activeClassName="active">
                    <div className='nav_link' >Заблокированные </div>
                </NavLink>

                <NavLink to='/active' activeClassName="active">
                    <div className='nav_link' >Активные </div>
                </NavLink>
            </nav>
        </div>
    )
}

export default Header;