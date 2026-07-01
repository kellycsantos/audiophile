'use client';

import { useState } from "react";
import Image from "next/image";
import { Button } from "../Button";

import styles from './cardproduct.module.scss'
import InputQtd from "../InputQntd/InputQntd";

type CardProductProps = {
    id: number,
    img: string,
    isNewProduct: boolean,
    productName: string,
    description: string,
    price?: number,
    typeBuy?: boolean,
    click?: any //TODO : melhorar tipagem
}

const isRevert = (order: number) => {
    return !(order % 2)
}

const CardProduct = ({ id, img, isNewProduct, productName, description,price, typeBuy, click }: CardProductProps) => {
    const [qntdValue, setQntdValue] = useState<number>(1)
    const showButtonBuy = typeBuy
    return (
        <article className={`${styles.card} ${isRevert(id) && !typeBuy && styles.reverse}`}>
            <Image src={img} alt={productName} width={100} height={100} />
            <section className={styles.cardinfo}>
                {isNewProduct  && <p className='overline'>NEW PRODUCT</p>}
                <h2>{productName}</h2>
                <p className={styles.description}>{description}</p>
               {price && <h5>$ {price}</h5>}
                {
                    showButtonBuy ?
                        <div className={styles.button_container}>
                            <InputQtd value={qntdValue} onChange={setQntdValue} />
                            <Button text="Add to cart" variant="primary" onClick={() => click(qntdValue)}/>
                        </div>
                        :
                        <Button onClick={() => click?.()} text="See Product" variant="primary" />
                }
            </section>
        </article>
    )
}

export  {CardProduct};