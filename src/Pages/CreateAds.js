import {
  Box,
  FormGroup,
  FormControlLabel,
  Checkbox,
  Typography,
  Button,
  Grid,
} from "@mui/material";
import { Link } from "react-router-dom";
import React, { useState } from "react";
import mediaimg from "../Resource/media.png";
import txtimg from "../Resource/text.png";
import { grey } from "@mui/material/colors";

const CreateAds = () => {
  const [chone, setChone] = useState(false);
  const [chtwo, setTwo] = useState(false);

  const handleCh1Change = () => {
    setChone(!chone);
  };
  const handleCh2Change = () => {
    setTwo(!chtwo);
  };
  return (
    <Grid
      sx={{
        position: "absolute",
        height: "86%",
        width: "98%",
        marginTop: "10px",
        borderRadius: "5px",
        boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.2)",
      }}
    >
      <Typography
        sx={{
          position: "absolute",
          top: "3%",
          left: "2%",
          fontWeight: "500",
          fontSize: "1rem",
        }}
      >
        Create Ads
      </Typography>
      <div
        onClick={handleCh1Change}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          position: "absolute",
          top: "12%",
          left: "22%",
          width: "25vw",
          backgroundColor: "white",
          height: "60vh",
          boxShadow: "2px 2px 2px 2px rgba(0, 0, 0, 0.2)",
          cursor: "pointer",
          borderRadius: "6px",
        }}
      >
        <FormGroup>
          <FormControlLabel
            style={{ position: "absolute", top: "1%", left: "4%" }}
            control={<Checkbox checked={chone} onChange={handleCh1Change} />}
          />
        </FormGroup>
        <Box
          width="25vw"
          height="50vh"
          style={{
            position: "absolute",
            top: "0%",
            left: "0%",
          }}
        >
          <img
            style={{
              position: "absolute",
              top: "15%",
              left: "15%",
              height: "43vh",
              width: "18vw",
            }}
            src={txtimg}
            alt="Text Advertisement"
          />
        </Box>
        <Box>
          <div
            style={{
              position: "absolute",
              top: "50vh",
              left: "0vw",
              backgroundColor: "#f5f5f5",
              width: "25vw",
              height: "10vh",
            }}
          >
            <p
              style={{
                fontSize: "13px",
                textAlign: "center",
                margin: "0px",
                color: "lightslategrey",
                fontWeight: "100",
                paddingTop: "4px",
              }}
            >
              Create
            </p>
            <p
              style={{
                fontSize: "19px",
                textAlign: "center",
                margin: "4px",
                color: "black",
                marginLeft: "6px",
                fontWeight: 700,
              }}
            >
              Text Ad
            </p>
          </div>
        </Box>
      </div>
      <div
        onClick={handleCh2Change}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          position: "absolute",
          top: "12%",
          left: "54%",
          width: "25vw",
          backgroundColor: "white",
          height: "60vh",
          boxShadow: "2px 2px 2px 2px rgba(0, 0, 0, 0.2)",
          cursor: "pointer",
          borderRadius: "6px",
        }}
      >
        <Box
          width="25vw"
          height="50vh"
          style={{
            position: "absolute",
            top: "0%",
            left: "0%",
          }}
        >
          <FormGroup>
            <FormControlLabel
              style={{ position: "absolute", top: "1%", left: "4%" }}
              control={<Checkbox checked={chtwo} onChange={handleCh2Change} />}
            />
          </FormGroup>
          <img
            style={{
              position: "absolute",
              top: "15%",
              left: "15%",
              height: "43vh",
              width: "18vw",
            }}
            src={mediaimg}
            alt="Text Advertisement"
          />
        </Box>
        <Box bgcolor={grey}>
          <div
            style={{
              position: "absolute",
              top: "50vh",
              left: "0vw",
              backgroundColor: "#f5f5f5",
              width: "25vw",
              height: "10vh",
            }}
          >
            <p
              style={{
                fontSize: "13px",
                textAlign: "center",
                margin: "0px",
                color: "lightslategrey",
                fontWeight: "100",
                paddingTop: "4px",
              }}
            >
              Create
            </p>
            <p
              style={{
                fontSize: "19px",
                textAlign: "center",
                margin: "4px",
                color: "black",
                marginLeft: "6px",
                fontWeight: 700,
              }}
            >
              Media Ad
            </p>
          </div>
        </Box>
      </div>
      {chone && chtwo && (
        <Link to="/mediaad">
          <Button
            sx={{
              width: "10%",
              position: "absolute",
              top: "90%",
              left: "89%",

              textTransform: "capitalize",
              fontWeight: "700",
            }}
            variant="contained"
          >
            Next
          </Button>
        </Link>
      )}
      {!chone && !chtwo && (
        <Button
          sx={{
            width: "10%",
            position: "absolute",
            top: "90%",
            left: "89%",
            textTransform: "capitalize",
            fontWeight: "700",
          }}
          variant="contained"
        >
          Next
        </Button>
      )}
      {chone && !chtwo && (
        <Link to="/textad">
          <Button
            sx={{
              width: "10%",
              position: "absolute",
              top: "90%",
              left: "89%",
              textTransform: "capitalize",
              fontWeight: "700",
            }}
            variant="contained"
          >
            Next
          </Button>
        </Link>
      )}
      {!chone && chtwo && (
        <Link to="/mediaad">
          <Button
            sx={{
              width: "10%",
              position: "absolute",
              top: "90%",
              left: "89%",
              textTransform: "capitalize",
              fontWeight: "700",
            }}
            variant="contained"
          >
            Next
          </Button>
        </Link>
      )}
    </Grid>
  );
};

export default CreateAds;
