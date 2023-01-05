import { useState, useEffect } from "react";
import ProductCard from "./productCards";

function Matrial() {
  const [List, setList] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  async function getImages() {
    const res = await fetch(
      "https://al-sharief-server-akqk.onrender.com/api/material"
    );
    const json = await res.json();
    setList(json);
    setIsLoaded(true);
  }
  useEffect(() => {
    getImages();
  }, []);

  return (
    <div className="body-main-div">
      {isLoaded ? (
        <div>
          <h2>Material Testing</h2>
          <div className="card-container">
            {List.map((product) => {
              return <ProductCard item={product} />;
            })}
          </div>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}
export default Matrial;
