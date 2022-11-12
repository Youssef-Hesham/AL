function Card(item) {
  return (
    <div>
      <image src={item.image} />
      <h3>{item.title}</h3>
      <p>{item.discribtion}</p>
    </div>
  );
}
export default Card;
