import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faBullhorn,
    faHouse,
    faNewspaper,
    faRoad,
} from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';

import styles from './Sidebar.module.scss';
import { Link, useLocation } from 'react-router-dom';

const cx = classNames.bind(styles);

function Sidebar() {
    const location = useLocation(); // Lấy thông tin đường dẫn hiện tại

    return (
        <div className={cx('sidebar')}>
            <ul className={cx('sidebar__navigations')}>
                <li
                    className={cx('sidebar__navigation', {
                        'sidebar__navigation--active': location.pathname === '/',
                    })}
                >
                    <Link to="/">
                        <FontAwesomeIcon icon={faHouse} />
                        <span>Trang chủ</span>
                    </Link>
                </li>
                <li
                    className={cx('sidebar__navigation', {
                        'sidebar__navigation--active': location.pathname === '/learning-paths',
                    })}
                >
                    <Link to="/learning-paths">
                        <FontAwesomeIcon icon={faRoad} />
                        <span>Lộ trình</span>
                    </Link>
                </li>
                <li
                    className={cx('sidebar__navigation', {
                        'sidebar__navigation--active': location.pathname === '/blog',
                    })}
                >
                    <Link to="/blog">
                        <FontAwesomeIcon icon={faNewspaper} />
                        <span>Bài viết</span>
                    </Link>
                </li>
            </ul>
            <div className={cx('sidebar__notice')}>
                <FontAwesomeIcon icon={faBullhorn} />
            </div>
        </div>
    );
}

export default Sidebar;
