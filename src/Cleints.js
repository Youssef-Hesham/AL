import { useState, useEffect } from "react";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
  DotGroup,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import axios from "axios";

function Clients() {
  const [partnersList, setPartnerList] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  async function getImages() {
    const res = await fetch(
      "https://al-sharief-server.onrender.com/api/clients"
    );
    const json = await res.json();
    setPartnerList(json);
    setIsLoaded(true);
  }
  useEffect(() => {
    getImages();
  }, []);

  return (
    <>
      {isLoaded ? (
        <div>
          <CarouselProvider
            naturalSlideWidth={20}
            naturalSlideHeight={80}
            totalSlides={partnersList.length}
            interval={7000}
            isPlaying={true}
            hasMasterSpinner={false}
            visibleSlides={5}
            className="carousel"
          >
            <h2>Our Partners</h2>
            <ButtonBack className="carousel-btn back">{"<"}</ButtonBack>
            <ButtonNext className="carousel-btn next">{">"}</ButtonNext>
            <Slider>
              <div className="">
                {partnersList.map((partner) => {
                  return (
                    <Slide>
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
        </div>
      ) : (
        <></>
      )}
    </>
  );
}
export default Clients;
