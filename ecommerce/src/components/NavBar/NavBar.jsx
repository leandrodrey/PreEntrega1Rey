import React from 'react'
import {CartButton} from "./CartButton";

const NavBar = (props) => {

    const menuItems = props.menuItems;

    return (
        <React.Fragment>
            <nav className="white" role="navigation">
                <div className="nav-wrapper container">
                    <a id="logo-container" href="#" className="brand-logo">{props.title}</a>
                    <ul className="right hide-on-med-and-down">
                        {menuItems.map((menuItem, key) => (
                            <li><a href="#">{menuItem}</a></li>
                        ))}
                        <li><CartButton /></li>
                    </ul>

                    <ul id="nav-mobile" className="sidenav">
                        <li><a href="#">{props.menu}</a></li>
                        <li><a href="#">Navbar Link</a></li>
                        <li><a href="#">Navbar Link</a></li>
                        <li><a href="#">Navbar Link</a></li>
                    </ul>
                    <a href="#" data-target="nav-mobile" className="sidenav-trigger"><i className="material-icons">menu</i></a>
                </div>
            </nav>
        </React.Fragment>
    )
}
export default NavBar
