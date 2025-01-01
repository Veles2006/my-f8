import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell } from '@fortawesome/free-solid-svg-icons';
import styles from './HeaderRightPage.module.scss';
import Courses from '../Courses';
import Messages from '../Messages';
import AccountPopPup from '../AccountPopPup';
import { useRef, useState, useEffect } from 'react';
import classNames from 'classnames/bind';
import avatar from '../../assets/imgs/avatar.jpg';

const cx = classNames.bind(styles);

function HeaderRightPage() {
    // State quản lý trạng thái hiển thị của pop-up
    const [activePopup, setActivePopup] = useState(null); // null, 'courses', 'messages', hoặc 'account'
    const popupRefs = {
        courses: useRef(null),
        messages: useRef(null),
        account: useRef(null),
    };

    const togglePopup = (popupType) => {
        setActivePopup((prev) => (prev === popupType ? null : popupType));
    };

    useEffect(() => {
        const handleClickOutside = (e) => {
            if (
                activePopup &&
                popupRefs[activePopup]?.current &&
                !popupRefs[activePopup].current.contains(e.target)
            ) {
                setActivePopup(null);
                console.log(123);
            }
        };

        if (activePopup) {
            document.addEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [activePopup]);

    return (
        <div className={cx('header-right-page')}>
            {/* Khoá học */}
            <div className={cx('my-course')}>
                <span
                    onClick={() => togglePopup('courses')}
                    className={cx('my-course__text')}
                >
                    Khoá học của tôi
                </span>
                {activePopup === 'courses' && (
                    <div
                        className={cx('course-pop-pup')}
                        ref={popupRefs.courses}
                    >
                        <div className={cx('course-pop-pup__title')}>
                            <h6>Khoá học của tôi</h6>
                            <a href="/">Xem tất cả</a>
                        </div>
                        <div className={cx('course-pop-pup__list-course')}>
                            <Courses />
                        </div>
                    </div>
                )}
            </div>

            {/* Thông báo */}
            <div className={cx('my-notification-wrapper')}>
                <div
                    onClick={() => togglePopup('messages')}
                    className={cx('my-notification')}
                >
                    <FontAwesomeIcon icon={faBell} style={{ opacity: 0.5 }} />
                </div>
                {activePopup === 'messages' && (
                    <div
                        className={cx('notification-pop-pup')}
                        ref={popupRefs.messages}
                    >
                        <div className={cx('notification-pop-pup__title')}>
                            <h6>Thông báo</h6>
                            <button>Đánh dấu đã đọc</button>
                        </div>
                        <div className={cx('notification-pop-pup__list-message')}>
                            <Messages />
                        </div>
                        <a
                            href="/"
                            className={cx('notification-pop-pup__see-all')}
                        >
                            <span>Xem tất cả thông báo</span>
                        </a>
                    </div>
                )}
            </div>

            {/* Tài khoản */}
            <div className={cx('my-account')}>
                <img
                    className={cx('account-img')}
                    src={avatar}
                    alt="Account"
                    onClick={() => togglePopup('account')}
                />
                {activePopup === 'account' && (
                    <span ref={popupRefs.account}>
                        <AccountPopPup />
                    </span>
                )}
            </div>
        </div>
    );
}

export default HeaderRightPage;
