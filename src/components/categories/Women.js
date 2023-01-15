import "./women.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import ProductCard from "../../components/ProductCard/womenCard";
import { Grid } from "@mui/material";
function Women() {
  return (
    <div>
      {" "}
      <input className="search-bar" placeholder="Search..." />
      <button className="search-btn">
        <i class="fa-solid fa-magnifying-glass"></i>
      </button>
      <Grid
        container
        gap={2}
        marginTop={"2rem"}
        alignContent="center"
        width={"100vw"}
      >
        <Grid item sm={6} md={2}>
          <ProductCard />
        </Grid>
        <Grid item sm={6} md={2}>
          <ProductCard />
        </Grid>
        <Grid item sm={6} md={2}>
          <ProductCard />
        </Grid>
        <Grid item sm={6} md={2}>
          <ProductCard />
        </Grid>
        <Grid item sm={6} md={2}>
          <ProductCard />
        </Grid>
        <Grid item sm={6} md={2}>
          <ProductCard />
        </Grid>
        <Grid item sm={6} md={2}>
          <ProductCard />
        </Grid>
        <Grid item sm={6} md={2}>
          <ProductCard />
        </Grid>
        <Grid item sm={6} md={2}>
          <ProductCard />
        </Grid>
        <Grid item sm={6} md={2}>
          <ProductCard />
        </Grid>
      </Grid>
    </div>
  );
}

export default Women;
