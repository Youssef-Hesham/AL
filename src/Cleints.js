import { useState, useEffect } from "react";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";

function Clients() {
  const [itemIndex, updateItemIndex] = useState(0);
  const [partnersList, setPartnerList] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  async function getImages() {
    const res = await fetch(
      "https://al-sharief-server-akqk.onrender.com/api/clients"
    );
    const json = await res.json();
    setPartnerList(json);
    setIsLoaded(true);
  }
  useEffect(() => {
    getImages();
  }, []);

  function nextItem() {
    if (itemIndex === partnersList.length - 1) {
      updateItemIndex(0);
    } else {
      updateItemIndex(itemIndex + 1);
    }
  }

  function prevItem() {
    if (itemIndex === 0) {
      updateItemIndex(partnersList.length - 1);
    } else {
      updateItemIndex(itemIndex - 1);
    }
  }
  return (
    <div className="body-main-div">
      {isLoaded ? (
        <div>
          <CarouselProvider
            naturalSlideWidth={20}
            naturalSlideHeight={40}
            totalSlides={partnersList.length}
            interval={7000}
            isPlaying={true}
            hasMasterSpinner={false}
            visibleSlides={5}
            className="carousel clients-phone-carousle "
          >
            <h2>Our Clients</h2>
            <ButtonBack className="carousel-btn back">{"<"}</ButtonBack>
            <ButtonNext className="carousel-btn next">{">"}</ButtonNext>
            <Slider className="clients-phone-carousle">
              <div className="">
                {partnersList.map((partner) => {
                  return (
                    <Slide className="client-slide">
                      <a className="client-img" href={partner.url}>
                        <img src={partner.src} alt="client 1" />
                        <h3>{partner.title}</h3>
                      </a>
                    </Slide>
                  );
                })}
              </div>
            </Slider>
          </CarouselProvider>
          <div className="phone-slide">
            <img
              className="carouselImg"
              src={partnersList[itemIndex].src}
              alt="product"
            />
            <div className="slide-text">
              <h1>{partnersList[itemIndex].text}</h1>
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
        <></>
      )}
    </div>
  );
}
export default Clients;
