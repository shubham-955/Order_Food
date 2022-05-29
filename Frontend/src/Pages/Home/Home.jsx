import React, { useState, useEffect } from 'react'
import { IndHotelCard } from '../../Components/IndHotelCard/IndHotelCard'
import styles from './Home.module.css'
import { R } from '../../res'
import { BASE_URL, GetFetch } from '../../ApiManager/ApiConst';
import { Navbar } from '../../Components/Navbar/Navbar';
import { useDispatch, useSelector } from 'react-redux';
import { cartItem } from '../../store/cartItem/cartItem.actions';

export const Home = () => {

    const [hotels, setHotels] = useState([])
    const dispatch = useDispatch();
    const cartLength = useSelector((state) => state.cartItem.cartItems);

    useEffect(() => {
        getHotels()
        getCartItem()
    }, [])

    const getCartItem = async () => {
        try {
            const response = await GetFetch(`${BASE_URL}cart`)
            if (response.status === 200) {
                dispatch(cartItem(response.cart.length))
            }
        } catch (error) {
            console.log(error)
        }
    }

    const getHotels = async () => {
        const response = await GetFetch(`${BASE_URL}hotels`)
        if (response.status === 200) {
            setHotels(response.hotels)
        }
    }

    return (
        <div>
            <Navbar cartLength={cartLength} />
            <div className={styles.homeContainer}
                style={{ 'backgroundImage': `url(${R.images.cover})` }}
            >
                <p className={styles.homeTitle}>Order Food</p>
                <p className={styles.homeSubTitle}>Discover the best food & drinks</p>
            </div>
            <div className={styles.homeSubContainer}>
                {hotels.map(item => {
                    return (
                        <IndHotelCard key={item.id} item={item} />
                    )
                })
                }
            </div>
        </div>
    )
}
