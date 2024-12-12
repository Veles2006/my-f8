import styles from './Header.module.css';
import classNames from 'classnames/bind';
import HeaderLeftPage from '../HeaderLeftPage';
import HeaderCenterPage from '../HeaderCenterPage';
import HeaderRightPage from '../HeaderRightPage';

const cx = classNames.bind(styles);

function Header() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('header', 'grid', 'wide')}>
                {HeaderLeftPage()}
                {HeaderCenterPage()}
                {HeaderRightPage()}
            </div>
        </div>
    );
}

export default Header;
