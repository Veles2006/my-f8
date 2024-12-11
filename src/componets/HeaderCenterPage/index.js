import './HeaderCenterPage.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

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

export default HeaderCenterPage