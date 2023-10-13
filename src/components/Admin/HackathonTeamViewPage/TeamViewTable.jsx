import React, { useState } from "react";
import {
  Avatar,
  Button,
  Chip,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
} from "@mui/material";
import { blue, green } from "@mui/material/colors";
import { Edit } from "@mui/icons-material";
import EvaluateModal from "./EvaluateModal";

function TeamViewTable() {
  const [teamList, setTeamList] = useState([
    {
      _id: 1,
      name: "team 1",
      status: "submitted",
    },
    {
      _id: 2,
      name: "team 2",
      status: "evaluated",
    },
    {
      _id: 3,
      name: "team 3",
      status: "submitted",
    },
    {
      _id: 4,
      name: "team 4",
      status: "evaluated",
    },
    {
      _id: 5,
      name: "team 5",
      status: "evaluated",
    },
    {
      _id: 6,
      name: "team 6",
      status: "evaluated",
    },
    {
      _id: 7,
      name: "team 7",
      status: "submitted",
    },
    {
      _id: 8,
      name: "team 8",
      status: "evaluated",
    },
    {
      _id: 9,
      name: "team 9",
      status: "submitted",
    },
    {
      _id: 10,
      name: "team 10",
      status: "evaluated",
    },
    {
      _id: 11,
      name: "team 11",
      status: "evaluated",
    },
    {
      _id: 12,
      name: "team 12",
      status: "evaluated",
    },
    {
      _id: 13,
      name: "team 13",
      status: "submitted",
    },
    {
      _id: 14,
      name: "team 14",
      status: "evaluated",
    },
    {
      _id: 15,
      name: "team 15",
      status: "evaluated",
    },
    {
      _id: 16,
      name: "team 16",
      status: "evaluated",
    },
  ]);

  const [page, setPage] = useState(0);
  const [showEvaluateModal, setShowEvaluateModal] = useState(false);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const CustomPaginationActions = () => {
    return (
      <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count={teamList.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
        labelRowsPerPage="Items per page:"
      />
    );
  };

  const startIndex = page * rowsPerPage;
  const endIndex = startIndex + rowsPerPage;

  return (
    <div>
      <Paper>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell
                  width="10%"
                  align="center"
                  sx={{ fontWeight: "bold" }}
                >
                  Number
                </TableCell>
                <TableCell align="center" sx={{ fontWeight: "bold" }}>
                  Name
                </TableCell>
                <TableCell align="center" sx={{ fontWeight: "bold" }}>
                  Status
                </TableCell>
                <TableCell align="center" sx={{ fontWeight: "bold" }}>
                  Evaluate
                </TableCell>
                {/* Other table headers */}
              </TableRow>
            </TableHead>
            <TableBody>
              {teamList.slice(startIndex, endIndex).map((team, index) => (
                <TableRow
                  key={team._id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell align="center">{startIndex + index + 1}</TableCell>
                  <TableCell align="center">{team.name}</TableCell>
                  <TableCell align="center">
                    <Chip
                      label={team.status}
                      variant="filled"
                      style={{
                        backgroundColor:
                          team.status === "submitted" ? green[100] : blue[100],
                        color: "black",
                        padding: "20px",
                      }}
                    />
                  </TableCell>
                  <TableCell align="center">
                    <div className="flex justify-center">
                      <Button
                        variant="outlined"
                        onClick={() => {
                          setShowEvaluateModal(true);
                        }}
                        className="flex justify-center !bg-blue-50"
                      >
                        Evaluate Submission
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <CustomPaginationActions />
      </Paper>
      {showEvaluateModal && (
        <EvaluateModal
          open={showEvaluateModal}
          setOpen={setShowEvaluateModal}
        />
      )}
    </div>
  );
}

export default TeamViewTable;
