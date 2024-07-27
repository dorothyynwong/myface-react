import React from 'react';
import { useState } from 'react';

export const useMenu = () => {
    const [isMenuVisible, setMenuVisible] = useState(false);

    const toggleMenu = () => {
        setMenuVisible(prev => !prev);
    };

    return [isMenuVisible, toggleMenu];
};


const Menu = () => {
    return (
        <nav>
            <button id="menuButton" className="hamburger" onClick={useMenu}>
                <span className="line"></span>
                <span className="line"></span>
                <span className="line"></span>
            </button>
            <div className="menuPadHidden" id="menuPad">
                <a className="menuLink" href="/users/1">Home</a>
                <a className="menuLink" href="/posts">Posts</a>
                <a className="menuLink" href="/users">Users</a>
            </div>
        </nav>
    );
};

export default Menu;
