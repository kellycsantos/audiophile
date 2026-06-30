'use client';

import CardProduct from "@/app/components/CardProduct/CardProduct";
import { useParams } from "next/navigation";
import { useState, useEffect } from "react";

import { getProductBySlug } from "@/api/endpoint";
import { ProductType } from "@/app/types";

import styles from './page.module.scss'
import { AboutUs, CardCategories, ProductImagesGrid, CardSuggestions } from "@/app/components";
import { useCartStore } from "@/app/store";

const Product = () => {
    const { slug } = useParams()
    const [product, setProduct] = useState<ProductType | null>(null);
    const {addItem} = useCartStore()

    const getProduct = (slug: string) => {
        const data = getProductBySlug(slug)
        if (data) setProduct(data)
    }

    useEffect(() => {
        if (slug) {
            getProduct(String(slug))
        }
    }, [slug])
    return (
        <>
            {product &&
                <>
                    <div className={styles.about_product_container}>
                        <CardProduct
                            id={product.id}
                            img={product.image.desktop}
                            isNewProduct={product.new}
                            productName={product.name}
                            description={product.description}
                            price={product.price}
                            typeBuy={true}
                            click={(qntd: number) => addItem(product, qntd)}
                        />


                        <div className={styles.about_product}>
                            <section className={styles.features}>
                                <h3>Features</h3>
                                <p>{product.features}</p>
                            </section>

                            <section className={styles.includes}>
                                <h3>In the box</h3>
                                <ul>
                                    {product?.includes.map((item, index) => (
                                        <li key={index} className='body'>
                                            <span className={styles.quantityItem}>
                                                {item.quantity}x
                                            </span>
                                            {item.item}
                                        </li>
                                    ))}
                                </ul>
                            </section>
                        </div>
                    </div>
                    <ProductImagesGrid images={product.gallery} />
                    <CardSuggestions items={product.others} />
                    <CardCategories />
                    <AboutUs />
                </>
            }
        </>
    )
}

export default Product;