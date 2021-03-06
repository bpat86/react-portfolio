import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class SocialButtons extends Component {
    render() {
        return (
            <ul className="social animate">
                <li>
                    <Link title="Github" to="https://github.com/bpat86" target="_blank">
                        <svg width="26" height="26" viewBox="0 0 26 26" xmlns="http://www.w3.org/2000/svg">
                            <path className="social-icon" d="M13 0C5.82 0 0 5.82 0 13c0 5.744 3.725 10.616 8.89 12.335.65.12.888-.28.888-.626 0-.31-.01-1.127-.018-2.212-3.616.785-4.38-1.743-4.38-1.743-.59-1.502-1.442-1.902-1.442-1.902-1.18-.806.09-.79.09-.79 1.304.092 1.99 1.34 1.99 1.34 1.16 1.987 3.043 1.413 3.784 1.08.118-.84.454-1.413.825-1.737-2.887-.328-5.922-1.444-5.922-6.426 0-1.418.507-2.58 1.34-3.488-.135-.33-.58-1.65.126-3.44 0 0 1.092-.35 3.576 1.332 1.037-.288 2.15-.432 3.254-.438 1.105.006 2.217.15 3.255.438 2.482-1.682 3.57-1.332 3.57-1.332.71 1.79.265 3.11.13 3.44.834.908 1.337 2.07 1.337 3.488 0 4.995-3.04 6.094-5.935 6.415.466.402.882 1.195.882 2.408 0 1.737-.017 3.14-.017 3.566 0 .347.235.75.894.624C22.28 23.61 26 18.742 26 13c0-7.18-5.82-13-13-13" fill="#000" fillRule="evenodd"></path>
                        </svg>
                    </Link>
                </li>
                <li>
                    <Link title="LinkedIn" to="https://www.linkedin.com/in/hello-bobby" target="_blank">
                        <svg width="25" height="24" viewBox="0 0 25 24" xmlns="http://www.w3.org/2000/svg">
                            <path className="social-icon" d="M1.105 7.696h4.678v16.302H1.105V7.696zm2.22-2.04H3.29C1.6 5.657.5 4.41.5 2.833.5 1.222 1.63 0 3.357 0c1.726 0 2.787 1.22 2.82 2.828 0 1.578-1.094 2.83-2.852 2.83zM24.5 24h-5.304v-8.438c0-2.208-.83-3.714-2.655-3.714-1.394 0-2.17 1.016-2.532 1.998-.135.35-.114.84-.114 1.332V24H8.64s.067-14.946 0-16.304h5.254v2.558c.31-1.118 1.99-2.715 4.67-2.715 3.324 0 5.936 2.346 5.936 7.394V24z" fillRule="evenodd"></path>
                        </svg>
                    </Link>
                </li>
                <li>
                    <Link title="Twitter" to="https://twitter.com/bobbypatterson" target="_blank">
                        <svg width="26" height="22" viewBox="0 0 26 22" xmlns="http://www.w3.org/2000/svg">
                            <path className="social-icon" d="M22.937 3.478c1.102-.686 1.947-1.775 2.344-3.07-1.03.636-2.17 1.097-3.387 1.346C20.923.674 19.535 0 18 0c-2.945 0-5.332 2.487-5.332 5.553 0 .436.044.86.136 1.265-4.432-.232-8.362-2.44-10.994-5.803-.46.823-.722 1.777-.722 2.794 0 1.924.942 3.624 2.373 4.622-.873-.028-1.696-.28-2.416-.694v.068c0 2.692 1.837 4.937 4.28 5.445-.448.132-.918.197-1.407.197-.343 0-.68-.033-1.002-.1.677 2.207 2.648 3.815 4.983 3.858-1.827 1.49-4.127 2.377-6.625 2.377-.43 0-.856-.024-1.273-.077C2.36 21.08 5.164 22 8.177 22c9.813 0 15.175-8.463 15.175-15.802 0-.24-.003-.48-.014-.718 1.043-.783 1.95-1.762 2.662-2.876-.957.442-1.985.74-3.063.874z" fillRule="evenodd"></path>
                        </svg>
                    </Link>
                </li>
                <li>
                    <Link title="Instagram" to="https://www.instagram.com/_king_hat_/" target="_blank">
                        <svg width="25" height="25" viewBox="0 0 25 25" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8.33 12.5a4.17 4.17 0 1 1 4.17 4.17 4.17 4.17 0 0 1-4.17-4.17m-2.25 0a6.42 6.42 0 1 0 6.42-6.42 6.42 6.42 0 0 0-6.42 6.42m11.59-6.67a1.5 1.5 0 1 0 1.5-1.5 1.5 1.5 0 0 0-1.5 1.5M7.45 22.68a6.72 6.72 0 0 1-2.32-.44 3.73 3.73 0 0 1-1.44-.93 3.73 3.73 0 0 1-.93-1.44 6.55 6.55 0 0 1-.43-2.32c-.07-1.32-.08-1.71-.08-5.05s0-3.73.08-5a6.55 6.55 0 0 1 .43-2.32 3.73 3.73 0 0 1 .93-1.44 3.87 3.87 0 0 1 1.44-.94 7 7 0 0 1 2.32-.43c1.32-.06 1.71-.07 5.05-.07s3.73 0 5.05.07a7 7 0 0 1 2.32.43 3.87 3.87 0 0 1 1.44.94 3.87 3.87 0 0 1 .94 1.44 7 7 0 0 1 .43 2.32c.06 1.32.07 1.71.07 5.05s0 3.73-.07 5.05a7 7 0 0 1-.43 2.32 3.87 3.87 0 0 1-.94 1.44 3.73 3.73 0 0 1-1.44.93 6.72 6.72 0 0 1-2.32.44c-1.32.06-1.71.07-5.05.07s-3.73 0-5-.07M7.35.08a9.2 9.2 0 0 0-3 .58A5.9 5.9 0 0 0 2.1 2.1 6 6 0 0 0 .66 4.31a9.2 9.2 0 0 0-.58 3C0 8.68 0 9.11 0 12.5s0 3.82.08 5.15a9.2 9.2 0 0 0 .58 3A6 6 0 0 0 2.1 22.9a6 6 0 0 0 2.21 1.44 9.2 9.2 0 0 0 3 .58c1.37.08 1.8.08 5.19.08s3.82 0 5.15-.08a9.15 9.15 0 0 0 3-.58 6.39 6.39 0 0 0 3.65-3.65 9.17 9.17 0 0 0 .59-3c.06-1.33.07-1.76.07-5.15s0-3.82-.07-5.15a9.44 9.44 0 0 0-.59-3 6 6 0 0 0-1.4-2.29A5.9 5.9 0 0 0 20.69.66a8.89 8.89 0 0 0-3-.58C16.32 0 15.9 0 12.5 0S8.68 0 7.35.08" fillRule="evenodd"></path>
                        </svg>
                    </Link>
                </li>
            </ul>
        );
    }
}
