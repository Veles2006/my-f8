import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import classNames from 'classnames/bind';

import styles from './HeaderCenterPage.module.scss';

// Khởi tạo classNames với SCSS module
const cx = classNames.bind(styles);

function HeaderCenterPage() {
    const [isFocused, setIsFocused] = useState(false); // Theo dõi trạng thái focus của input

    return (
        <div className={cx('header-center-page')}>
            <div className={cx('search-bar', { focused: isFocused })}>
                <span className={cx('search-icon')}>
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                </span>
                <input
                    onFocus={() => setIsFocused(true)} // Khi focus, set state là true
                    onBlur={() => setIsFocused(false)} // Khi blur, set state là false
                    className={cx('search-input')}
                    placeholder="Tìm kiếm khoá học, bài viết, video, ..."
                />
            </div>
        </div>
    );
}

export default HeaderCenterPage;
