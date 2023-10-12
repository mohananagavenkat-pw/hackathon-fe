import { Alert, IconButton, Snackbar } from "@pwskills/rachnaui";
import { Close } from "@pwskills/rachnaui/Icons";
import React from "react";

const Toaster = ({
  open,
  setOpen,
  text,
  variant,
  autoHideDuration = 3000,
  vertical = "bottom",
  horizontal = "left",
  animation = "slide",
}) => {
  return (
    <Snackbar
      open={open}
      onClose={() => setOpen(!open)}
      text=" "
      animation={animation}
      autoHideDuration={autoHideDuration}
      vertical={vertical}
      horizontal={horizontal}
    >
      <Alert
        text={text}
        variant={variant}
        className="w-full"
        action={
          <IconButton>
            <Close onClick={() => setOpen(!open)} />
          </IconButton>
        }
      />
    </Snackbar>
  );
};

export default Toaster;
