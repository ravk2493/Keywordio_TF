import { useState } from "react";
import { useEffect } from "react";
import "../StlSheets/custom.css";
import { Dialog, DialogContent, DialogContentText } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { useNavigate } from "react-router-dom";

const Submit = () => {
  const [open, setOpen] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    // After 1 second, navigate back to the homepage
    const timeout = setTimeout(() => {
      navigate("/createads");
    }, 600);

    return () => clearTimeout(timeout);
  }, [navigate]);

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        sx={{
          width: "100%",
          height: "100%",
          marginTop: "10px",
          boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.2)",
        }}
      >
        <CheckCircleIcon
          sx={{
            color: "dodgerblue",
            position: "absolute",
            top: "25%",
            left: "44%",
            fontSize: "2.5em",
          }}
        />
        <DialogContent>
          <DialogContentText sx={{ fontSize: "1.5em" }}>
            Submitted
          </DialogContentText>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Submit;
