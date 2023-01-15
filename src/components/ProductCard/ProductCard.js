import "./ProductCard.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import ProductImage from "../../images/camera-image.jpg";
import { Rating } from "@mui/material";
function ProductCard() {
  return (
    <Card className="card-container">
      <Card.Img
        variant="top"
        src={ProductImage}
        width={"100%"}
        className="card-image"
      />

      <Card.Body>
        <Card.Title>Product One</Card.Title>
        <button className="card-btn">Add to Cart</button>

        <Rating name="customized-5" defaultValue={3} max={5} />
      </Card.Body>
    </Card>
  );
}

export default ProductCard;
