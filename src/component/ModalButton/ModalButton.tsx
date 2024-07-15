import { CSSProperties } from 'react';
import { useHomeContext } from '../../hooks/useHomeContext/useHomeContext';
import style from './modalButton.module.css'

type Props = {
    text: string
    disabled?: boolean
    onClick: () => void
}

const ModalButton = ({ text, disabled, onClick }: Props) => {
    const { venue } = useHomeContext()

    return <button className={`${style.button} ${disabled ? style.disabled : ''}`} style={{ '--primaryColour': venue.webSettings.primaryColour } as CSSProperties}
        disabled={disabled} onClick={onClick}>{text}</button>
};

export default ModalButton;