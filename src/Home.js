import Carousel from "./carousel";
import { carouselImages, cards } from "./Images";
import Card from "./Card";
function Home() {
  return (
    <div className="main">
      <Carousel items={carouselImages} />
      <section>
        <h2>CEO's Quote</h2>
        <p></p>
      </section>
      <section>
        <h2>People Who Trust Us </h2>
        <div className="card-container">
          {cards.map((card) => {
            return <Card item={card} />;
          })}
        </div>
      </section>
    </div>
  );
}
export default Home;
