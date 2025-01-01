import { useState } from 'react';
import classNames from 'classnames/bind'; // Import classnames/bind
import styles from './HeaderLeftPage.module.scss';

// Khởi tạo classNames với SCSS module
const cx = classNames.bind(styles);

function HeaderLeftPage() {
    return (
        <div className={cx('header-left-page')}>
            <h1>
                <a href="/">
                    <img
                        src="https://fullstack.edu.vn/assets/f8-icon-lV2rGpF0.png"
                        className={cx('logo')}
                        alt="Logo"
                    />
                </a>
                <a href="/" className={cx('target')}>
                    <span>Học Lập Trình Để Đi Làm</span>
                </a>
            </h1>
        </div>
    );
}

export default HeaderLeftPage;

