import { useState } from 'react';
import style from './categories.module.css'

type Props = {
    sections: { title: string, image: string }[]
    primaryColour: string
}

const Categories = ({ sections, primaryColour }: Props) => {
    const [selected, setSelected] = useState<string>(sections[0].title)

    const compareWithSelected = (title: string) => title === selected

    const handleClick = (name: string) => {
        setSelected(name)
    }

    return (
        <div className={style.container}>
            {
                sections.map(({ title, image }) => (
                    <a href={`/#${title}`} className={`${style.section} ${compareWithSelected(title) ? style.selected : ''}`} key={title}
                        style={{ '--primary-color': primaryColour } as React.CSSProperties} onClick={() => handleClick(title)}>
                        <div className={!compareWithSelected(title) ? style.imgWrapper : style.imgWrapperSelected}>
                            <div className={style.img} style={{
                                backgroundImage: `url(${image})`,
                            }} />
                        </div>
                        <span className={`${style.title} ${compareWithSelected(title) ? style.selected : ''}`}>{title}</span>
                    </a>
                ))
            }
        </div >
    );
};

export default Categories;