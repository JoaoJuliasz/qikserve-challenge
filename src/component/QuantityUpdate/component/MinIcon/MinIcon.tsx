type Props = {
    cart?: boolean
}

const MinIcon = ({ cart }: Props) => {
    return !cart ?
        <svg width="19" height="4" viewBox="0 0 19 4" fill="none" xmlns="http://www.w3.org/2000/svg">
            < rect x="0.5" y="0.455078" width="18" height="3" rx="1.5" fill="#5F5F5F" />
        </svg >
        :
        <svg width="12" height="4" viewBox="0 0 12 4" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect y="0.5" width="12" height="3" rx="1.5" fill="white" />
        </svg>

        ;
};

export default MinIcon;