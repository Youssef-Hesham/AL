import Carousel from "./carousel";
import { carouselImages } from "./Images";
import Clients from "./Cleints";
function Home() {
  return (
    <div className="main">
      <Carousel items={carouselImages} />
      <section>
        <h2>CEO's Quote</h2>
        <p></p>
      </section>
      <section>
        <Clients />
      </section>
    </div>
  );
}
export default Home;
