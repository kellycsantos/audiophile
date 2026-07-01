
import zx9 from '../../assets/products-thumb/speakers.png'
import yx1 from '../../assets/products-emphasys/yx1_earphones.png'

import Image from 'next/image';
import { Button } from '../Button'
import styles from './bentoitems.module.scss'

export const Bento = () => {
    return (
        <div className={styles.bento}>
            <div className={`${styles.firstItem} ${styles.item}`}>
                <Image src={zx9} alt={'ZX9 SPEAKER'} height={100} width={100} />
                <h1>ZX9 SPEAKER</h1>
                <p>Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.</p>
                <Button text={'See Product'} variant='default' />
            </div>


            <div className={`${styles.secondItem} ${styles.item}`}>
                <h5>ZX7 SPEAKER</h5>
                <Button text={'See Product'} variant='default' />
            </div>
            <div className={`${styles.thirdItem} ${styles.item}`}>
                <Image src={yx1} alt='ZX7 SPEAKER' />
                <div>
                    <h6>YX1 EARPHONES</h6>
                    <Button text={'See Product'} variant='default' />
                </div>
            </div>
        </div>
    )
}

export default Bento;