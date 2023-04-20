import React from 'react'
import {CartWidget} from "./CartWidget";
import NavBarItem from "./NavBarItem";

const NavBar = (props) => {

    const menuItems = props.menuItems;

    return (
        <React.Fragment>
            <nav className="white" role="navigation">
                <div className="nav-wrapper container">
                    <a id="logo-container" href="#" className="brand-logo">{props.logo}</a>
                    <ul className="right hide-on-med-and-down">
                        {props.menuItems.map((menuItem, key) => (
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

                    <ul id="nav-mobile" className="sidenav">
                        <li><a href="#">Navbar Link</a></li>
                        <li><a href="#">Navbar Link</a></li>
                        <li><a href="#">Navbar Link</a></li>
                        <li><a href="#">Navbar Link</a></li>
                    </ul>
                    <a href="#" data-target="nav-mobile" className="sidenav-trigger">
                        <i className="material-icons">menu</i>
                    </a>
                </div>
            </nav>
        </React.Fragment>
    )
}
export default NavBar
