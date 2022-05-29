import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { BASE_URL, DeleteFetch } from '../../ApiManager/ApiConst'
import styles from './Thanks.module.css'

export const Thanks = () => {

    const navigate = useNavigate();
    useEffect(() => {
        emptyCart()
    }, [])

    const emptyCart = async () => {
        try {
            const response = await DeleteFetch(`${BASE_URL}cart`)
            console.log(response)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className={styles.thanksContainer}>
            <div>
                <p className={styles.title}>Thanks for placing the order</p>
            </div>
            <div className={styles.more} onClick={() => navigate("/")}>
                <p>Order More</p>
            </div>
            <div className={styles.divider} />
        </div>
    )
}
