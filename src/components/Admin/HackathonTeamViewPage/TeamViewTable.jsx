import React, { useEffect, useState } from "react";
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
import { useParams } from "react-router-dom";
import { BASE_API_URL } from "../../../constants/Config";
import AdminApi from "../../../apis/managers/admin";

function TeamViewTable() {
  const [teamList, setTeamList] = useState([]);

  const [page, setPage] = useState(0);
  const [userId, setUserId] = useState(0);
  const [showEvaluateModal, setShowEvaluateModal] = useState(false);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [questions, setQuestion] = useState([]);
  const [answer, setAnswer] = useState([]);
  const { hackathonId, questionId } = useParams();

  const callApi = async (hackathonId, questionId) => {
    console.log(questionId, hackathonId);
    const result = await AdminApi.fetchHackathons(hackathonId, questionId);
    setTeamList(result.data);
  };

  const onEvaluate = () => {
    callApi(hackathonId, questionId);
  };

  useEffect(() => {
    if (questionId && hackathonId) {
      callApi(hackathonId, questionId);
    }
  }, [hackathonId, questionId]);

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
                  <TableCell align="center">{team.Results.title}</TableCell>
                  <TableCell align="center">
                    <Chip
                      label={
                        team.answers.length > 0 ? "Evaluated" : "Submitted"
                      }
                      variant="filled"
                      style={{
                        backgroundColor:
                          team.answers.length > 0 ? green[100] : blue[100],
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
                          setQuestion(team.question);
                          setAnswer(team.answers);
                          setUserId(team.Results.userId);
                          console.log(team);
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
          question={questions}
          answer={answer}
          hackathonId={hackathonId}
          questionId={questionId}
          userId={userId}
          onEvaluate={onEvaluate}
        />
      )}
    </div>
  );
}

export default TeamViewTable;
