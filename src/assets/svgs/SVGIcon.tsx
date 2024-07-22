const Plus = () => {
    return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                stroke="#FCFCFD" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round"
                strokeLinejoin="round"/>
            <path d="M12 7.45459V16.5455" stroke="#FCFCFD" strokeWidth="1.5" strokeMiterlimit="10"
                  strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M16.5455 12H7.45459" stroke="#FCFCFD" strokeWidth="1.5" strokeMiterlimit="10"
                  strokeLinecap="round" strokeLinejoin="round"/>
        </svg>

    );
};
const OpenEye = () => {
    return (
        <svg className={'hover:cursor-pointer'}  width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M12 16.5C14.4853 16.5 16.5 14.4853 16.5 12C16.5 9.51472 14.4853 7.5 12 7.5C9.51472 7.5 7.5 9.51472 7.5 12C7.5 14.4853 9.51472 16.5 12 16.5Z"
                stroke="#B9BBC6" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round"
                strokeLinejoin="round"/>
            <path
                d="M12 4.5C19.5 4.5 22.5 12 22.5 12C22.5 12 19.5 19.5 12 19.5C4.5 19.5 1.5 12 1.5 12C1.5 12 4.5 4.5 12 4.5Z"
                stroke="#B9BBC6" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round"
                strokeLinejoin="round"/>
        </svg>


    );
};
const CloseEye = () => {
    return (
        <svg className={'hover:cursor-pointer'} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_804_9279)">
                <path
                    d="M8.81775 15.1823C8.00325 14.3678 7.5 13.2427 7.5 12C7.5 9.5145 9.5145 7.5 12 7.5C13.2427 7.5 14.3678 8.004 15.1823 8.81775"
                    stroke="#B9BBC6" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round"
                    strokeLinejoin="round"/>
                <path
                    d="M16.4929 11.7502C16.4974 11.8327 16.4997 11.916 16.4997 12C16.4997 14.4855 14.4852 16.5 11.9997 16.5C11.9134 16.5 11.8279 16.4977 11.7432 16.4925"
                    stroke="#B9BBC6" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round"
                    strokeLinejoin="round"/>
                <path
                    d="M6.2415 17.7607C2.91825 15.5452 1.5 12 1.5 12C1.5 12 4.5 4.5 12 4.5C14.3438 4.5 16.248 5.23275 17.7585 6.23925"
                    stroke="#B9BBC6" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round"
                    strokeLinejoin="round"/>
                <path
                    d="M20.0295 8.21313C21.7402 10.1001 22.5 11.9999 22.5 11.9999C22.5 11.9999 19.5 19.4999 12 19.4999C10.9597 19.4999 10.0065 19.3559 9.13574 19.1076"
                    stroke="#B9BBC6" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round"
                    strokeLinejoin="round"/>
                <path d="M1.5 22.5L22.5 1.5" stroke="#B9BBC6" strokeWidth="1.5" strokeMiterlimit="10"
                      strokeLinecap="round" strokeLinejoin="round"/>
            </g>
            <defs>
                <clipPath id="clip0_804_9279">
                    <rect width="24" height="24" fill="white"/>
                </clipPath>
            </defs>
        </svg>

    );
};

export {Plus, OpenEye, CloseEye};