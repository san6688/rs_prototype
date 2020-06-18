import React, { useRef } from 'react';
import useSlider from '../../hooks/useSlider';
import './slider.css';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';

const Slider = ({ images }) => {
  const slideImage = useRef(null);
  const slideText = useRef(null);
  const { goToPreviousSlide, goToNextSlide } = useSlider(slideImage, slideText, images);

  return (
    <div className="slider" ref={slideImage}>
      <div className="slider--content">
        <button onClick={goToPreviousSlide} className="slider__btn-left">
          <span className="icon" style={{ opacity: 0.3 }}>
            <FaAngleLeft />
          </span>
        </button>
        <div className="slider--feature">
          <h1 className="feature--title">Dreaming</h1>
          <p ref={slideText} className="feature--text" />
          <button className="feature__btn">Get started</button>
        </div>
        <button onClick={goToNextSlide} className="slider__btn-right">
          <span className="icon" style={{ opacity: 0.3 }}>
            <FaAngleRight />
          </span>
        </button>
      </div>
    </div>
  );
};

export default Slider;
