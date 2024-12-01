import { useState } from "react"
import fbsLogo from "../../assets/Group-17-FBS-1.svg"
import BurgerMenu from "../BurgerMenu/BurgerMenu"
import "../../index.css"

function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    const handleMenuToggle = () => {
        setMenuOpen((prevOpen) => !prevOpen);
    };
    
    return (
        <header className={menuOpen ? "menu-open" : ""}>
            <div className="headerLogoContainer">
                <img src={fbsLogo} alt="" />
                <h1>Florida Build & Service</h1>
            </div>
            <div>
                <BurgerMenu isOpen={menuOpen} onToggleMenu={handleMenuToggle} />
            </div>
        </header>
    )
}

export default Header