import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { BASE_URL, GetFetch } from '../../ApiManager/ApiConst'
import { cartItem } from '../../store/cartItem/cartItem.actions'
import styles from './Cart.module.css'

export const Cart = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    useEffect(() => {
        getCartData()
    }, [])

    const [cart, setCart] = useState([]);

    const getCartData = async () => {
        try {
            const response = await GetFetch(`${BASE_URL}cart`)
            if (response.status === 200) {
                setCart(response.cart);
                dispatch(cartItem(response.cart.length))
            }
        } catch (error) {
            console.log(error)
        }
    }

    let total = 0;
    cart.map((item) => {
        total += item.price
    })

    return (
        <div className={styles.hotelContainer}>
            <div>
                <p className={styles.title}>Cart</p>
            </div>
            <div className={styles.divider} />
            <div className={styles.menuList}>
                {cart.length === 0 ?
                    <div>
                        <p>No items in Cart</p>
                        <div className={styles.orderBtn} onClick={() => navigate("/")}>
                            <p>Go to home</p>
                        </div>
                    </div>
                    :
                    <>
                        <div className={styles.hotelImg}>
                            <p>Grand Total:</p>
                            <p>{total}</p>
                            <div className={styles.orderBtn} onClick={() => navigate("/thanks")}>
                                <p>Place order</p>
                            </div>
                        </div>
                        <div className={styles.menuItems}>
                            {cart.map(item => {
                                return (
                                    <div className={styles.itemCard} key={item.id}>
                                        <img src={item.image} alt="" />
                                        <div className={styles.itemCardContent}>
                                            <div>
                                                <p className={styles.cardContentTitle}>{item.dish}</p>
                                                <p className={styles.cardContentPrice}>{item.price} /-</p>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                            }
                        </div>
                    </>
                }
            </div>
        </div>
    )
}
