import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";

function PhoneCard({
    id,
    name,
    manufacturer,
    description,
    imageFileName,
  }) {
  
  return (
    <Card style={{ width: "18rem" }}>
    <Card.Img variant="top" src={`/images/${imageFileName}`} />
    <Card.Body>
      <Card.Title>{name}</Card.Title>
      <Card.Text>{manufacturer}</Card.Text>
      <Card.Text>{description}</Card.Text>
      <Link to={`/phones/${id}`} className="btn btn-secondary">view details</Link>
    </Card.Body>
  </Card>
  );
}
 
export default PhoneCard;