import DesktopMenu from './component/DesktopMenu/DesktopMenu'
import MobileMenu from './component/MobileMenu/MobileMenu'

import style from './header.module.css'

type Props = {
    bgColor: string
    bannerImg: string
}

const Header = ({ bgColor, bannerImg }: Props) => {
    return (
        <div className={style.container}>
            <div className={style.itemsWrapper} style={{ background: bgColor }} data-testid="header-menu">
                <DesktopMenu />
                <MobileMenu />
            </div>
            <div className={style.banner} style={{ backgroundImage: ` url(${bannerImg})` }} />
        </div>
    )
}

export default Header