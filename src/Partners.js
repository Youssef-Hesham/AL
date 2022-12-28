import { useState, useEffect } from "react";
import Card from "./Card";

function Partners() {
  const [partnersList, setPartnerList] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  async function getImages() {
    const res = await fetch(
      "https://al-sharief-server-akqk.onrender.com/api/partners"
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
          <h2>Our Partners</h2>
          <div className="card-container">
            {partnersList.map((partner) => {
              return <Card item={partner} />;
            })}
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
}
export default Partners;
