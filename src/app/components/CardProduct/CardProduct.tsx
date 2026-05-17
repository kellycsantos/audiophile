import Image from "next/image";
import { Button } from "../Button";

import styles from './cardproduct.module.scss'

import xx99 from '../../assets/products/xx99.png'

type CardProductProps = {
    id: string,
    img: string,
    isNewProduct: boolean,
    productName: string,
    description: string,
}

const CardProduct = ({ img, isNewProduct, productName, description }: CardProductProps) => {
    return (
        <article className={styles.card}>
            <Image src={img || xx99} alt={productName} />
            <section className={styles.cardinfo}>
                {isNewProduct && <p className='overline'>NEW PRODUCT</p>}
                <h2>{productName}</h2>
                <p>{description}</p>
                <Button text="See Product" variant="primary" />
            </section>
        </article>
    )
}

export default CardProduct;