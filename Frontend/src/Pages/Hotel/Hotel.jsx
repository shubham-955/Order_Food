import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { BASE_URL, GetFetch, PostFetch } from '../../ApiManager/ApiConst'
import { R } from '../../res'
import styles from './Hotel.module.css'

export const Hotel = () => {

    const [hotel, setHotel] = useState({});
    const [dishes, setDishes] = useState([])
    const params = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        if (params.id) {
            getIndData();
        }
    }, [params.id])

    const getIndData = async () => {
        try {
            const response = await GetFetch(`${BASE_URL}hotels/${params.id}`)
            if (response.status === 200) {
                setHotel(response.hotel)
                setDishes(response.hotel.dishes)
            }
        } catch (error) {
            console.log(error)
        }
    }

    const handleCart = async (item) => {
        const data = {
            image: item.image,
            price: item.price,
            deliveryFee: hotel.deliveryFee,
            dish: item.name,
            quantity: 1
        }
        const response = await PostFetch(`${BASE_URL}cart`, data)
        if (response.status === 200) {
            alert("success");
        }
    }

    console.log(hotel)

    return (
        <div className={styles.hotelContainer}>
            <p className={styles.title}>{hotel.name}</p>
            <p className={styles.location}>{hotel.location}</p>
            <div className={styles.divider} />
            <div className={styles.menuList}>
                <div className={styles.hotelImg}>
                    <img src={hotel.image} alt="" />
                    <div className={styles.goToCartBtn} onClick={() => navigate('/cart')}>
                        <p>Go to cart</p>
                    </div>
                </div>
                <div className={styles.menuItems}>
                    {dishes.map(item => {
                        return (
                            <div className={styles.itemCard} key={item.id}>
                                <img src={item.image} alt="" />
                                <div className={styles.itemCardContent}>
                                    <div>
                                        <p className={styles.cardContentTitle}>{item.name}</p>
                                        <p className={styles.cardContentPrice}>{item.price} /-</p>
                                    </div>
                                    {
                                        <div className={styles.cardBtn} onClick={() => handleCart(item)}>
                                            <p>Add</p>
                                        </div>}
                                </div>
                            </div>
                        )
                    })
                    }
                </div>
            </div>
        </div>
    )
}
