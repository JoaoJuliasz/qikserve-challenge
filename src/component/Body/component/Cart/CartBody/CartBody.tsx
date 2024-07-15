import { useMemo } from 'react';

import CartItem from '../CartItem/CartItem';

import { useConversion } from '../../../../../hooks/useConversion/useConversion';
import { useHomeContext } from '../../../../../hooks/useHomeContext/useHomeContext';

import style from './cartBody.module.css'

const CartBody = () => {
    const { cart } = useHomeContext()
    const { formatCurrency } = useConversion()

    const total = useMemo(() => {
        return cart.reduce((accumulator, currentValue) => (currentValue.price * currentValue.total) + accumulator, 0)
    }, [cart])

    if (cart.length === 0) {
        return (
            <div className={style.empty}>
                <p className={style.text}>Seu carrinho está vazio</p>
            </div>
        )
    }

    return (
        <div className={style.container}>
            <div>
                {cart.map((item, index) => <CartItem item={item} index={index} />)}
            </div>
            <div className={style.totalWrapper}>
                <div className={style.wrapper}>
                    <span className={style.subTotal}>Sub total:</span>
                    <span className={style.subValue}>{formatCurrency(total)}</span>
                </div>
                <div className={style.wrapper}>
                    <h6 className={style.total}>Total:</h6>
                    <h6 className={style.value}>{formatCurrency(total)}</h6>
                </div>
            </div>
        </div>
    );
};

export default CartBody;