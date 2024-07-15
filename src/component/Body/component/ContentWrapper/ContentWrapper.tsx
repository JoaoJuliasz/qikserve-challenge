import { useState } from "react";
import ContentItem from "../ContentItem/ContentItem";
import ContentName from "../ContentName/ContentName";

import style from './contentWrapper.module.css'

type Props = {
    section: Section
}

const ContentWrapper = ({ section }: Props) => {
    const [show, setShow] = useState<boolean>(true)

    return (
            <div className={style.content}>
                <ContentName name={section.name} show={show} setShow={setShow} />
                <div className={show ? style.show : style.notShow}>
                    {
                        section.items.map(item => (
                            <ContentItem item={item} key={item.id} />
                        ))
                    }
                </div>
            </div>
    );
};

export default ContentWrapper;