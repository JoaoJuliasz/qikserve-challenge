import { useEffect, useState } from 'react';
import { useHomeContext } from '../../../../../hooks/useHomeContext/useHomeContext';
import ModalButton from '../../../../ModalButton/ModalButton';
import CartModal from '../CartModal/CartModal';

import style from './openCartModal.module.css'

const OpenCartModal = () => {
    const [open, setOpen] = useState<boolean>(false)

    const { cart } = useHomeContext()

    useEffect(() => {
        if (open) {
            document.body.classList.add('no-scroll');
        } else {
            document.body.classList.remove('no-scroll');
        }

        return () => {
            document.body.classList.remove('no-scroll'); // Cleanup on component unmount
        };
    }, [open]);

    if (cart.length === 0) return null

    return (
        <>
            <div className={style.cartButton}>
                <ModalButton text={`Your basket • ${cart.length} item${cart.length > 1 ? 's' : ''}`} onClick={() => setOpen(true)} />
            </div>
            {open ? <CartModal setOpen={setOpen} /> : null}
        </>
    );
};

export default OpenCartModal;