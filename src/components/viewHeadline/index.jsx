import { useState } from "react";

import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

import view from "./images/viewHeadline.png";

import "./styles.css";

export function PopoverButttonView() {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <div className="popoverButton">
      <Button
        aria-describedby={id}
        variant="text"
        onClick={handleClick}
        style={{
          borderRadius: 35,
        }}
      >
        <img src={view} className="viewHeadLineimg" />
      </Button>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <Typography fontFamily={"Nunito"} fontSize={18} sx={{ p: 2 }}>
          <div className="textView">
            Digite um número decimal inteiro para converter em número binário
          </div>
        </Typography>
      </Popover>
    </div>
  );
}
