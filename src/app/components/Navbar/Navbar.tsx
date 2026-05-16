'use client';
import audiophile from "../../assets/audiophile.png"
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X, ShoppingCart } from "lucide-react";

import styles from './navbar.module.scss';

export const Navbar = () => {
    const [openMenu, setOpenMenu] = useState<boolean>(false)
    const toogleMenu = () => {
        setOpenMenu(prev => !prev)
    }

    useEffect(() => {
        setOpenMenu(false)
    }, [])
    const linksMenu = [
        {
            title: 'home',
            link: '/'
        },
        {
            title: 'headphones',
            link: '/headphones'
        },
        {
            title: 'speakers',
            link: '/speakers'
        },
        {
            title: 'earphones',
            link: '/earphones'
        },
    ]
    return (
        <>
            <div className={styles.navbar}>
                <section>
                    <button className={styles.btn_menu} onClick={() => toogleMenu()}> {!openMenu ? <Menu /> : <X />} </button>
                    <Image src={audiophile} alt='Audiophile' sizes="auto" />
                </section>

                <nav className={`${styles.nav_section} ${!openMenu ? styles.menu_close : ''} `}>
                    <ul className={styles.link_section}>

                        {
                            linksMenu.map(link =>
                                <li key={link.title}>
                                    <Link href={link.link} className={styles.links}>{link.title}</Link>
                                    <div className={styles.cards}>...</div>
                                </li>
                            )
                        }
                    </ul>

                </nav>

                <Link className={styles.btn_cart} color="#FFFFFF" href="/cart">
                    <ShoppingCart />
                </Link>
            </div>
        </>
    )
}

export default Navbar;