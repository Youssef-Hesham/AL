import { partnersList } from "./Images";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
  DotGroup,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";

function Clients() {
  return (
    <div>
      <CarouselProvider
        naturalSlideWidth={100}
        naturalSlideHeight={30}
        totalSlides={partnersList.length}
        interval={7000}
        isPlaying={true}
        hasMasterSpinner={false}
        visibleSlides={5}
        className="carousel"
      >
        <h2>Our Partners</h2>
        <Slider>
          <div className="card-container">
            {partnersList.map((partner) => {
              return (
                <Slide>
                  <a className="" href={partner.url}>
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
  );
}
export default Clients;
