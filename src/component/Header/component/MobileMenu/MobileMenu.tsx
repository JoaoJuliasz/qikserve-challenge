import style from '../../header.module.css'
import burger from '../../../../assets/icon/Hamburger.svg'

const MobileMenu = () => {
    return (
        <div className={style.mobile}>
            <h6 className={style.item}>MENU</h6>
            <img className={style.img} src={burger} />
        </div>
    );
};

export default MobileMenu;