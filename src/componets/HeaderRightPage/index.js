import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell } from '@fortawesome/free-solid-svg-icons';
import './HeaderRightPage.css'
import Courses from '../Courses';
import Messages from '../Messages';

function HeaderRightPage() {
    return (
        <div className="header-right-page">
            <div className="my-course">
                <span className="my-course__text">Khoá học của tôi</span>

                <div className="course-pop-pup">
                    <div className="course-pop-pup__title">
                        <h6>Khoá học của tôi</h6>
                        <a href="/">Xem tất cả</a>
                    </div>
                    <div className="course-pop-pup__list-course">
                        <Courses />
                    </div>
                </div>
            </div>

            <div className="my-notification-wrapper">
                <div className="my-notification">
                    <FontAwesomeIcon icon={faBell} style={{ opacity: 0.5 }} />
                </div>
                <div className="notification-pop-pup">
                    <div className="notification-pop-pup__title">
                        <h6>Thông báo</h6>
                        <button>Đánh dấu đã đọc</button>
                    </div>
                    <div className="notification-pop-pup__list-message">
                        <Messages />
                    </div>
                    <a href='/' className="notification-pop-pup__see-all">
                        <span>Xem tất cả thông báo</span>
                    </a>
                </div>
            </div>

            <div className="my-account">
                <a href="/">
                    <img
                        className="account-img"
                        src="https://i.pinimg.com/736x/42/49/72/42497225b267a7a128a8ffc720f9d198.jpg"
                    />
                </a>
            </div>
        </div>
    );
}

export default HeaderRightPage