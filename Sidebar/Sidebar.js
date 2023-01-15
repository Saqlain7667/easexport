import "./Sidebar.css";
import { Link } from "react-router-dom";
function Sidebar() {
  return (
    <div className="sidebar-container">
      <h3 className="sidebar-heading">Categories</h3>
      <ul className="category-list">
        <li>
          <Link className="category-item" to="/categories/womens-fashion">
            <i class="fa-solid fa-shirt"></i>
            Women's Fashion
          </Link>
        </li>
        <li>
          <Link className="category-item" to="/categories/mens-fashion">
            <i class="fa-solid fa-shirt"></i>
            Men's Fashion
          </Link>
        </li>
        <li>
          <Link className="category-item" to="#">
            <i class="fa-solid fa-gem"></i>
            Jewelry & Watches
          </Link>
        </li>
        <li>
          <Link className="category-item" to="#">
            <i class="fa-solid fa-laptop-medical"></i>
            Electronics
          </Link>
        </li>
        <li>
          <Link className="category-item" to="#">
            <i class="fa-solid fa-blender-phone"></i>
            Home, Pet & Appliances
          </Link>
        </li>
        <li>
          <Link className="category-item" to="#">
            <i class="fa-solid fa-bag-shopping"></i>
            Bags & Shoes
          </Link>
        </li>
        <li>
          <Link className="category-item" to="#">
            <i class="fa-solid fa-screwdriver-wrench"></i>
            Tools & Home Improvement
          </Link>
        </li>
        <li>
          <Link className="category-item" to="#">
            <i class="fa-solid fa-baby-carriage"></i>
            Toys , Kids & Babies
          </Link>
        </li>
        <li>
          <Link className="category-item" to="#">
            <i class="fa-solid fa-notes-medical"></i>
            Beauty, Health & Hair
          </Link>
        </li>
        <li>
          <Link className="category-item" to="#">
            <i class="fa-sharp fa-solid fa-salad"></i>
            Foods item
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
