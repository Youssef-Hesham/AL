import {
  faDna,
  faHammer,
  faMicrochip,
  faMicroscope,
  faScroll,
  faSeedling,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

function Products() {
  return (
    <div className="products body-main-div">
      <section className="products-page ">
        <Link to="/LifeScience" className="product-nav">
          <div className="product-catg">
            <h1>
              <FontAwesomeIcon className="product-cat-icon" icon={faDna} />
            </h1>
            <h2>Life Science (Education & Research)</h2>
          </div>
        </Link>
        <Link to="/pcb" className="product-nav">
          <div className="product-catg">
            <h1>
              <FontAwesomeIcon
                className="product-cat-icon"
                icon={faMicrochip}
              />
            </h1>
            <h2>PCB Testing</h2>
          </div>
        </Link>
        <Link to="/restoration" className="product-nav">
          <div className="product-catg">
            <h1>
              <FontAwesomeIcon className="product-cat-icon" icon={faScroll} />
            </h1>
            <h2>Restoration & Preservtion Equipment</h2>
          </div>
        </Link>
        <Link to="/enviromental" className="product-nav">
          <div className="product-catg">
            <h1>
              <FontAwesomeIcon className="product-cat-icon" icon={faSeedling} />
            </h1>
            <h2>Enviromental Equipment</h2>
          </div>
        </Link>
        <Link to="/lab" className="product-nav">
          <div className="product-catg">
            <h1>
              <FontAwesomeIcon
                className="product-cat-icon"
                icon={faMicroscope}
              />
            </h1>
            <h2>Laboratory Equipment</h2>
          </div>
        </Link>
        <Link to="/material" className="product-nav">
          <div className="product-catg">
            <h1>
              <FontAwesomeIcon className="product-cat-icon" icon={faHammer} />
            </h1>
            <h2>Material Testing </h2>
          </div>
        </Link>
      </section>
    </div>
  );
}
export default Products;
