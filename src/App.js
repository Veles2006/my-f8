import classNames from 'classnames/bind';
// import styles from "./App.css"

import './App.css';
import Header from './componets/Header';
import Container from './componets/Container';
import Grid from './componets/Grid';

// const cx = classNames.bind(styles)

function Footer() {
    return (
        <footer className="footer">
            <div className="grid">
                <div className="row">
                    <div className="col l-3">
                        <div className="column-top">
                            <a href="/">
                                <img src="https://fullstack.edu.vn/assets/f8-icon-lV2rGpF0.png" />
                            </a>
                            <h2>Học Lập Trình Để Đi Làm</h2>
                        </div>
                        <p className="contact-list">
                            <b>Điện thoại:</b>
                            <a href="/"> 08 1919 8989</a>
                            <br />
                            <b>Email:</b>
                            <a href="/"> contact@fullstack.edu.vn9</a>
                            <br />
                            <b>Địa chỉ:</b>
                            {' Số 1, ngõ 41, Trần Duy Hưng, Cầu Giấy, Hà Nội'}
                        </p>
                        <div>
                            <a href="/">
                                <img
                                    className="dmca"
                                    src="data:image/png;base64,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"
                                />
                            </a>
                        </div>
                    </div>
                    <div className="col l-2">
                        <h2 className="footer-heading">Về F8</h2>
                        <ul className="footer-list">
                            <li>
                                <a href="/">Giới thiệu</a>
                            </li>
                            <li>
                                <a href="/">Liên hệ</a>
                            </li>
                            <li>
                                <a href="/">Điều khoản</a>
                            </li>
                            <li>
                                <a href="/">Bảo mật</a>
                            </li>
                        </ul>
                    </div>
                    <div className="col l-2">
                        <h2 className="footer-heading">Sản phẩm</h2>
                        <ul className="footer-list">
                            <li>
                                <a href="/">Game Nester</a>
                            </li>
                            <li>
                                <a href="/">Game CSS Diner</a>
                            </li>
                            <li>
                                <a href="/">Game CSS Selectors</a>
                            </li>
                            <li>
                                <a href="/">Game Froggy</a>
                            </li>
                            <li>
                                <a href="/">Game Froggy Pro</a>
                            </li>
                            <li>
                                <a href="/">Game Scoops</a>
                            </li>
                        </ul>
                    </div>
                    <div className="col l-2">
                        <h2 className="footer-heading">Công cụ</h2>
                        <ul className="footer-list">
                            <li>
                                <a href="/">Tạo CV xin việc</a>
                            </li>
                            <li>
                                <a href="/">Rút gọn liên kết</a>
                            </li>
                            <li>
                                <a href="/">Clip-path maker</a>
                            </li>
                            <li>
                                <a href="/">Snippet generator</a>
                            </li>
                            <li>
                                <a href="/">CSS Grid generator</a>
                            </li>
                            <li>
                                <a href="/">Cảnh báo sờ tay lên mặt</a>
                            </li>
                        </ul>
                    </div>
                    <div className="col l-3">
                        <h2 className="footer-heading">
                            <a href="/">
                                CÔNG TY CỔ PHẦN CÔNG NGHỆ GIÁO DỤC F8
                            </a>
                        </h2>
                        <ul className="footer-list">
                            <li>
                                <b>Mã số thuế:</b>
                                {' 0109922901'}
                            </li>
                            <li>
                                <b>Ngày thành lập:</b>
                                {' 04/03/2022'}
                            </li>
                            <li>
                                <b>Lĩnh vực hoạt động:</b>
                                {
                                    ' Giáo dục, công nghệ - lập trình. Chúng tôi tập trung xây dựng và phát triển các sản phẩm mang lại giá trị cho cộng đồng lập trình viên Việt Nam.'
                                }
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="row">
                    <div className="col l-12">
                        <div className="bottom">
                            <p className="copyright">
                                {'© 2018 - '}
                                {'2024'}
                                {
                                    ' F8. Nền tảng học lập trình hàng đầu Việt Nam'
                                }
                            </p>
                            <div className="social-list">
                                <a
                                    className="social-item youtube"
                                    title="F8 trên Youtube"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <svg
                                        aria-hidden="true"
                                        focusable="false"
                                        data-prefix="fab"
                                        data-icon="square-youtube"
                                        class="svg-inline--fa fa-square-youtube "
                                        role="img"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 448 512"
                                    >
                                        <path
                                            fill="currentColor"
                                            d="M282 256.2l-95.2-54.1V310.3L282 256.2zM384 32H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64zm14.4 136.1c7.6 28.6 7.6 88.2 7.6 88.2s0 59.6-7.6 88.1c-4.2 15.8-16.5 27.7-32.2 31.9C337.9 384 224 384 224 384s-113.9 0-142.2-7.6c-15.7-4.2-28-16.1-32.2-31.9C42 315.9 42 256.3 42 256.3s0-59.7 7.6-88.2c4.2-15.8 16.5-28.2 32.2-32.4C110.1 128 224 128 224 128s113.9 0 142.2 7.7c15.7 4.2 28 16.6 32.2 32.4z"
                                        ></path>
                                    </svg>
                                </a>
                                <a
                                    className="social-item facebook"
                                    title="F8 trên Facebook"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <svg
                                        aria-hidden="true"
                                        focusable="false"
                                        data-prefix="fab"
                                        data-icon="square-facebook"
                                        class="svg-inline--fa fa-square-facebook "
                                        role="img"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 448 512"
                                    >
                                        <path
                                            fill="currentColor"
                                            d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64h98.2V334.2H109.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H255V480H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64z"
                                        ></path>
                                    </svg>
                                </a>
                                <a
                                    className="social-item tiktok"
                                    title="F8 trên Tiktok"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <svg
                                        aria-hidden="true"
                                        focusable="false"
                                        data-prefix="fab"
                                        data-icon="tiktok"
                                        class="svg-inline--fa fa-tiktok "
                                        role="img"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 448 512"
                                    >
                                        <path
                                            fill="currentColor"
                                            d="M448,209.91a210.06,210.06,0,0,1-122.77-39.25V349.38A162.55,162.55,0,1,1,185,188.31V278.2a74.62,74.62,0,1,0,52.23,71.18V0l88,0a121.18,121.18,0,0,0,1.86,22.17h0A122.18,122.18,0,0,0,381,102.39a121.43,121.43,0,0,0,67,20.14Z"
                                        ></path>
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

function App() {
    return (
        <Grid>
            <div className="App">
                {Header()}
                {Container()}
                {Footer()}
            </div>
        </Grid>
    );
}

export default App;
