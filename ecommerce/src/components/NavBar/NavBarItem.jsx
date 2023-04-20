import React from 'react'

const NavBarItem = (props) => {
    return (
        <a href={props.link}>
            {props.text}
        </a>
    )
}
export default NavBarItem
