import Image from 'next/image';
import styles from './ProductImagesGrid.module.scss';

type ProductImagesGridProps = {
    images: {
        src: string;
        alt: string;
    }[];        
}

const ProductImagesGrid = ({ images }: any) => {
    return (
        <div className={styles.images_grid_container}>
        <section className={styles.images_grid}>
              <Image key={1} src={images?.first?.desktop} alt={`oola`} width={300} height={300} />
              <Image key={2} src={images?.second?.desktop} alt={`oola`} width={300} height={300} />
              <Image key={3} src={images?.third?.desktop} alt={`oola`} width={300} height={300} />

        </section>
        </div>
    )
}

export { ProductImagesGrid };