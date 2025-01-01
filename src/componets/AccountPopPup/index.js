import React from 'react';
// import PropTypes from 'prop-types';
import styles from './AccountPopPup.module.scss';
import classNames from 'classnames/bind';
import data from '../../json/account.json'
import avatar from '../../assets/imgs/avatar.jpg'

const cx = classNames.bind(styles);

function AccountPopPup() {
    return (
        <div className={cx('account-pop-pup-wrapper')}>
            <ul className={cx('account-pop-pup')}>
                {/* User Info */}
                <a href={data.profileLink} className={cx('account-user')}>
                    <div className={cx('avatar-wrapper')}>
                        <div className={cx('avatar')}>
                            <img src={avatar} alt={data.fullName} />
                        </div>
                    </div>
                    <div className={cx('info')}>
                        <span className={cx('name')}>{data.fullName}</span>
                        <div className={cx('user-name')}>{`@${data.userName}`}</div>
                    </div>
                </a>
                <hr />

                {/* Dynamic Sections */}
                {data.sections.map((section, index) => (
                    <React.Fragment key={index}>
                        <ul className={cx('account-list')}>
                            {section.items.map((item, itemIndex) => (
                                <li key={itemIndex}>
                                    {item.link ? (
                                        <a href={item.link} className={cx('account-item')}>
                                            {item.label}
                                        </a>
                                    ) : (
                                        <span className={cx('account-item')}>{item.label}</span>
                                    )}
                                </li>
                            ))}
                        </ul>
                        {index < data.sections.length - 1 && <hr />}
                    </React.Fragment>
                ))}
            </ul>
        </div>
    );
}

// AccountPopPup.propTypes = {
//     data: PropTypes.shape({
//         fullName: PropTypes.string.isRequired,
//         userName: PropTypes.string.isRequired,
//         profileLink: PropTypes.string.isRequired,
//         avatar: PropTypes.string, // optional if no avatar in JSON
//         sections: PropTypes.arrayOf(
//             PropTypes.shape({
//                 items: PropTypes.arrayOf(
//                     PropTypes.shape({
//                         label: PropTypes.string.isRequired,
//                         link: PropTypes.string, // optional for items like 'Cài đặt' or 'Đăng xuất'
//                     })
//                 ).isRequired,
//             })
//         ).isRequired,
//     }).isRequired,
// };

export default AccountPopPup;
