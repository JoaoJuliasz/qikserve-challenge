import { Dispatch, SetStateAction } from "react";
import Modal from "../../../../Modal/Modal";
import ModalButton from "../../../../ModalButton/ModalButton";
import CartBody from "../CartBody/CartBody";

import style from './cartModal.module.css'

type Props = {
    setOpen: Dispatch<SetStateAction<boolean>>
}

const CartModal = ({ setOpen }: Props) => {
    return (
        <Modal setOpen={setOpen} title="Basket">
            <div className={style.container}>
                <CartBody />
                <div className={style.open}>
                    <ModalButton text="Checkout now" onClick={() => setOpen(true)} />
                </div>
            </div>
        </Modal>
    );
};

export default CartModal;