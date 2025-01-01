import classNames from 'classnames/bind';

import Home from '../../pages/Home';
import Sidebar from '../../componets/Sidebar';
import Header from '../../componets/Header';
import styles from './MainLayout.module.scss';
import { Outlet } from 'react-router-dom';
import Footer from '../../componets/Footer';

const cx = classNames.bind(styles);

function MainLayout() {
  return (
    <>
        <Header />
        <div className={cx('grid', 'wide')}>
            <div className={cx('main-layout', 'row')}>
                <div className={cx('sidebar-wrapper', 'col', 'l-1')}>
                    <Sidebar />
                </div>
                <div className={cx('container-content', 'col', 'l-11')}>
                    <Outlet />
                </div>
            </div>
        </div>
        <Footer />
    </>
  );
}

export default MainLayout;

