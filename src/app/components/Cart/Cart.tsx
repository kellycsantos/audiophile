'use client';
import { Button } from '../Button';
import InputQtd from '../InputQntd/InputQntd';
import styles from './cart.module.scss';

const Cart = ({ isOpen }: any) => {



    return (
        isOpen &&
        <div className={styles.overlay}>
            <div className={styles.cart_container}>
                <header>
                    <h6>cart (1)</h6>
                    <button>Remove all</button>
                </header>

                <div className={styles.product_info}>
                    <span>IMAGE</span>
                    <div>
                        <p>XX99 MK II</p>
                        <p>$ 2,089</p>
                    </div>

                    <InputQtd value={1} onChange={() => console.log(1)} />
                </div>

                <div className={styles.product_info}>
                    <span>IMAGE</span>
                    <div>
                        <p>XX99 MK II</p>
                        <p>$ 2,089</p>
                    </div>

                    <InputQtd value={1} onChange={() => console.log(1)} />
                </div>

                <div className={styles.product_info}>
                    <span>IMAGE</span>
                    <div>
                        <p>XX99 MK II</p>
                        <p>$ 2,089</p>
                    </div>

                    <InputQtd value={1} onChange={() => console.log(1)} />
                </div>

                <div className={styles.summary}>
                    <p>Total</p>
                    <p>$ 5,000</p>
                </div>

                <footer>
                    <Button text='checkout' variant='primary' />
                </footer>
            </div>
        </div>
    )
}

export default Cart;