'use client'
import { AboutUs, CardCategories } from "@/app/components";
import CardProduct from "@/app/components/CardProduct/CardProduct";
import { useState, useEffect } from "react";
import { getProductsByCategories } from "@/api/endpoint";
import { useParams, useRouter } from "next/navigation";
import BannerCategory from "@/app/components/BannerCategory/BannerCategory";

import styles from './page.module.scss'

const Category = () => {
    const router = useRouter()
    const { category } = useParams()
    const [products, setProducts] = useState<any>([])

    const handleValidCategory = (category: string | undefined) => {
        if (!category) {
            return
        }
        if (category === 'earphones' || category === 'headphones' || category === 'speakers')
            setProducts(getProductsByCategories(category))
    }

    const goToProductPage = (slug: string) => {
        router.push(`/category/${category}/product/${slug}`)
    }

    useEffect(() => {
        handleValidCategory(category?.toString())
    }, [category])

    console.log(products)
    return (
        <section className={styles.category_page}>
            <BannerCategory />
            <>
                {products.map((product: any, index: number) => (
                    <CardProduct
                        key={index}
                        productName={product.name}
                        isNewProduct={product.new}
                        img={product.image.desktop}
                        description={product.description}
                        id={product.id}
                        click={() => goToProductPage(product.slug)} />
                ))}
                <CardCategories />
                <AboutUs />
            </>
        </section>
    )
}

export default Category;