import { useState } from "react";
import React from "react";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
  DotGroup,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";

function Carousel({ items }) {
  const [itemIndex, updateItemIndex] = useState(0);

  function nextItem() {
    if (itemIndex === items.length - 1) {
      updateItemIndex(0);
    } else {
      updateItemIndex(itemIndex + 1);
    }
  }

  function prevItem() {
    if (itemIndex === 0) {
      updateItemIndex(items.length - 1);
    } else {
      updateItemIndex(itemIndex - 1);
    }
  }

  return (
    <div>
      <CarouselProvider
        naturalSlideWidth={100}
        naturalSlideHeight={30}
        totalSlides={2}
        interval={7000}
        isPlaying={true}
        hasMasterSpinner={false}
        visibleSlides={1}
        className="carousel"
      >
        <div>
          <div className="main-carousel">
            <Slider>
              <Slide index={0}>
                <div className="slide">
                  <img
                    className="carouselImg"
                    src={items[0].src}
                    alt="product"
                  />
                  <div className="slide-text">
                    <h1>{items[0].text}</h1>
                    <p>{items[0].description}</p>
                  </div>
                </div>
              </Slide>
              <Slide index={1}>
                <div className="slide">
                  <img
                    className="carouselImg"
                    src={items[1].src}
                    alt="product"
                  />
                  <div className="slide-text">
                    <h1>{items[1].text}</h1>
                    <p>{items[1].description}</p>
                  </div>
                </div>
              </Slide>
            </Slider>
          </div>
        </div>
        <div className="carousel-btns">
          <ButtonBack className="carousel-btn">{"<"}</ButtonBack>
          <DotGroup className="dotgroup" />
          <ButtonNext className="carousel-btn">{">"}</ButtonNext>
        </div>
      </CarouselProvider>
      <div className="phone-slide">
        <img className="carouselImg" src={items[itemIndex].src} alt="product" />
        <div className="slide-text">
          <h1>{items[itemIndex].text}</h1>
          <p>{items[itemIndex].description}</p>
        </div>
        <div>
          <button className="carouselButton" onClick={prevItem}>
            {"<"}
          </button>
          <button className="carouselButton" onClick={nextItem}>
            {">"}
          </button>
        </div>
      </div>
    </div>
  );
}
export default Carousel;
