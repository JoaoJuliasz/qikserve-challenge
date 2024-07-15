import style from './cartHeader.module.css'

const CartHeader = () => {
    return (
        <div className={style.container}>
            <h5 className={style.title}>Carrinho</h5>
        </div>
    );
};

export default CartHeader;