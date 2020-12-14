import React from 'react';
import './header.css';
import { Link } from "react-router-dom";

export const Header = () => {
    return (
        <div className="header">
            <div className="header-item1">
                <Link to='/' className='logo'>
                    <li className="nav-item">Logo</li>
                </Link>
            </div>
            <div className="header-item2">
                <div className="nav">
                    <Link to='/' className='nav-link'>
                        <li className="nav-item">Movie List</li>
                    </Link>

                    <Link to='/addmovie' className='nav-link'>
                        <li className="nav-item">Add Movie</li>
                    </Link>

                    <Link to='/watched' className='nav-link'>
                        <li className="nav-item">Watched</li>
                    </Link>
                </div>
            </div>
        </div>
    )
}
