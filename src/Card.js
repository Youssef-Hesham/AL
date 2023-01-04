function Card({ item }) {
  return (
    <a className="card" href={item.link}>
      <img src={item.src} alt="client 1" />
      <h3>{item.title}</h3>
    </a>
  );
}
export default Card;
