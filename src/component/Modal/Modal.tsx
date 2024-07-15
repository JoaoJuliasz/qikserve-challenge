import { Dispatch, MouseEvent, SetStateAction } from 'react';

import icon from '../../assets/icon/close.svg'

import style from './modal.module.css'

type Props = {
    headerImg?: string
    title?: string
    setOpen: Dispatch<SetStateAction<boolean>>
    children: JSX.Element | JSX.Element[]
}

const Modal = ({ title, headerImg, setOpen, children }: Props) => {

    const handleClick = () => setOpen(false)

    const handleOverlayClick = (event: MouseEvent<HTMLDivElement>) => {
        if (event.target === event.currentTarget) {
            handleClick();
        }
    }

    return (
        <div className={style.overlay} onClick={handleOverlayClick}>
            <div className={style.content}>
                <div className={style.header}>
                    {headerImg ? <div className={style.bgImg} style={{ backgroundImage: `url(${headerImg})` }} /> : null}
                    {title ? <h6 className={style.title}>{title}</h6> : null}
                    <div onClick={handleClick} className={style.close}>
                        <img src={icon} alt="Modal close icon" />
                    </div>
                </div>
                {children}
            </div>
        </div>
    );
};

export default Modal;
