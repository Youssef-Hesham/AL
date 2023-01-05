import { useState, useEffect } from "react";
import ProductCard from "./productCards";

function Lab() {
  const [edList, setedList] = useState([]);
  const [suList, setSuList] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  async function getImages() {
    const res = await fetch(
      "https://al-sharief-server-akqk.onrender.com/api/education"
    );
    const json = await res.json();
    setedList(json);

    const res2 = await fetch(
      "https://al-sharief-server-akqk.onrender.com/api/supplies"
    );
    const json2 = await res2.json();
    setSuList(json2);
    setIsLoaded(true);
  }
  useEffect(() => {
    getImages();
  }, []);

  return (
    <div className="body-main-div">
      {isLoaded ? (
        <div>
          <section>
            <h2>Educational Expriments</h2>
            <div className="card-container">
              {edList.map((product) => {
                return <ProductCard item={product} />;
              })}
            </div>
          </section>
          <section>
            <h2>Lab Supplies </h2>
            <div className="card-container">
              {suList.map((product) => {
                return <ProductCard item={product} />;
              })}
            </div>
          </section>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}
export default Lab;
