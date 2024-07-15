import { useEffect, useState } from "react";
import { useConversion } from "../../../../../hooks/useConversion/useConversion";
import ContentModal from "../ContentModal/ContentModal";
import style from './contentItem.module.css'

type Props = {
    item: MenuItem
}
const ContentItem = ({ item }: Props) => {
    const [open, setOpen] = useState<boolean>(false)

    const { formatCurrency } = useConversion()

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

    return (
        <>
            <div className={style.item} onClick={() => setOpen(true)}>
                <div className={style.info}>
                    <h6 className={style.title}>{item.name}</h6>
                    <p className={style.description}>{item?.description}</p>
                    <span className={style.price}>{formatCurrency(item.price)}</span>
                </div>
                {item.images?.[0]?.image ? <div className={style.imgWrapper}>
                    <img src={item.images?.[0].image} className={style.img} />
                </div> : null}
            </div>
            {
                open ?
                    <ContentModal item={item} setOpen={setOpen} />
                    : null
            }
        </>
    );
};

export default ContentItem;