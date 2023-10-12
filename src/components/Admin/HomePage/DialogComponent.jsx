import * as React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
} from "@mui/material";

export default function DialogComponent({
  open,
  onClose,
  handleDeleteHackathon,
}) {
  const styles = {
    dialog: {
      minWidth: "500px",
    },
  };
  return (
    <Dialog open={open} onClose={onClose} PaperProps={{ style: styles.dialog }}>
      <DialogTitle>Delete hackathon</DialogTitle>
      <DialogContent>
        <p>Are you sure you want to delete hackathon?</p>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleDeleteHackathon} color="primary">
          Yes
        </Button>
        <Button onClick={onClose} color="primary">
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
}
