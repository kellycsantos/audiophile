'use client';
import { useCartStore } from '@store';
import { Button } from '../Button';
import InputQtd from '../InputQntd/InputQntd';
import styles from './cart.module.scss';
import Image from 'next/image';



const Cart = ({ isOpen }: { isOpen: boolean }) => {

    const cartStore = useCartStore()

    const { items, totalAmount, removeAllItems } = cartStore
    const totalItems = items.length


    return (
        isOpen &&
        <>
            <div className={styles.overlay} aria-modal>
            </div>
            <div className={styles.cart_container} aria-modal>
                <header>
                    <h6>cart ({totalItems})</h6>
                    <button onClick={() => removeAllItems()}>Remove all</button>
                </header>
                {!!items.length ?
                    <>
                        {items.map(item => (

                            <div className={styles.product_info} key={item.id}>
                                <Image src={item.image.mobile} width={70} height={70} alt={item.description} />
                                <div>
                                    <p>{item.name}</p>
                                    <p>$ {item.price}</p>
                                </div>

                                <InputQtd value={item.quantity ?? 1} />
                            </div>
                        ))}

                        <div className={styles.summary}>
                            <p>Total</p>
                            <p>$ {totalAmount}</p>
                        </div>

                        <footer>
                            <Button text='checkout' variant='primary' />
                        </footer>
                    </> : 
                    <p className={styles.empty_cart}>
                        Empty cart
                    </p>
                }
            </div>
        </>
    )
}

export default Cart;