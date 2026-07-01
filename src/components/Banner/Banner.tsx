
import styles from './Banner.module.scss'
import { Button } from '@components'

export const Banner = () => {
    return (
        <div className={styles.banner_container}>
            <section className={styles.banner}>
                <div className={styles.banner_description}>
                    <p className={`${styles.banner_emphasys} overline`}>NEW PRODUCT</p>
                    <h1>XX99 Mark II
                        HeadphoneS</h1>
                    <p>Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.</p>
                    <Button text='See Products' variant='primary' />
                </div>
            </section>
        </div>
    )
}

export default Banner;