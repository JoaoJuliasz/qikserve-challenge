import ContentWrapper from '../ContentWrapper/ContentWrapper';

type Props = {
    content: Section[]
}

const Content = ({ content }: Props) => {
    return (
        <div>
            {
                content.map(section => (
                    <ContentWrapper key={section.id} section={section} />
                ))
            }
        </div>
    );
};

export default Content;