import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <nav className='nav'>
            <Link to="/">Home</Link>
            <Link to="/friends">Friends</Link>
            <Link to="/about">About</Link>
            <Link to="/posts">Posts</Link>
            <Link to="/countri">Countri</Link>
            <Link to="/food">Food</Link>
        </nav>
    );
};

export default Header;