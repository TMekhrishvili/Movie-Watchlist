import React from 'react';
import './header.css';
import { Link } from "react-router-dom";

export const Header = () => {
    return (
        <div className="header">
            <div className="nav">
                <Link className='nav-link' to='/'><li className="nav-item">Movie List</li></Link>
                <Link className='nav-link' to='/addmovie'><li className="nav-item">Add Movie</li></Link>
                <Link className='nav-link' to='/watched'><li className="nav-item">Watched</li></Link>
            </div>
        </div>
    )
}
