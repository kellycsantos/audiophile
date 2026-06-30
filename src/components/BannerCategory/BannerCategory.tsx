'use client'
import styles from './bannercategory.module.scss'
import { useParams} from 'next/navigation'

const BannerCategory = () => {
    const {category} = useParams()
    return(
        <div className={styles.banner}>
           <h2>{category || 'audiophile'}</h2> 
        </div>
    )
}

export {BannerCategory};