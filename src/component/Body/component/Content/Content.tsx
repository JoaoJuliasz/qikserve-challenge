import { useConversion } from '../../../../hooks/useConversion/useConversion';

import icon from '../../../../assets/icon/arrow.svg'

import style from './content.module.css'

type Props = {
    content: Section[]
}

const Content = ({ content }: Props) => {

    const { formatCurrency } = useConversion()

    return (
        <div className={style.container}>
            {
                content.map(section => (
                    <div key={section.id} className={style.content}>
                        <div className={style.nameWrapper}>
                            <h5 className={style.name}>{section.name}</h5>
                            <img className={style.icon} src={icon} />
                        </div>
                        {
                            section.items.map(item => (
                                <div className={style.item} key={item.name}>
                                    <div className={style.info}>
                                        <h6 className={style.title}>{item.name}</h6>
                                        <p className={style.description}>{item?.description}</p>
                                        <span className={style.price}>{formatCurrency(item.price)}</span>
                                    </div>
                                    {item.images?.[0].image ? <div className={style.imgWrapper}>
                                        <img src={item.images?.[0].image} className={style.img} />
                                    </div> : null}
                                </div>
                            ))
                        }
                    </div>
                ))
            }
        </div>
    );
};

export default Content;