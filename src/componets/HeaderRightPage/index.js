import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell } from '@fortawesome/free-solid-svg-icons';
import styles from './HeaderRightPage.module.css';
import Courses from '../Courses';
import Messages from '../Messages';

function HeaderRightPage() {
    return (
        <div className={styles['header-right-page']}>
            <div className={styles['my-course']}>
                <span className={styles['my-course__text']}>Khoá học của tôi</span>

                <div className={styles['course-pop-pup']}>
                    <div className={styles['course-pop-pup__title']}>
                        <h6>Khoá học của tôi</h6>
                        <a href="/">Xem tất cả</a>
                    </div>
                    <div className={styles['course-pop-pup__list-course']}>
                        <Courses />
                    </div>
                </div>
            </div>

            <div className={styles['my-notification-wrapper']}>
                <div className={styles['my-notification']}>
                    <FontAwesomeIcon icon={faBell} style={{ opacity: 0.5 }} />
                </div>
                <div className={styles['notification-pop-pup']}>
                    <div className={styles['notification-pop-pup__title']}>
                        <h6>Thông báo</h6>
                        <button>Đánh dấu đã đọc</button>
                    </div>
                    <div className={styles['notification-pop-pup__list-message']}>
                        <Messages />
                    </div>
                    <a href='/' className={styles['notification-pop-pup__see-all']}>
                        <span>Xem tất cả thông báo</span>
                    </a>
                </div>
            </div>

            <div className={styles['my-account']}>
                <a href="/">
                    <img
                        className={styles['account-img']}
                        src="https://i.pinimg.com/736x/42/49/72/42497225b267a7a128a8ffc720f9d198.jpg"
                        alt="Account"
                    />
                </a>
            </div>
        </div>
    );
}

export default HeaderRightPage;
