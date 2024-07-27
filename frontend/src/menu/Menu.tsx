import {useState} from 'react';
import "./Menu.scss";

const Menu = () => {
    const [isMenuVisible, setMenuVisible] = useState(false);

    return (
        <nav>
            <button id="menuButton" className="hamburger" onClick={() => setMenuVisible(prevState => !prevState)}>
                <span className="line"></span>
                <span className="line"></span>
                <span className="line"></span>
            </button>
            <div className={isMenuVisible? "menuPadShow" : "menuPadHidden"} id="menuPad">
                <a className="menuLink" href="/users/1">Home</a>
                <a className="menuLink" href="/posts">Posts</a>
                <a className="menuLink" href="/users">Users</a>
            </div>
        </nav>
    );
};

export default Menu;
