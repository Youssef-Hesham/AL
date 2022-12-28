import { useState, useEffect } from "react";

function News() {
  const [partnersList, setPartnerList] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  async function getImages() {
    const res = await fetch("https://al-sharief-server.onrender.com/api/news");
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
            {partnersList.map((post) => {
              return (
                <div>
                  <image src={post.src} />
                  <div>
                    <h2>{post.title}</h2>
                    <p>{post.discription}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
}
export default News;
