import Image from "next/image";
import { Button } from "../Button";

import styles from './cardproduct.module.scss'

type CardProductProps = {
    id: string,
    img: string,
    isNewProduct: boolean,
    productName: string,
    description: string,
    revert?: number
}

const isRevert = (order: number) => {
    return !!(order % 2)
}

const CardProduct = ({ img, isNewProduct, productName, description, revert }: CardProductProps) => {
    return (
        <article className={`${styles.card} ${styles[Number(isRevert(revert || 0))]}`}>
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