import React from 'react';
import styles from './IndHotelCard.module.css';
import { LocationOn } from '@material-ui/icons';
import { useNavigate } from 'react-router-dom';

export const IndHotelCard = ({ item }) => {
    const navigate = useNavigate();
    return (
        <div className={styles.indHotelCart} onClick={() => navigate(`${item._id}`)}>
            <img src={item.image} alt="" />
            <div className={styles.indHotelContent}>
                <div className={styles.title}>
                    <p className={styles.title}>{item.name}</p>
                </div>
                <div className={styles.rating}>
                    <p className={styles.span}>{item.rating}</p>
                </div>
                <div className={styles.location}>
                    <LocationOn style={{ color: 'black', fontSize: 14, marginTop: 3 }} />
                    <p className={styles.city}>{item.location}</p>
                </div>
            </div>
        </div>
    )
}
