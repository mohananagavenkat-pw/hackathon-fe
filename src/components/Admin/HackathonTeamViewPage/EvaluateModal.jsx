import React, { useState } from "react";
import {
  Alert,
  Button,
  CircularProgress,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Grid,
  InputAdornment,
  TextField,
} from "@mui/material";
import { Typography } from "@pwskills/rachnaui";
import Toaster from "../../Common/Toaster";

function EvaluateModal({ open, setOpen }) {
  const [formData, setFormData] = useState({
    question: "Question 1 is this one",
    answer: "answer to question 1 is this one",
  });
  const [response, setResponse] = useState(null);
  const [isError, setIsError] = useState({ error: false, message: "" });
  const [openToaster, setOpenToaster] = useState(false);
  const [submittingResponse, setSubmittingResponse] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const handleReset = () => {
    setFormData({
      ...formData,
      marks: " ",
      feedback: " ",
    });
    console.log(formData);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmittingResponse(true);
    // Make an API request with formData
    try {
      // Replace the following with your actual API request code
      //   const apiResponse = await fetch("your-api-endpoint", {
      //     method: "POST",
      //     body: JSON.stringify(formData),
      //     headers: {
      //       "Content-Type": "application/json",
      //     },
      //   });

      //   const responseData = await apiResponse.json();
      setTimeout(() => {
        setResponse("responseData");
        setSubmittingResponse(false);
        setOpenToaster(true);
        setIsError({ error: true, message: "success" });
      }, 2000);
    } catch (error) {
      console.error(error);
      setOpenToaster(true);
      setIsError({ error: true, message: "failed" });
    }
  };

  return (
    <div>
      <Dialog open={open} onClose={handleClose}>
        <Typography variant="bold" component="h3" className="px-6 py-5">
          Evaluate Submission
        </Typography>

        {response && !submittingResponse && (
          <Toaster
            open={openToaster}
            setOpen={setOpenToaster}
            text={isError.message}
            variant={isError.error ? "error" : "success"}
          />
        )}
        <DialogContent>
          <form onSubmit={handleSubmit}>
            <Grid container rowGap={2} spacing={2}>
              <Grid item xs={12}>
                <Typography variant="bold">Question</Typography>
                <Typography variant="body2">this is a question</Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography variant="bold">Solution</Typography>
                <Typography variant="body2">this is a Solution</Typography>
              </Grid>

              <Grid item xs={12} display="grid" gap="10px">
                <Typography variant="bold">Marks</Typography>
                <TextField
                  fullWidth
                  value={formData.marks}
                  id="outlined-basic"
                  placeholder="Enter marks obtained out of 10"
                  variant="outlined"
                  type="number"
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="start">{`/10`}</InputAdornment>
                    ),
                  }}
                  helperText={
                    formData.marks > 10
                      ? "Enter marks below or equal to 10"
                      : ""
                  }
                  onChange={(e) =>
                    setFormData({ ...formData, marks: e.target.value })
                  }
                  FormHelperTextProps={{
                    sx: {
                      color: "red",
                    },
                  }}
                />
              </Grid>
              <Grid item xs={12} display="grid" gap="10px">
                <Typography variant="bold">Feedbacks</Typography>
                <TextField
                  value={formData.feedback}
                  placeholder="Enter the feedback.."
                  multiline
                  rows={3}
                  maxRows={6}
                  onChange={(e) =>
                    setFormData({ ...formData, feedback: e.target.value })
                  }
                />
              </Grid>
              {!submittingResponse && (
                <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                  <Grid container justifyContent="flex-end" columnSpacing={2}>
                    <Grid item>
                      <Button variant="outlined" onClick={handleReset}>
                        Reset
                      </Button>
                    </Grid>
                    <Grid item>
                      <Button type="submit" variant="contained" autoFocus>
                        Evaluate
                      </Button>
                    </Grid>
                  </Grid>
                </Grid>
              )}
              <Grid item xs={12} display="grid" gap="4px">
                {submittingResponse && (
                  <div className="flex flex-col justify-center items-center my-5 gap-4">
                    <DialogContentText>Submitting Response!!</DialogContentText>
                    <CircularProgress disableShrink />
                  </div>
                )}
              </Grid>
            </Grid>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default EvaluateModal;
