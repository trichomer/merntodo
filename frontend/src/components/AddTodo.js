import Tooltip from "@mui/material/Tooltip";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import styled from "@emotion/styled";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import PriorityRadioButtons from "./PriorityRadioButtons";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import FormControl from "@mui/material/FormControl";
// import { TODOS_API } from "../constants/constants";
import axios from "axios";

const StyledModal = styled(Modal)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

const UserBox = styled(Box)({
  display: "flex",
  alignItems: "center",
  marginBottom: "10px",
});

const AddTodo = ({ loggedInVigorUser, userGroups }) => {
  const [addTodoOpen, setAddTodoOpen] = useState(false);
  const [selectedPriority, setSelectedPriority] = useState("Low");
  const [selectedGroup, setSelectedGroup] = useState(false);
  const [formData, setFormData] = useState({
    todoTitle: "",
    priority: selectedPriority,
    description: "",
  });

  const { todoTitle, description, priority } = formData;

  const config = {
    headers: {
      Authorization: `Bearer ${loggedInVigorUser.token}`,
    },
  };

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleGroupChange = (e) => {
    setSelectedGroup(e.target.value);
  };

  const addTodo = async () => {
    // const response = await axios.post(TODOS_API, formData, config);
    // if (response.data) {
    //   console.log(response.data);
    // } else {
    //   console.log("failed");
    // }
  };
  userGroups ? console.log(userGroups[0].groupName) : console.log("none");

  return (
    <>
      <Tooltip
        onClick={(e) => setAddTodoOpen(true)}
        title="Add Todo"
        sx={{
          position: "fixed",
          bottom: 20,
          left: { xs: "calc(50% - 25px)", md: 30 },
        }}
      >
        <Fab color="primary" aria-label="add">
          <AddIcon />
        </Fab>
      </Tooltip>
      <StyledModal
        open={addTodoOpen}
        onClose={(e) => setAddTodoOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box width={400} height={350} bgcolor="white" p={3} borderRadius={3}>
          <Typography variant="h6" color="gray" textAlign="center">
            Add Todo
          </Typography>
          <Box>
            <UserBox>
              <Typography variant="span" fontWeight={500}>
                {loggedInVigorUser.userName}
              </Typography>
            </UserBox>
            <Box component="form" margin={1}>
              <FormControl sx={{ width: "100%" }}>
                <InputLabel id="group-label">Group</InputLabel>
                <Select
                  value={selectedGroup}
                  label="Group"
                  onChange={handleGroupChange}
                >
                  {userGroups &&
                    userGroups.map((group) => (
                      <MenuItem key={group.groupName} value={group.groupName}>
                        {group.groupName}
                      </MenuItem>
                    ))}
                </Select>
              </FormControl>
              <TextField
                sx={{ width: "100%", marginBottom: "15px" }}
                label="Todo Title"
                variant="standard"
                name="todoTitle"
                value={todoTitle}
                onChange={onChange}
              />
              <TextField
                sx={{ width: "100%", marginBottom: "15px" }}
                label="Decription"
                variant="standard"
                name="description"
                value={description}
                onChange={onChange}
              />

              <PriorityRadioButtons
                selectedPriority={selectedPriority}
                setSelectedPriority={setSelectedPriority}
              />
            </Box>
            <Box sx={{ width: "100%", textAlign: "right", marginTop: 3 }}>
              <Fab variant="extended" color="primary" onClick={() => addTodo()}>
                Submit
              </Fab>
            </Box>
          </Box>
        </Box>
      </StyledModal>
    </>
  );
};

export default AddTodo;
