import { Autocomplete, TextField } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import CloseIcon from "@mui/icons-material/Close";
import React, { useEffect, useState } from "react";
import axios from "axios";

const Participant = () => {
  const [state, setState] = useState([]);
  const ParticipantLabel = [
    "Người quản lý",
    "Người được xem",
    "Người phụ trách",
    "Người hỗ trợ",
    "Chọn nhóm phê duyệt",
    "Chọn người phê duyệt",
  ];

  useEffect(() => {
    const url = "https://634f57204af5fdff3a7265c5.mockapi.io/api/v1/todoapp";
    async function getUser() {
      try {
        const response = await axios.get(url);
        const data = response.data;
        setState(data);
      } catch (error) {
        console.error(error);
      }
    }
    getUser();
  }, []);
  return (
    <React.Fragment>
      {ParticipantLabel.map((label) => (
        <Autocomplete
          key={label}
          multiple
          id="tags-outlined"
          options={state}
          getOptionLabel={(option) => option.label}
          filterSelectedOptions
          renderInput={(params) => (
            <TextField
              {...params}
              label={label.toUpperCase()}
              placeholder="Tìm kiếm"
            />
          )}
          sx={{ marginBottom: "20px" }}
          clearIcon={<CloseIcon style={{ fontSize: "20px" }} />}
          popupIcon={<KeyboardArrowDownIcon style={{ fontSize: "20px" }} />}
        />
      ))}
    </React.Fragment>
  );
};

export default Participant;
