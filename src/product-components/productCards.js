function ProductCard({ item }) {
  return (
    <div>
      <a className="product-card" href={item.link}>
        <img src={item.src} alt="client 1" />
        <div className="product-text">
          <h3 className="product-title">{item.title}</h3>
          <p className="product-discription">{item.discription}</p>
          <h3 className="product-view">View Products</h3>
        </div>
      </a>
    </div>
  );
}
export default ProductCard;
