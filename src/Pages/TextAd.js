import React from "react";
import { Box, Button, Grid, Typography } from "@mui/material";
import "../StlSheets/custom.css";
import { Link } from "react-router-dom";
import "../StlSheets/Form.css";

const TextAd = () => {
  return (
    <Grid
      sx={{
        position: "absolute",
        height: "88%",
        width: "98%",
        borderRadius: "5px",
        marginTop: "10px",
        boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.2)",
      }}
    >
      <Typography
        sx={{
          position: "absolute",
          top: "1%",
          left: "1%",
          fontWeight: "500",
          fontSize: "1rem",
        }}
      >
        Create Text & Media
      </Typography>
      <Box>
        <div>
          <label
            style={{ position: "absolute", top: "8%", left: "1%" }}
            htmlFor="myInput"
          >
            Heading 01
          </label>
          <input
            placeholder="Add a heading that would make users interested"
            style={{
              position: "absolute",
              top: "13%",
              left: "1%",
              width: "47%",
              height: "4%",
            }}
            type="text"
            id="myInput"
            name="myInput"
          />
        </div>
        <div>
          <label
            style={{ position: "absolute", top: "21%", left: "1%" }}
            htmlFor="myInput"
          >
            Heading 02
          </label>
          <input
            placeholder="Add a heading that would make users interested"
            style={{
              position: "absolute",
              top: "27%",
              left: "1%",
              width: "47%",
              height: "4%",
            }}
            type="text"
            id="myInput"
            name="myInput"
          />
        </div>
        <div>
          <label
            style={{ position: "absolute", top: "35%", left: "1%" }}
            htmlFor="myInput"
          >
            Business Name
          </label>
          <input
            placeholder="Add your business name"
            style={{
              position: "absolute",
              top: "41%",
              left: "1%",
              width: "47%",
              height: "4%",
            }}
            type="text"
            id="myInput"
            name="myInput"
          />
        </div>
        <div>
          <label
            style={{ position: "absolute", top: "48%", left: "1%" }}
            htmlFor="myInput"
          >
            Website URL
          </label>
          <input
            placeholder="Add a URL of landing page you want to redirect users to"
            style={{
              position: "absolute",
              top: "53%",
              left: "1%",
              width: "97%",
              height: "4%",
            }}
            type="text"
            id="myInput"
            name="myInput"
          />
        </div>
        <div>
          <label
            style={{ position: "absolute", top: "8%", left: "51%" }}
            htmlFor="myInput"
          >
            Description 01
          </label>
          <textarea
            placeholder="Add primary text to help users understand more about your products, services and offers"
            style={{
              position: "absolute",
              top: "13%",
              left: "51%",
              width: "47%",
              height: "18%",
            }}
            type="text"
            id="myInput"
            name="myInput"
          />
        </div>

        <div>
          <label
            style={{ position: "absolute", top: "35%", left: "51%" }}
            htmlFor="myInput"
          >
            Button Label
          </label>
          <input
            style={{
              position: "absolute",
              top: "41%",
              left: "51%",
              width: "47%",
              height: "4%",
            }}
            placeholder="Select a label that bests suit you ad"
            type="text"
            id="myInput"
            name="myInput"
          />
        </div>
        <div>
          <Link to="/createads">
            <Button
              sx={{
                position: "absolute",
                top: "92%",
                left: "78%",
                bgcolor: "whitesmoke",
                width: "10%",
                color: "black",
                textTransform: "capitalize",
                fontWeight: "700",
              }}
              variant="outlined"
            >
              Back
            </Button>
          </Link>
          <Link to="/submit">
            <Button
              sx={{
                position: "absolute",
                top: "92%",
                left: "89%",
                width: "10%",
                textTransform: "capitalize",
                fontWeight: "700",
              }}
              variant="contained"
            >
              Submit
            </Button>
          </Link>
        </div>
      </Box>
    </Grid>
  );
};

export default TextAd;
