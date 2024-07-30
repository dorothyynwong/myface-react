
import "./Menu.scss";

interface MenuProps {
    isVisible: boolean;
}

const Menu:React.FC<MenuProps> = ({isVisible}) => {
    return (
        <nav>
            <div className={isVisible? "menuPadShow" : "menuPadHidden"} id="menuPad">
                <a className="menuLink" href="/users/1">Home</a>
                <a className="menuLink" href="/posts">Posts</a>
                <a className="menuLink" href="/users">Users</a>
            </div>
        </nav>
    );
};

export default Menu;
