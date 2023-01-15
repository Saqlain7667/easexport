import "./ExporterSignup.css";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { Avatar, Grid, Paper } from "@mui/material";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";

function ExporterSignup() {
  const paperStyle = {
    width: 280,
    margin: "20px auto",
  };
  const avaterStyle = {
    backgroundcolour: "green",
  };
  return (
    <div>
      <div className="main">
        <Grid>
          <Paper elevation={10} style={paperStyle} className="paper-container">
            <Grid align="center">
              <Avatar style={avaterStyle}>
                <LockOutlinedIcon />
              </Avatar>

              <h3>Exporter</h3>
              <Box
                className="Email"
                component="form"
                sx={{
                  "& > :not(style)": { m: 1, width: "25ch" },
                }}
                noValidate
                autoComplete="off"
              >
                <div className="fields">
                  <input
                    className="input-field"
                    placeholder="User name"
                    type={"email"}
                  />
                  <input className="input-field" placeholder="Email" />
                  <input className="input-field" placeholder="Cinic" />
                  <input className="input-field" placeholder="phone" />
                  <input className="input-field" placeholder="Password" />
                  <input placeholder="importing Lisence" type={"file"} />
                  <input placeholder="importing Lisence" type={"file"} />
                  <input placeholder="importing Lisence" type={"file"} />
                </div>
                <Link to={"/signup/Exporter"}>
                  <input type="submit" value="Signup" className="form-btn" />
                </Link>
              </Box>
            </Grid>
          </Paper>
        </Grid>
      </div>
    </div>
  );
}

export default ExporterSignup;
