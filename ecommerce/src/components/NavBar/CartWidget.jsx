import React from 'react'
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import {IconButton} from "@mui/material";

export const CartWidget = () => {
    return (
        <React.Fragment>
            <IconButton color="primary" aria-label="shopping cart">
                <ShoppingCartIcon />
            </IconButton>
        </React.Fragment>
    )
}
