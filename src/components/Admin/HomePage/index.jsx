/** @format */

import React, { useState } from "react";
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
} from "@mui/icons-material";
import { blue, orange, red, yellow } from "@mui/material/colors";
import DialogComponent from "./DialogComponent";

function Homepage() {
  const [isDialogOpen, setDialogOpen] = useState(false);
  const [itemToDelete, setItemToDelete] = useState(null);
  const navigate = useNavigate();

  const handleOpenDialog = () => {
    setDialogOpen(!isDialogOpen);
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

  const handleDeleteHackathon = () => {
    const updatedItems = hackathonList.filter(
      (item) => item._id !== itemToDelete
    );
    setHackathonList(updatedItems);
    setItemToDelete(null);
    handleOpenDialog();
  };

  return (
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
            <TableRow>
              <TableCell sx={{ fontWeight: "bold" }}>Hackathon Name</TableCell>
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
                Hackathon Date
              </TableCell>
              <TableCell align="center" sx={{ fontWeight: "bold" }}>
                Edit
              </TableCell>
              <TableCell align="center" sx={{ fontWeight: "bold" }}>
                Delete
              </TableCell>
              <TableCell align="center" sx={{ fontWeight: "bold" }}>
                View Team
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {hackathonList.map((row, index) => (
              <TableRow
                key={row._id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell align="center">{row.name}</TableCell>
                <TableCell
                  align="center"
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    gap: "10px",
                  }}
                >
                  <Avatar>
                    {row.type === "project" ? (
                      <AccountTree />
                    ) : row.type === "test" ? (
                      <Quiz />
                    ) : (
                      <Assignment />
                    )}
                  </Avatar>
                  {row.type}
                </TableCell>
                <TableCell align="center">
                  <Chip
                    label={row.mode}
                    variant="filled"
                    style={{
                      backgroundColor:
                        row.mode === "live" ? red[100] : yellow[100],
                      color: "black",
                      width: "75px",
                    }}
                  />
                </TableCell>
                <TableCell
                  align="center"
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    gap: "10px",
                  }}
                >
                  <Avatar>
                    {row.submission_type === "individual" ? (
                      <Person />
                    ) : (
                      <Group />
                    )}
                  </Avatar>
                  {row.submission_type}
                </TableCell>
                <TableCell align="center">{row.team_size}</TableCell>
                <TableCell align="center">{row.start_date}</TableCell>
                <TableCell align="center">{row.end_date}</TableCell>
                <TableCell align="center">{row.event_date}</TableCell>
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
                        handleEditClick(row.name, row._id);
                      }}
                    >
                      <Edit color="white" />
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
                        handleTeamDetails(row.name, row._id);
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
  );
}

export default Homepage;
