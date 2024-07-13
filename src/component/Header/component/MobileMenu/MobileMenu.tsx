import style from '../../header.module.css'
import burger from '../../../../assets/icon/Hamburger.svg'

const MobileMenu = () => {
    return (
        <div className={style.mobile}>
            <h4 className={style.item}>MENU</h4>
            <img className={style.img} src={burger} />
        </div>
    );
};

export default MobileMenu;