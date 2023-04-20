import React from 'react'
import {CartWidget} from "./CartWidget";
import NavBarItem from "./NavBarItem";

const NavBar = (props) => {

    const logoImage = props.logo;
    const menuItems = props.menuItems;

    return (
        <React.Fragment>
            <nav className="white" role="navigation">
                <div className="nav-wrapper container">
                    <a id="logo-container" href="#" className="brand-logo">{logoImage}</a>
                    <ul className="right hide-on-med-and-down">
                        {menuItems.map((menuItem, key) => (
                            <li>
                                <NavBarItem
                                    text={menuItem.name}
                                    link={menuItem.link}
                                />
                            </li>
                        ))}
                        <li>
                            <CartWidget />
                        </li>
                    </ul>

                    {/* TODO: Apply changes for mobile menu
                    <ul id="nav-mobile" className="sidenav">
                        <li><a href="#">Navbar Link</a></li>
                        <li><a href="#">Navbar Link</a></li>
                        <li><a href="#">Navbar Link</a></li>
                        <li><a href="#">Navbar Link</a></li>
                    </ul>
                    <a href="#" data-target="nav-mobile" className="sidenav-trigger">
                        <i className="material-icons">menu</i>
                    </a>
                    */}
                </div>
            </nav>
        </React.Fragment>
    )
}
export default NavBar
