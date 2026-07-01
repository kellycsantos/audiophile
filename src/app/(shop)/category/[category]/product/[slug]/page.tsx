'use client';
import { useParams } from "next/navigation";
import { useState, useEffect } from "react";

import { getProductBySlug } from "@/api/endpoint";
import { ProductType } from "@types";

import styles from './page.module.scss'
import { AboutUs, CardCategories, ProductImagesGrid, CardSuggestions,CardProduct} from "@components";
import { useCartStore } from "@store";

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
                            click={(qntd: number | undefined) => addItem(product, qntd ?? 1)}
                        />


                        <div className={styles.about_product}>
                            <section className={styles.features}>
                                <h3>Features</h3>
                                <p>{product.features}</p>
                            </section>

                            <section className={styles.includes}>
                                <h3>In the box</h3>
                                <ul>
                                    {product?.includes.map(item => (
                                        <li key={item.item} className='body'>
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
                    <ProductImagesGrid images={product.gallery} alt={product.name} />
                    <CardSuggestions items={product.others} />
                    <CardCategories />
                    <AboutUs />
                </>
            }
        </>
    )
}

export default Product;