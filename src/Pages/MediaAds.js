import React from "react";
import { Box, Button, Grid, Typography } from "@mui/material";
import "../StlSheets/custom.css";
import { Link } from "react-router-dom";
import "../StlSheets/Form.css";

const MediaAds = () => {
  return (
    <Grid
      sx={{
        position: "absolute",
        height: "86%",
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
            style={{
              position: "absolute",
              top: "8%",
              left: "1%",
              fontWeight: "500",
              fontSize: "0.9rem",
            }}
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
            style={{
              position: "absolute",
              top: "22%",
              left: "1%",
              fontWeight: "500",
              fontSize: "0.9rem",
            }}
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
            style={{
              position: "absolute",
              top: "34%",
              left: "1%",
              fontWeight: "500",
              fontSize: "0.9rem",
            }}
            htmlFor="myInput"
          >
            Landscape Marketing Image
          </label>
          <input
            placeholder="Add the URL of the image you want to use for the ad"
            style={{
              position: "absolute",
              top: "39%",
              left: "1%",
              width: "30%",
              height: "4%",
            }}
            type="text"
            id="myInput"
            name="myInput"
          />
        </div>
        <div>
          <label
            style={{
              position: "absolute",
              top: "46%",
              left: "1%",
              fontWeight: "500",
              fontSize: "0.9rem",
            }}
            htmlFor="myInput"
          >
            Video URL
          </label>
          <input
            placeholder="Add the url of the video you want to use for the ad"
            style={{
              position: "absolute",
              top: "51%",
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
            style={{
              position: "absolute",
              top: "59%",
              left: "1%",
              fontWeight: "500",
              fontSize: "0.9rem",
            }}
            htmlFor="myInput"
          >
            Business Name
          </label>
          <input
            placeholder="Add your business name"
            style={{
              position: "absolute",
              top: "64%",
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
            style={{
              position: "absolute",
              top: "71%",
              left: "1%",
              fontWeight: "500",
              fontSize: "0.9rem",
            }}
            htmlFor="myInput"
          >
            Website URL
          </label>
          <input
            placeholder="Add a URL of landing page you want to redirect users to"
            style={{
              position: "absolute",
              top: "76%",
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
            style={{
              position: "absolute",
              top: "8%",
              left: "51%",
              fontWeight: "500",
              fontSize: "0.9rem",
            }}
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
            style={{
              position: "absolute",
              top: "34%",
              left: "35%",
              fontWeight: "500",
              fontSize: "0.9rem",
            }}
            htmlFor="myInput"
          >
            Portrait Marketing Image
          </label>
          <input
            placeholder="Add the URL of the image you want to use for the ad"
            style={{
              position: "absolute",
              top: "39%",
              left: "35%",
              width: "30%",
              height: "4%",
            }}
            type="text"
            id="myInput"
            name="myInput"
          />
        </div>
        <div>
          <label
            style={{
              position: "absolute",
              top: "34%",
              left: "68%",
              fontWeight: "500",
              fontSize: "0.9rem",
            }}
            htmlFor="myInput"
          >
            Square Marketing Image
          </label>
          <input
            placeholder="Add the URL of the image you want to use for the ad"
            style={{
              position: "absolute",
              top: "39%",
              left: "68%",
              width: "30%",
              height: "4%",
            }}
            type="text"
            id="myInput"
            name="myInput"
          />
        </div>
        <div>
          <label
            style={{
              position: "absolute",
              top: "59%",
              left: "51%",
              fontWeight: "500",
              fontSize: "0.9rem",
            }}
            htmlFor="myInput"
          >
            Button Label
          </label>
          <input
            placeholder="Select a label that best suits your ad"
            style={{
              position: "absolute",
              top: "64%",
              left: "51%",
              width: "47%",
              height: "4%",
            }}
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
                border: "1px solid grey",
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
                color: "white",
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

export default MediaAds;
