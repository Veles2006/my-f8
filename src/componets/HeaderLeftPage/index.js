import styles from './HeaderLeftPage.module.css';

function HeaderLeftPage() {
    return (
        <div className={styles['header-left-page']}>
            <h1>
                <a href="/">
                    <img
                        src="https://fullstack.edu.vn/assets/f8-icon-lV2rGpF0.png"
                        className={styles.logo}
                        alt="Logo"
                    />
                </a>
                <a href="/" className={styles.target}>
                    <span>Học Lập Trình Để Đi Làm</span>
                </a>
            </h1>
        </div>
    );
}

export default HeaderLeftPage;
