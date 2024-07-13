import ContentWrapper from '../ContentWrapper/ContentWrapper';
import style from './content.module.css'

type Props = {
    content: Section[]
}

const Content = ({ content }: Props) => {
    return (
        <div className={style.container}>
            {
                content.map(section => (
                    <ContentWrapper key={section.id} section={section}/>
                ))
            }
        </div>
    );
};

export default Content;