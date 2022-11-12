import Carousel from "./carousel";
import { carouselImages, Cards } from "./Images";
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
        {Cards.map((card) => {
          return <Card item={card} />;
        })}
      </section>
    </div>
  );
}
export default Home;
