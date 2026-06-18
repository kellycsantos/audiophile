import Image from "next/image";

import aboutImg from '../../assets/about-us-img.png'

import styles from './aboutus.module.scss'

export const AboutUs = () => {
    return (
        <div className={styles.about_us_container}>
            <div className={styles.about_us}>
                <Image src={aboutImg} alt={''} />

                <div className={styles.info}>
                    <h2>Bringing you the <span>best</span> audio gear</h2>
                    <p>Located at the heart of New York City, Audiophile is the premier store for high end headphones, earphones, speakers,
                        and audio accessories. We have a large showroom and luxury demonstration rooms available for you to browse and experience
                        a wide range of our products. Stop by our store to meet some of the fantastic people who make Audiophile the best place
                        to buy your portable audio equipment.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default AboutUs;