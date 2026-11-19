const LeetCodeIcon = ({ width = 24, height = 24 }) => {
    return (
        <svg
            width={width}
            height={height}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.6"
            strokeLinecap="round"
            strokeLinejoin="round"
            xmlns="http://www.w3.org/2000/svg"
            role="img"
            aria-label="LeetCode"
        >
            <path d="M12 13h7.5" />
            <path d="m9.424 7.268 4.999-4.999" />
            <path d="m16.633 16.644-2.402 2.415a3.189 3.189 0 0 1-4.524 0l-3.77-3.787a3.223 3.223 0 0 1 0-4.544l3.77-3.787a3.189 3.189 0 0 1 4.524 0l2.302 2.313" />
        </svg>
    );
};

export default LeetCodeIcon;
