import React, { useState, useRef } from 'react';
import Slider from 'react-slick';
import styled from 'styled-components';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import classNames from 'classnames/bind';

import styles from './Carousel.module.scss';
import slidesList from '../../json/slides.json'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faChevronLeft,
    faChevronRight,
} from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

// Styled Components
const CarouselWrapper = styled.div`
    position: relative;
    top: 16px;
    right: 1%;
`;

const SlidePosition = styled.div`
    display: flex;
    justify-content: flex-start;
    margin-top: 16px;
    margin-left: 40px;

    .dot {
        width: 34px;
        height: 8px;
        background-color: #dce0e3;
        margin: 0 4px;
        border-radius: 8px;
        transition: all 0.3s ease;
        cursor: pointer;

        &.active {
            width: 54px;
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
    background: ${({ background }) => background || '#ccc'};
    border-radius: 16px;
    color: #fff;
`;

const Carousel = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const sliderRef = useRef(null);
    const slides = slidesList.slides

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
                        className={cx('dot', {
                            active: index === currentSlide,
                        })}
                        onClick={() => handleDotClick(index)}
                    ></div>
                ))}
            </SlidePosition>
        </CarouselWrapper>
    );
};

export default Carousel;
