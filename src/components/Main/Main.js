import "./Main.css";
import ProductCard from "../ProductCard/ProductCard";
import { Grid } from "@mui/material";

function Main() {
  return (
    <div className="main-container">
      <Grid container gap={2} marginTop={"2rem"}>
        <Grid item xs={5} md={3}>
          <ProductCard />
        </Grid>
        <Grid item xs={5} md={3}>
          <ProductCard />
        </Grid>
        <Grid item xs={5} md={3}>
          <ProductCard />
        </Grid>
        <Grid item xs={5} md={3}>
          <ProductCard />
        </Grid>
        <Grid item xs={5} md={3}>
          <ProductCard />
        </Grid>
        <Grid item xs={5} md={3}>
          <ProductCard />
        </Grid>
      </Grid>
    </div>
  );
}

export default Main;
