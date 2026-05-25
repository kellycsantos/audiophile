'use client'
import { AboutUs, CardCategories } from "@/app/components";
import CardProduct from "@/app/components/CardProduct/CardProduct";
import { useState, useEffect } from "react";
import { getProductsByCategories } from "@/api/endpoint";
import { useParams } from "next/navigation";
import BannerCategory from "@/app/components/BannerCategory/BannerCategory";

import styles from './page.module.scss'

type ValidCategories =
    'EARPHONES' | 'HEADPHONES' | 'SPEAKERS'

const Category = () => {
    const { category } = useParams()
    const [products, setProducts] = useState<any>([])

    const handleValidCategory = (category: string | undefined) => {
        if (!category) {
            return
        }
        if (category === 'earphones' || category === 'headphones' || category === 'speakers')
            setProducts(getProductsByCategories(category))
    }

    useEffect(() => {
        handleValidCategory(category?.toString())
    }, [category])

    console.log(products)
    return (
        <section className={styles.category_page}>
        <BannerCategory/>
        <>
        {products.map((product: any, index:number) => (
            <CardProduct key={index} productName={product.name} isNewProduct={product.new} img={product.image.desktop}  description={product.description} id={product.id}  />
        ))}
            <CardCategories />
            <AboutUs />
        </>
        </section>
    )
}

export default Category;