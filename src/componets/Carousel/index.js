import React, { useState } from 'react';
import Slider from 'react-slick';
import styled from 'styled-components';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import classNames from 'classnames/bind';

import styles from './Carousel.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faChevronLeft,
    faChevronRight,
} from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

const CarouselWrapper = styled.div`
    position: relative;
    top: 16px;
    right: 1%;
`;

const SlidePosition = styled.div`
    display: flex;
    justify-content: flex-start;
    margin-top: 16px;

    .dot {
        width: 30px;
        height: 8px;
        background-color: #dce0e3;
        margin: 0 4px;
        border-radius: 8px;
        transition: all 0.3s ease;
        cursor: pointer;

        &.active {
            width: 50px;
            background-color: #9aa6af;
        }
    }
`;

const CustomArrow = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 32px;
    height: 32px;
    background-color: #fff;
    box-shadow: 0px 0px 10px 1px rgba(0, 0, 0, 0.2);
    color: #000;
    border: none;
    padding: 10px;
    cursor: pointer;
    z-index: 1;
    border-radius: 50%;

    & svg {
        color: #555;
        font-size: 12px;
    }

    &:hover svg {
        color: #000;
    }

    &.prev {
        left: -16px;
    }

    &.next {
        right: -16px;
    }
`;

const Slide = styled.div`
    display: flex;
    height: 270px;
    background: ${(props) => props.background || '#ccc'};
    border-radius: 10px;
    color: #fff;
`;

const Carousel = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    let sliderRef = React.createRef();

    const slides = [
        {
            title: 'Lớp Offline tại Hà Nội',
            paragraph:
                'Hình thức học Offline phù hợp nếu bạn muốn được hướng dẫn và hỗ trợ trực tiếp tại lớp. Giờ học linh hoạt, phù hợp cả sinh viên và người đi làm.',
            button: 'TƯ VẤN MIỄN PHÍ',
            image: 'https://files.fullstack.edu.vn/f8-prod/banners/36/6454dee96205c.png',
            background:
                'linear-gradient(to right, rgb(136, 40, 250), rgb(89, 169, 250))',
        },
        {
            title: 'Mở bán khoá Javascript Pro',
            paragraph:
                'Từ 08/08/2024 khóa học sẽ có giá 1.399k (-200k nếu pre-order khóa HTML CSS Pro). Khi full khóa học sẽ trở về giá gốc.',
            button: 'HỌC THỬ MIỄN PHÍ',
            image: 'https://files.fullstack.edu.vn/f8-prod/banners/37/66b5a6b16d31a.png',
            background:
                'linear-gradient(to right, rgb(138, 10, 255), rgb(96, 6, 255))',
        },
        {
            title: 'Mở Bán Áo Polo F8 Đợt 2',
            paragraph:
                'Áo Polo F8 với thiết kế tối giản, lịch sự, phù hợp mặc mọi lúc, mọi nơi. Chất áo mềm mại, thoáng mát, ngực và tay áo in logo F8 - Fullstack.',
            button: 'ĐẶT ÁO NGAY',
            image: 'https://files.fullstack.edu.vn/f8-prod/banners/1/657686da32787.png',
            background:
                'linear-gradient(to right, rgb(253, 34, 92), rgb(253, 144, 4))',
        },
        {
            title: 'Học HTML CSS cho người mới',
            paragraph:
                'Thực hành dự án với Figma, hàng trăm bài tập và thử thách, hướng dẫn 100% bởi Sơn Đặng, tặng kèm Flashcards, v.v.',
            button: 'HỌC THỬ MIỄN PHÍ',
            image: 'https://files.fullstack.edu.vn/f8-prod/banners/20/6308a6bf603a4.png',
            background:
                'linear-gradient(to right, rgb(104, 40, 250), rgb(255, 186, 164))',
        },
    ];

    const PrevArrow = (props) => (
        <CustomArrow className="prev" onClick={props.onClick}>
            <FontAwesomeIcon icon={faChevronLeft} />
        </CustomArrow>
    );

    const NextArrow = (props) => (
        <CustomArrow className="next" onClick={props.onClick}>
            <FontAwesomeIcon icon={faChevronRight} />
        </CustomArrow>
    );

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        beforeChange: (_, next) => setCurrentSlide(next),
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
    };

    const handleDotClick = (index) => {
        sliderRef.current.slickGoTo(index);
    };

    return (
        <CarouselWrapper>
            <Slider {...settings} ref={sliderRef}>
                {slides.map((slide, index) => (
                    <Slide
                        key={index}
                        background={slide.background}
                        className={cx('carousel-wrapper')}
                    >
                        <div className={cx('carousel-left')}>
                            <div>
                                <a href="/">{slide.title}</a>
                            </div>
                            <p>{slide.paragraph}</p>
                            <div>
                                <a href="/">{slide.button}</a>
                            </div>
                        </div>
                        <div className={cx('carousel-right')}>
                            <img
                                src={slide.image}
                                alt={`Image of ${slide.title}`}
                            />
                        </div>
                    </Slide>
                ))}
            </Slider>
            <SlidePosition>
                {slides.map((_, index) => (
                    <div
                        key={index}
                        className={cx('dot', { active: index === currentSlide })}
                        onClick={() => handleDotClick(index)}
                    ></div>
                ))}
            </SlidePosition>
        </CarouselWrapper>
    );
};

export default Carousel;