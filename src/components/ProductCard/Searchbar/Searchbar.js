import "./Searhcbar.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Image1 from "../../images/camera-image.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Carousel } from "react-bootstrap";
function Searchbar() {
  return (
    <>
      <input className="search-bar" placeholder="Search..." />
      <button className="search-btn">
        <i class="fa-solid fa-magnifying-glass"></i>
      </button>
      <Carousel className="slider">
        <Carousel.Item>
          <img className="d-block w-100" src={Image1} alt="First slide" />
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={Image1} alt="Second slide" />

          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={Image1} alt="Third slide" />

          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  );
}

export default Searchbar;
