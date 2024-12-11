import './HeaderLeftPage.css'

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

export default HeaderLeftPage