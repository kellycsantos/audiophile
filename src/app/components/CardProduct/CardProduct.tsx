import Image from "next/image";
import { Button } from "../Button";

import styles from './cardproduct.module.scss'

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
            <Image src={img} alt={productName} />
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