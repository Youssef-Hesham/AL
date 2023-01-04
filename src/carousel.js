import { useState, useEffect } from "react";
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

function Carousel() {
  const [itemIndex, updateItemIndex] = useState(0);
  const [carouselImages, setCarouselImages] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  async function getImages() {
    const res = await fetch(
      "https://al-sharief-server-akqk.onrender.com/api/carousle"
    );
    const json = await res.json();
    setCarouselImages(json);
    setIsLoaded(true);
  }
  useEffect(() => {
    getImages();
  }, []);

  function nextItem() {
    if (itemIndex === carouselImages.length - 1) {
      updateItemIndex(0);
    } else {
      updateItemIndex(itemIndex + 1);
    }
  }

  function prevItem() {
    if (itemIndex === 0) {
      updateItemIndex(carouselImages.length - 1);
    } else {
      updateItemIndex(itemIndex - 1);
    }
  }

  return (
    <div className="body-main-div">
      {isLoaded ? (
        carouselImages !== [] ? (
          <div>
            <CarouselProvider
              naturalSlideWidth={100}
              naturalSlideHeight={40}
              totalSlides={carouselImages.length}
              interval={7000}
              isPlaying={true}
              hasMasterSpinner={false}
              visibleSlides={1}
              className="carousel"
            >
              <div>
                <div className="main-carousel">
                  <div className="slider">
                    <ButtonBack className="carousel-btn back">{"<"}</ButtonBack>
                    <ButtonNext className="carousel-btn next">{">"}</ButtonNext>
                    <Slider>
                      {carouselImages.map((partner) => {
                        return (
                          <Slide>
                            <div className="slide">
                              <img
                                className="carouselImg"
                                src={partner.src}
                                alt="product"
                              />
                              <h2>{partner.title}</h2>
                            </div>
                          </Slide>
                        );
                      })}
                    </Slider>
                  </div>
                </div>
              </div>
              <DotGroup className="dotgroup" />
            </CarouselProvider>
            <div className="phone-slide">
              <img
                className="carouselImg"
                src={carouselImages[itemIndex].src}
                alt="product"
              />
              <div className="slide-text">
                <h1>{carouselImages[itemIndex].text}</h1>
                <p>{carouselImages[itemIndex].description}</p>
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
        ) : (
          <div></div>
        )
      ) : (
        <div>
          <h1>Loading...</h1>
        </div>
      )}
    </div>
  );
}
export default Carousel;
