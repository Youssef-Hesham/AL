import { useState } from "react";

function Carousel({ items }) {
  const [itemIndex, updateItemIndex] = useState(0);

  function nextItem() {
    if (itemIndex === items.length - 1) {
      updateItemIndex(0);
    } else {
      updateItemIndex(itemIndex + 1);
    }
  }

  function prevItem() {
    if (itemIndex === 0) {
      updateItemIndex(items.length - 1);
    } else {
      updateItemIndex(itemIndex - 1);
    }
  }

  return (
    <div>
      <button onClick={prevItem}>{"<"}</button>
      <div>
        <img className="carouselImg" src={items[itemIndex].src} alt="product" />
      </div>
      <h1>{items[itemIndex].text}</h1>
      <button onClick={nextItem}>{">"}</button>
    </div>
  );
}
export default Carousel;
