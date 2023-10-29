import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <Box
      sx={{
        margin: "0px",
        flexGrow: 1,
        backgroundColor: "#2196F3",
        boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.2)",
      }}
    >
      <AppBar
        sx={{
          backgroundColor: "white",
        }}
        elevation={0.5}
        position="static"
      >
        <Toolbar>
          <Typography
            variant="h4"
            component="div"
            sx={{
              flexGrow: 1,
              color: "black",
              fontWeight: 600,
              fontSize: "1.3rem",
            }}
          >
            APP LOGO
          </Typography>
          <Link to="/" end>
            <Button
              sx={{ color: "black", fontWeight: 530, fontSize: "0.9rem" }}
            >
              DASHBOARD
            </Button>
          </Link>
          <Link to="/createads">
            <Button
              sx={{
                color: "black",
                fontWeight: 530,
                fontSize: "0.9rem",
                textShadow: "0 0 black",
              }}
            >
              CREATE ADS
            </Button>
          </Link>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
