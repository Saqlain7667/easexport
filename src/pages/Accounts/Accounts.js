import "./Accounts.css";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { Avatar, Grid, Paper } from "@mui/material";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import OutlinedInput from "@mui/material/OutlinedInput";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

function Accounts() {
  const paperStyle = {
    width: 280,
    margin: "20px auto",
  };
  const avaterStyle = {
    backgroundcolour: "green",
  };

  return (
    <div className="main">
      <Grid>
        <Paper elevation={10} style={paperStyle} className="paper-container">
          <Grid align="center">
            <Avatar style={avaterStyle}>
              <LockOutlinedIcon />
            </Avatar>

            <h3>Login</h3>
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
                  placeholder="Email"
                  type={"email"}
                />
                <input className="input-field" placeholder="Password" />
              </div>
              <div className="for">
                <input type="submit" value="forget password" />
              </div>
              <Link to={"/signup/importer"}>
                <input type="submit" value="Signup" className="form-btn" />
              </Link>
              <Link to={""}>
                <input type="submit" value="Login" className="form-btn" />
              </Link>
            </Box>
          </Grid>
        </Paper>
      </Grid>
    </div>
  );
}

export default Accounts;
