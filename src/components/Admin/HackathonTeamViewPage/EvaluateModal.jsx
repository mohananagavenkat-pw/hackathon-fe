import React, { useEffect, useState } from "react";
import {
  Alert,
  Button,
  CircularProgress,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  FormControl,
  Grid,
  InputAdornment,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { Typography } from "@pwskills/rachnaui";
import Toaster from "../../Common/Toaster";
import { useParams } from "react-router-dom";
import { BASE_API_URL } from "../../../constants/Config";

function EvaluateModal({
  open,
  setOpen,
  question,
  answer,
  hackathonId,
  questionId,
  userId,
  onEvaluate,
}) {
  console.log(answer);
  const [formData, setFormData] = useState({
    questionStatus: "evaluated",
  });
  const [response, setResponse] = useState(null);
  const [isError, setIsError] = useState({ error: false, message: "" });
  const [openToaster, setOpenToaster] = useState(false);
  const [submittingResponse, setSubmittingResponse] = useState(false);
  const [values, setValues] = React.useState(["pass", "fail"]);
  const [selected, setSelected] = useState("");

  const token = localStorage.getItem("token");

  const handleClose = () => {
    setOpen(false);
  };

  const handleChange = (event) => {
    setSelected(event.target.value);
    setFormData({ ...formData, status: event.target.value });
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
    // setSubmittingResponse(true);

    // Make an API request with formData
    try {
      // Replace the following with your actual API request code
      const apiResponse = await fetch(
        `${BASE_API_URL}/admin/evaluate-hackathon/?hackathonId=${hackathonId}&questionId=${questionId}&userId=${userId}`,
        {
          method: "POST",
          body: JSON.stringify(formData),
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const responseData = await apiResponse.json();
      if (responseData) {
        setResponse(responseData);
        setSubmittingResponse(false);
        setOpenToaster(true);
        setOpen(false);
        onEvaluate();
        setIsError({ error: true, message: "success" });
      }
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
                <Typography variant="body2">
                  {question && question.length > 0 && question[0].question}
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography variant="bold">Solution</Typography>
                <Typography variant="body2">
                  {answer && answer.length > 0 && answer[0].answer}
                </Typography>
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
                    setFormData({ ...formData, points: e.target.value })
                  }
                  FormHelperTextProps={{
                    sx: {
                      color: "red",
                    },
                  }}
                />
              </Grid>
              <Grid item xs={12} display="grid" gap="10px">
                <Typography variant="bold">Result</Typography>
                <FormControl sx={{ width: "200px" }}>
                  <Select
                    value={selected}
                    onChange={handleChange}
                    inputProps={{
                      name: "result",
                      id: "age-simple",
                    }}
                    placeholder="Pass/Fail"
                  >
                    {values.map((value, index) => {
                      return <MenuItem value={value}>{value}</MenuItem>;
                    })}
                  </Select>
                </FormControl>
              </Grid>

              {!submittingResponse && (
                <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                  <Grid container justifyContent="flex-end" columnSpacing={2}>
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
