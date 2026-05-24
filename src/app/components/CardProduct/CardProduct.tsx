import Image from "next/image";
import { Button } from "../Button";

import styles from './cardproduct.module.scss'

type CardProductProps = {
    id: number,
    img: string,
    isNewProduct: boolean,
    productName: string,
    description: string,
}

const isRevert = (order: number) => {
    return !(order % 2)
}

const CardProduct = ({ id, img, isNewProduct, productName, description }: CardProductProps) => {
    return (
        <article className={`${styles.card} ${isRevert(id) && styles.reverse}`}>
            <Image src={img} alt={productName} width={100} height={100}/>
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