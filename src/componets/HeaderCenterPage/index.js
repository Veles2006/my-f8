import styles from './HeaderCenterPage.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

function HeaderCenterPage() {
    return (
        <div className={styles['header-center-page']}>
            <div className={styles['search-bar']}>
                <span className={styles['search-icon']}>
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                </span>
                <input
                    className={styles['search-input']}
                    placeholder="Tìm kiếm khoá học, bài viết, video, ..."
                />
            </div>
        </div>
    );
}

export default HeaderCenterPage;
