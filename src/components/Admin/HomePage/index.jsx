/** @format */

import React, { useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useNavigate } from "react-router-dom";
import { Button, Avatar, Chip } from "@mui/material";
import {
  Delete,
  Edit,
  Person,
  Group,
  Assignment,
  Quiz,
  AccountTree,
  Groups,
  NoEncryption,
} from "@mui/icons-material";
import { blue, orange, red, yellow } from "@mui/material/colors";
import DialogComponent from "./DialogComponent";
import { BASE_API_URL } from "../../../constants/Config";
import { Dialog, Typography } from "@pwskills/rachnaui";
import AdminApi from "../../../apis/managers/admin";

function Homepage() {
  const [isDialogOpen, setDialogOpen] = useState(false);
  const [isRoundDialogOpen, setRoundDialogOpen] = useState(false);
  const [rounds, setRounds] = useState([
    { title: "round 1", question_id: 1 },
    { title: "round 2", question_id: 2 },
    { title: "round 3", question_id: 3 },
  ]);
  const [itemToDelete, setItemToDelete] = useState(null);
  const [itemSelected, setItemSelected] = useState(null);
  const [hackathons, setHackathons] = useState([]);
  const [apiLoading, setApiLoading] = useState(false);

  const navigate = useNavigate();

  const handleOpenDialog = () => {
    setDialogOpen(!isDialogOpen);
  };

  const getRounds = async (_id) => {
    try {
      const rounds = await AdminApi.fetchRounds("6526456012c1c19cb8f894c9");
      if (rounds) setRounds(rounds.data);
      console.log("rounds", rounds);
    } catch (err) {
      console.log(err);
    }
  };

  const createData = (
    _id,
    name,
    type,
    mode,
    submission_type,
    team_size,
    start_date,
    end_date,
    event_date
  ) => {
    return {
      _id,
      name,
      type,
      mode,
      submission_type,
      team_size,
      start_date,
      end_date,
      event_date,
    };
  };

  const handleCreateHackathon = () => {
    navigate(`/admin/create-hackathon`);
  };

  const handleEditClick = (name, _id) => {
    navigate(`/admin/${name}/${_id}`);
  };

  const handleTeamDetails = (name, _id) => {
    navigate(`/admin/hackathon/${name}/${_id}`);
  };

  const [hackathonList, setHackathonList] = useState([
    createData(
      "001",
      "Hackathon 1",
      "assignment",
      "live",
      "individual",
      "1",
      "01/01/1111",
      "01/01/1111",
      "01/01/1111"
    ),
    createData(
      "002",
      "Hackathon 2",
      "assignment",
      "practice",
      "Team",
      "2",
      "01/01/1111",
      "01/01/1111",
      "01/01/1111"
    ),
    createData(
      "003",
      "Hackathon 3",
      "test",
      "Practice",
      "Team",
      "2",
      "01/01/1111",
      "01/01/1111",
      "01/01/1111"
    ),
    createData(
      "004",
      "Hackathon 4",
      "test",
      "Practice",
      "Team",
      "2",
      "01/01/1111",
      "01/01/1111",
      "01/01/1111"
    ),
    createData(
      "005",
      "Hackathon 5",
      "project",
      "Practice",
      "individual",
      "1",
      "01/01/1111",
      "01/01/1111",
      "01/01/1111"
    ),
    createData(
      "006",
      "Hackathon 6",
      "project",
      "Practice",
      "individual",
      "1",
      "01/01/1111",
      "01/01/1111",
      "01/01/1111"
    ),
  ]);

  const fetchHackathons = () => {
    fetch(
      `${BASE_API_URL}/admin/?hackathonId=&hackathonType=&skip=1&limit=100&search`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log("result", data.data[0].mockTest);
        setHackathons(data.data[0].mockTest);
      })
      .catch((err) => {})
      .finally(() => {});
  };

  const deleteHackathons = (_id) => {
    fetch(`${BASE_API_URL}/admin/?hackathonId=${_id}`, {
      method: "DELETE",
    }).then(() => <alert message="deleted" />);
  };

  const handleDeleteHackathon = () => {
    const updatedItems = hackathonList.filter(
      (item) => item._id !== itemToDelete
    );
    setHackathonList(updatedItems);
    setItemToDelete(null);
    handleOpenDialog();
  };

  const getTimeInIST = (dateInUST) => {
    const date = new Date(dateInUST);
    const day = date.getDate();
    const month = date.toLocaleString("en-US", { month: "short" });
    const year = date.getFullYear().toString().slice(-2);
    const time = date.toLocaleString("en-US", {
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
    });

    return ` ${day} ${month} '${year} At ${time}`;
  };

  useEffect(() => {
    fetchHackathons();
  }, []);

  return (
    <div>
      <div className="flex flex-col gap-10 my-8 mx-20">
        <Button
          variant="contained"
          sx={{
            width: "fit-content",
            alignSelf: "flex-end",
          }}
          onClick={handleCreateHackathon}
        >
          Create Hackathon
        </Button>
        <TableContainer
          component={Paper}
          sx={{
            padding: "20px",
          }}
        >
          <Table aria-label="simple table">
            <TableHead>
              <TableRow
                sx={{
                  border: "solid",
                }}
              >
                <TableCell
                  sx={{
                    fontWeight: "bold",
                    border: "none",
                  }}
                >
                  Hackathon Name
                </TableCell>
                <TableCell align="center" sx={{ fontWeight: "bold" }}>
                  Hackathon Type
                </TableCell>
                <TableCell align="center" sx={{ fontWeight: "bold" }}>
                  Hackathon Mode
                </TableCell>
                <TableCell align="center" sx={{ fontWeight: "bold" }}>
                  Submission Type
                </TableCell>
                <TableCell align="center" sx={{ fontWeight: "bold" }}>
                  Team Size
                </TableCell>
                <TableCell align="center" sx={{ fontWeight: "bold" }}>
                  Start Date
                </TableCell>
                <TableCell align="center" sx={{ fontWeight: "bold" }}>
                  End Date
                </TableCell>
                <TableCell align="center" sx={{ fontWeight: "bold" }}>
                  Result Date
                </TableCell>
                {/* <TableCell align="center" sx={{ fontWeight: "bold" }}>
                  Edit
                </TableCell> */}
                <TableCell align="center" sx={{ fontWeight: "bold" }}>
                  Delete
                </TableCell>
                <TableCell
                  align="center"
                  sx={{ fontWeight: "bold", border: "none" }}
                >
                  View Team
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {hackathons.map((row, index) => (
                <TableRow
                  key={row._id}
                  sx={{
                    border: "solid",
                  }}
                >
                  <TableCell align="center">{row.title}</TableCell>
                  <TableCell align="center">{row.hackathonType}</TableCell>
                  <TableCell align="center">
                    <Chip
                      label={row.hackathonMode}
                      variant="filled"
                      style={{
                        backgroundColor:
                          row.hackathonMode === "live" ? red[100] : yellow[100],
                        color: "black",
                        width: "75px",
                      }}
                    />
                  </TableCell>
                  <TableCell align="center">{row.submissionType}</TableCell>
                  <TableCell align="center">{row.teamSize}</TableCell>
                  <TableCell align="center">
                    <Typography className=" whitespace-nowrap">
                      {getTimeInIST(row.startDate)}
                    </Typography>
                  </TableCell>
                  <TableCell align="center">
                    <Typography className=" whitespace-nowrap">
                      {getTimeInIST(row.endDate)}
                    </Typography>
                  </TableCell>
                  <TableCell align="center">
                    <Typography className=" whitespace-nowrap">
                      {" "}
                      {getTimeInIST(row.resultDate)}
                    </Typography>
                  </TableCell>
                  {/* <TableCell>
                    <div className="flex justify-center">
                      <Avatar
                        sx={{
                          backgroundColor: "#1976D2",
                          width: 40,
                          height: 40,
                          cursor: "pointer",
                        }}
                        onClick={() => {
                          handleEditClick(row.name, row._id);
                        }}
                      >
                        <Edit color="white" />
                      </Avatar>
                    </div>
                  </TableCell> */}
                  <TableCell>
                    <div className="flex justify-center">
                      <Avatar
                        sx={{
                          backgroundColor: "#1976D2",
                          width: 40,
                          height: 40,
                          cursor: "pointer",
                        }}
                        onClick={() => {
                          setItemToDelete(row._id);
                          handleOpenDialog();
                        }}
                      >
                        <Delete color="white" />
                      </Avatar>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex justify-center">
                      <Avatar
                        sx={{
                          backgroundColor: "#1976D2",
                          width: 40,
                          height: 40,
                          cursor: "pointer",
                        }}
                        onClick={() => {
                          setRoundDialogOpen(true);
                          // handleTeamDetails(row.name, row._id);
                          setItemSelected(row._id);
                          getRounds(row._id);
                        }}
                      >
                        <Groups color="white" />
                      </Avatar>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        {isDialogOpen && (
          <DialogComponent
            open={isDialogOpen}
            onClose={() => setDialogOpen(false)}
            handleDeleteHackathon={handleDeleteHackathon}
          />
        )}
      </div>
      <Dialog
        open={isRoundDialogOpen}
        closeModal={() => {
          setRoundDialogOpen(false);
        }}
        title="Rounds"
        isOutSideClick
        titleWrapperClass="border-none"
        wrapperclas="!w-fit"
      >
        <div className="flex  p-[20px] flex-nowrap gap-[20px]">
          {rounds &&
            rounds.map((round, index) => {
              return (
                <Chip
                  label={"round " + (index + 1)}
                  variant="filled"
                  style={{
                    backgroundColor: blue[100],
                    color: "black",
                    padding: "20px",
                    cursor: "pointer",
                  }}
                  onClick={() => {
                    navigate(
                      `/admin/hackathon/hackathonId/${itemSelected}/questionId/${round.questions._id}`
                    );
                  }}
                />
              );
            })}
        </div>
      </Dialog>
    </div>
  );
}

export default Homepage;
