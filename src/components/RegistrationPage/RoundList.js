/** @format */

import { Radio } from "@pwskills/rachnaui";
import React, { useEffect } from "react";
import useHackathon from "../../hooks/app/useHackathon";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import DescriptionRoundedIcon from '@mui/icons-material/DescriptionRounded';
import { Divider } from '@mui/material'
import Typography from "@mui/material/Typography"
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import Input from '@mui/material/Input'
import HackathonApi from "../../apis/managers/hackathonPageApi";
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};


const RounderList = () => {
  const { roundList, getRoundList } = useHackathon();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  console.log(roundList, "this is round list")
  useEffect(() => {
    getRoundList('6526456012c1c19cb8f894c9')
  }, [])
  const submit = async () => {
    const submit = await HackathonApi.submitHackathon()
    setOpen(false)
  }
  return (
    <div className="flex flex-col">
      <div>
        <Typography variant="bold" component="body-small">
          Hackathon Rounds
        </Typography>
        <div className="flex">
          <CheckCircleIcon color="success" />
          <Typography className="ml-2">Registration</Typography>
        </div>
        {roundList?.map((val) => {
          return (
            <div>

              <div style={{ marginTop: 10, marginBottom: 10 }}><Divider /></div>
              <DescriptionRoundedIcon color="disabled" /> {val?.questions?.roundDetails}
              <Button onClick={handleOpen}>Submit </Button>
            </div>
          )
        })}
      </div>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-title"
        aria-describedby="modal-desc"
        // open={open}
        // onClose={() => setOpen(false)}
        sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
      // aria-labelledby="modal-modal-title"
      // aria-describedby="modal-modal-description"
      >


        <Box sx={style}>
          <Typography > Project Link  </Typography>
          <Input placeholder="Please Link Here" variant="plain" fullWidth />
          <div className="mt-7"></div>
          <Typography className=" mb-2"> Support your submission with a video </Typography>
          <Input placeholder="Youtube URL " variant="plain" fullWidth />
          <div className="mt-7"></div>
          <div >
            <Typography color="error" fontSize="body-sm">Once Submitted you can't edit</Typography>
            <div><Button variant="outlined" sx={{ mt: 1 }} onClick={submit}>Submit</Button>
            </div>
          </div>

        </Box>
        {/* */}
        {/* </ModalDialog> */}
      </Modal>
    </div >
  );
};

export default RounderList;
