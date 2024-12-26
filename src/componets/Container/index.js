import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBullhorn, faHouse, faNewspaper, faRoad } from '@fortawesome/free-solid-svg-icons';
import Caroulsel from '../Carousel';
import CourseList from '../CourseList';
import classNames from 'classnames/bind';

import styles from './Container.module.scss';

const cx = classNames.bind(styles);

function Container() {
  return (
    <div className={cx('container', 'grid', 'wide')}>
      <div className={cx('container__wrapper', 'row')}>
        <div className={cx('sidebar-wrapper', 'col', 'l-1')}>
          <div className={cx('sidebar')}>
            <ul className={cx('sidebar__navigations')}>
              <li className={cx('sidebar__navigation', 'sidebar__navigation--active')}>
                <a href='/'>
                  <FontAwesomeIcon icon={faHouse} />
                  <span>Trang chủ</span>
                </a>
              </li>
              <div className={cx('sidebar__navigation')}>
                <a href='/'>
                  <FontAwesomeIcon icon={faRoad} />
                  <span>Lộ trình</span>
                </a>
              </div>
              <div className={cx('sidebar__navigation')}>
                <a href='/'>
                  <FontAwesomeIcon icon={faNewspaper} />
                  <span>Bài viết</span>
                </a>
              </div>
            </ul>
            <div className={cx('sidebar__notice')}>
              <FontAwesomeIcon icon={faBullhorn} />
            </div>
          </div>
        </div>
        <div className={cx('container-content', 'col', 'l-11')}>
          <Caroulsel />
          <CourseList />
        </div>
      </div>
    </div>
  );
}

export default Container;

