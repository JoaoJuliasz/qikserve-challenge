import style from './modalButton.module.css'

type Props = {
    text: string
    disabled?: boolean
}

const ModalButton = ({ text, disabled }: Props) => {
    return <button className={style.button} disabled={disabled}>{text}</button>
};

export default ModalButton;