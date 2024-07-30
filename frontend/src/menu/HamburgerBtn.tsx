import React from 'react';
import "./Menu.scss";

interface HamburgerBtnProps {
    onClick: () => void;
}

const HamburgerBtn: React.FC<HamburgerBtnProps> = ({onClick}) => {
    return (
        <>
        <button id="menuButton" className="hamburger" onClick={onClick}>
        <span className="line"></span>
        <span className="line"></span>
        <span className="line"></span>
        </button>
        </>
    )
}

export default HamburgerBtn;