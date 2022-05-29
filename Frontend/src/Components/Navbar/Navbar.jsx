import React from 'react'
import styles from './Navbar.module.css'
import { LocalMall } from '@material-ui/icons';
import { useNavigate } from 'react-router-dom';
import { Badge } from '@material-ui/core';

export const Navbar = ({ cartLength }) => {

    const navigate = useNavigate();

    return (
        <nav className={styles.navbar}>
            <Badge badgeContent={cartLength} color="secondary">
                <LocalMall className={styles.bag} onClick={() => navigate("/cart")} />
            </Badge>
        </nav>
    )
}
