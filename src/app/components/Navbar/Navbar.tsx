'use client';
import audiophile from "../../assets/audiophile.png"
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X, ShoppingCart } from "lucide-react";

import styles from './navbar.module.scss';
import { CardCategories } from "../CardCategories";

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
            link: '/category/headphones'
        },
        {
            title: 'speakers',
            link: '/category/speakers'
        },
        {
            title: 'earphones',
            link: '/category/earphones'
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
                                </li>
                            )
                        }
                         <div className={styles.cards}>
                                     
                                        <CardCategories/>
                                    </div>
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