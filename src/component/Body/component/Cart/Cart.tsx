
import { useMemo } from "react";
import { useConversion } from "../../../../hooks/useConversion/useConversion";
import { useHomeContext } from "../../../../hooks/useHomeContext/useHomeContext";
import CartItem from "./CartItem/CartItem";

const Cart = () => {
    const { cart } = useHomeContext()
    const { formatCurrency } = useConversion()

    const total = useMemo(() => {
        return cart.reduce((accumulator, currentValue) => (currentValue.price * currentValue.total) + accumulator, 0)
    }, [cart])

    return (
        <div>
            <div>
                <h5>Carrinho</h5>
            </div>
            {
                cart.length > 0 ?
                    <div>
                        <div>
                            {cart.map((item, index) => <CartItem item={item} index={index} />)}
                        </div>
                        <div>
                            <h6>Total:</h6>
                            <h6>{formatCurrency(total)}</h6>
                        </div>
                    </div>
                    :
                    <div>
                        <span>Seu carrinho está vazio</span>
                    </div>
            }
        </div>
    );
};

export default Cart;