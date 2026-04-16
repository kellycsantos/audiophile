
import styles from './Banner.module.scss'

export const Banner = () => {
    return (
        <section className={styles.banner}>
            <div className={styles.banner_description}>
                <p className={`${styles.banner_emphasys} overline`}>NEW PRODUCT</p>
                <h1>XX99 Mark II
                    HeadphoneS</h1>
                <p>Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.</p>
                <button>See Product</button>
            </div>
        </section>
    )
}

export default Banner;