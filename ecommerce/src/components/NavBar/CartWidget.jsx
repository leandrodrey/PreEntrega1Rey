import * as React from 'react';
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
        right: -3,
        top: 13,
        border: `2px solid ${theme.palette.background.paper}`,
        padding: '0 4px'
    },
}));

export const CartWidget = () => {
    return (
        <React.Fragment>
            <IconButton color="terciary" aria-label="shopping cart button">
                <StyledBadge badgeContent={4} max={999} color="secondary">
                    <ShoppingCartIcon />
                </StyledBadge>
            </IconButton>
        </React.Fragment>
    )
}
