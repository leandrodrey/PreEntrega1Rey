import React from 'react'

const NavBarItem = (props) => {

    const linkTitle = props.text;
    const linkText = props.text;
    const linkUrl = props.link;

    return (
        <a title={linkTitle} href={linkUrl}>
            {linkText}
        </a>
    )
}
export default NavBarItem
