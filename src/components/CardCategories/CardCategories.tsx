import Image from "next/image"
import Link from "next/link"
import { ChevronRight } from "lucide-react"


import EarphonesIcon from '../../assets/products-thumb/earphones.png';
import HeadphonesIcon from '../../assets/products-thumb/headphones.png';
import SpeakersIcon from '../../assets/products-thumb/speakers.png';


import styles from './CardCategories.module.scss'


export const CardCategories = () => {
    const cardCategories = [
        {
            img: EarphonesIcon,
            title: 'earphones',
            link: '/category/speakers',
        },
        {
            img: HeadphonesIcon,
            title: 'headphones',
            link: '/category/headphones',
        },
        {
            img: SpeakersIcon,
            title: 'speakers',
            link: '/category/speakers',
        }
    ]
    return (
        <div className={styles.categories_container}>
            {
                cardCategories.map(category =>
                    < div className={styles.card_categories} key={category.title} style={{ anchorName: `--card-${category.title}` }}>
                        <Image
                            className={styles.category_img}
                            style={{ positionAnchor: `--card-${category.title}` }}
                            src={category.img}
                            alt={category.title}
                            height={100}
                            width={100} />
                        <h6>{category.title}</h6>
                        <Link href={category.link}>SHOP <ChevronRight /> </Link>
                    </div >
                )
            }
        </div>

    )
}

export default CardCategories;