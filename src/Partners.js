import Card from "./Card";
import { partnersList } from "./Images";

function Partners() {
  return (
    <div>
      <h2>Our Partners</h2>
      <div className="card-container">
        {partnersList.map((partner) => {
          return <Card item={partner} />;
        })}
      </div>
    </div>
  );
}
export default Partners;
