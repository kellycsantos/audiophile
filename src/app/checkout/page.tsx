import styles from './page.module.scss'

const Checkout = () => {
    return (
        <section className={styles.page}>
            <div className={styles.container}>

                <div className={styles.checkout_container}>
                    <h4>checkout</h4>
                    <h5>Billing details</h5>

                    <form action="">
                        <span>
                            <label htmlFor='name'>
                                Name
                            </label>
                            <input id='name' type='text' placeholder='Alexei Ward' />
                        </span>
                        <span>
                            <label htmlFor='email_address'>
                                Email Address
                            </label>
                            <input id='email_address' type='email' placeholder='alexei@mail.com' />
                        </span>
                        <span>
                            <label htmlFor='phone_number'>
                                Phone Number
                            </label>
                            <input id='phone_number' type='text' placeholder='+1 202-555-0136' />
                        </span>

                        <h5>shipping info</h5>
                        <span>
                            <label htmlFor='your_address'>
                                Your Address
                            </label>
                            <input id='your_address' type='text' placeholder='1137 Williams Avenue' />
                        </span>
                        <span>
                            <label htmlFor='zipcode'>
                                ZIP Code
                            </label>
                            <input id='zipcode' type='text' placeholder='10001' />
                        </span>
                        <span>
                            <label htmlFor='city'>
                                City
                            </label>
                            <input id='city' type='text' placeholder='New York' />
                        </span>
                        <span>
                            <label htmlFor='country'>
                                Country
                            </label>
                            <input id='country' type='text' placeholder='United States' />
                        </span>

                        <h5>payment details</h5>
                        <span>
                            <label htmlFor='payment_method'>
                                Payment Method
                            </label>

                            <span className={styles.radio_container}>
                                <input type='radio' value={'e-money'} name='payment_method' />
                                e-Money
                            </span>

                            <span className={styles.radio_container}>
                                <input type='radio' value={'cash'} name='payment_method' />
                                Cash on Delivery
                            </span>
                        </span>

                        <span>
                            <label htmlFor='e_money_number'>
                                e-Money Number
                            </label>
                            <input id='e_money_number' type='text' placeholder='238521993' />
                        </span>
                        <span>
                            <label htmlFor='e_money_pin'>
                                e-Money PIN
                            </label>
                            <input id='e_money_pin' type='text' placeholder='6891' />
                        </span>
                    </form>
                </div>

                <div className={styles.summary_container}>
                    <h4>summary</h4>

                </div>
            </div>
        </section>
    )
}
export default Checkout;