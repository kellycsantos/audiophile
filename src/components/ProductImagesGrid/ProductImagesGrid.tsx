import Image from 'next/image';
import styles from './ProductImagesGrid.module.scss';
import { GalleryType } from '@/types';

type ProductImagesGridProps = {
    images: GalleryType, 
    alt: string,
}

const ProductImagesGrid = ({ images, alt }: ProductImagesGridProps) => {
    return (
        <div className={styles.images_grid_container}>
            <section className={styles.images_grid}>
                <Image key={1} src={images?.first?.desktop} alt={alt} width={300} height={300} />
                <Image key={2} src={images?.second?.desktop} alt={alt} width={300} height={300} />
                <Image key={3} src={images?.third?.desktop} alt={alt} width={300} height={300} />

            </section>
        </div>
    )
}

export { ProductImagesGrid };