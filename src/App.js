import classNames from 'classnames/bind';
// import styles from "./App.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

import './App.css';
import Courses from './componets/Courses';
import Messages from './componets/Messages';

// const cx = classNames.bind(styles)

function HeaderLeftPage() {
    return (
        <div className="header-left-page">
            <h1>
                <a href="/">
                    <img
                        src="https://fullstack.edu.vn/assets/f8-icon-lV2rGpF0.png"
                        className="logo"
                    />
                </a>
                <a href="/" className="target">
                    Học Lập Trình Để Đi Làm
                </a>
            </h1>
        </div>
    );
}

function HeaderCenterPage() {
    return (
        <div className="header-center-page">
            <div className="search-bar">
                <span className="search-icon">
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                </span>
                <input
                    className="search-input"
                    placeholder="Tìm kiếm khoá học, bài viết, video, ..."
                />
            </div>
        </div>
    );
}

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

function Header() {
    return (
        <div className="wrapper">
            <div className="header grid wide">
                {HeaderLeftPage()}
                {HeaderCenterPage()}
                {HeaderRightPage()}
            </div>
        </div>
    );
}

function App() {
    return <div className="App">{Header()}</div>;
}

export default App;
