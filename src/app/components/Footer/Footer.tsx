import Image from 'next/image';
import Link from 'next/link';

import logo from '../../assets/audiophile.png'
import styles from './Footer.module.scss'

export const Footer = () => {
    return(
        <footer className={styles.footer}>
            <Image className={styles.logo} src={logo} alt=''/>

            <ul className={styles.nav_section}>
                <li> 
                    <Link href='/home'>Home</Link>
                </li>
                <li> 
                    <Link href='/category/headphones'>headphones</Link>
                </li>
                <li> 
                    <Link href='/category/speakers'>speakers</Link>
                </li>
                <li> 
                    <Link href='/category/earphones'>earphones</Link>
                </li>
            </ul>

            <p className={styles.subtitle}>Audiophile is an all in one stop to fulfill your audio needs. We're a small team of music lovers and 
                sound specialists who are devoted to helping you get the most out of personal audio. Come and visit 
                our demo facility - we're open 7 days a week.
            </p>

            <p className={styles.copyright}>Copyright 2021. All Rights Reserved</p>

        </footer>
    )
}

export default Footer;