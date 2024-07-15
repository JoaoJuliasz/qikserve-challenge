import QuantityUpdate from "../../../../QuantityUpdate/QuantityUpdate";

import { useConversion } from "../../../../../hooks/useConversion/useConversion";
import { useHomeContext } from "../../../../../hooks/useHomeContext/useHomeContext";

import style from './cartItem.module.css'

type Props = {
    item: CartItem
    index: number
}

const CartItem = ({ item, index }: Props) => {
    const { formatCurrency } = useConversion()
    const { setCart } = useHomeContext()

    const qtyMethod = (sub?: boolean) => {
        setCart(prev => {
            const updtCart: Cart = JSON.parse(JSON.stringify(prev))
            sub ?
                (updtCart[index].total > 1 ? updtCart[index].total-- :
                    updtCart.splice(index, 1)
                )
                : updtCart[index].total++
            return updtCart
        })
    }

    return (
        <div className={style.container}>
            <div className={style.wrapper}>
                <div className={style.details}>
                    <span className={style.name}>{item.title}</span>
                    {
                        item.options?.map(option => <span key={option} className={style.option}>{option}</span>)
                    }
                </div>
                <QuantityUpdate cart={true} size={item.total} subMethod={() => qtyMethod(true)} addMethod={() => qtyMethod()} />
            </div>
            <span className={style.price}>{formatCurrency(item.price * item.total)}</span>
        </div>
    );
};

export default CartItem;