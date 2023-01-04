import { useState, useEffect } from "react";

function News() {
  const [partnersList, setPartnerList] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  async function getImages() {
    const res = await fetch(
      "https://al-sharief-server-akqk.onrender.com/api/news"
    );
    const json = await res.json();
    setPartnerList(json);
    setIsLoaded(true);
  }
  useEffect(() => {
    getImages();
  }, []);

  return (
    <div className="body-main-div">
      {isLoaded ? (
        <div>
          <h2>News</h2>
          <div className="main-container">
            {partnersList.map((post) => {
              return (
                <div className="news-container">
                  <img className="news-img" src={post.src} alt="news 1" />
                  <div className="text-container">
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
    </div>
  );
}
export default News;
