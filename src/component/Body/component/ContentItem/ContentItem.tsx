import { useConversion } from "../../../../hooks/useConversion/useConversion";
import style from './contentItem.module.css'

type Props = {
    item: MenuItem
}
const ContentItem = ({ item }: Props) => {

    const { formatCurrency } = useConversion()

    return (
        <div className={style.item}>
            <div className={style.info}>
                <h6 className={style.title}>{item.name}</h6>
                <p className={style.description}>{item?.description}</p>
                <span className={style.price}>{formatCurrency(item.price)}</span>
            </div>
            {item.images?.[0].image ? <div className={style.imgWrapper}>
                <img src={item.images?.[0].image} className={style.img} />
            </div> : null}
        </div>
    );
};

export default ContentItem;