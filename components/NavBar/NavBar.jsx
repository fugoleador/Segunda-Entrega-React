import CartWidget from "../CartWidget/CartWidget"
import './NavBar.css'
import { NavLink, Link } from "react-router-dom"

const NavBar = () => {
    const imgMancuerna = "https://www.pngegg.com/es/png-sdnyj";
    return (
        <header>
            <Link to={"/"}>
                <img className="imgMancuerna" src={imgMancuerna} alt="" />
            </Link>

            <nav>
                <ul>
                    <li>
                        <NavLink to={"/categoria/2"}> Suplementos </NavLink>
                    </li>

                    <li>
                        <NavLink to={"/categoria/3"}> Accesorios </NavLink>
                    </li>
                </ul>
            </nav>

            <CartWidget />

        </header>
    )
}

export default NavBar