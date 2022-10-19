import {
  Typography,
  Grid,
  TextField,
  Box,
  Autocomplete,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import React, { useState, useEffect } from "react";
import StepperUi from "./StepperUi";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import dayjs from "dayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import CloseIcon from "@mui/icons-material/Close";
import { Editor, EditorState } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import Participant from "./Participant";
import axios from "axios";

const Container = () => {
  const url = "https://634f57204af5fdff3a7265c5.mockapi.io/api/v1/todoapp";
  const [value, setValue] = useState(dayjs("2014-08-18T21:11:54"));
  const [work, setWork] = useState("");
  const [state, setState] = useState([]);

  const handleChange = (newValue) => {
    setValue(newValue);
  };
  const handleChangeForm = (event) => {
    setWork(event.target.value);
  };

  useEffect(() => {
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
    <Typography component="div" sx={{ padding: "0 80px" }}>
      <StepperUi></StepperUi>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Typography
            component="h3"
            sx={{ fontSize: "20px", padding: "20px 0" }}
          >
            Thông tin chính
          </Typography>
          <TextField
            id="outlined-basic"
            label="TÊN CV/DA"
            variant="outlined"
            sx={{ display: "flex", marginBottom: "20px" }}
            required
          />
          <Box
            display={"flex"}
            justifyContent="space-between"
            marginBottom={"20px"}
          >
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DateTimePicker
                label="NGÀY BẮT ĐẦU"
                value={value}
                onChange={handleChange}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    style={{ width: "calc(50% - 5px)" }}
                    required
                  />
                )}
                ampm={false}
              />
            </LocalizationProvider>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DateTimePicker
                label="NGÀY KẾT THÚC"
                value={value}
                onChange={handleChange}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    style={{ width: "calc(50% - 5px)" }}
                    required
                  />
                )}
                ampm={false}
              />
            </LocalizationProvider>
          </Box>
          <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={state}
            sx={{ marginBottom: "20px" }}
            renderInput={(params) => (
              <TextField {...params} label="KHÁCH HÀNG" />
            )}
            clearIcon={<CloseIcon style={{ fontSize: "20px" }} />}
            popupIcon={<KeyboardArrowDownIcon style={{ fontSize: "20px" }} />}
          />
          <FormControl fullWidth style={{ marginBottom: "20px" }}>
            <InputLabel id="demo-simple-select-label">
              LOẠI CÔNG VIỆC
            </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={work}
              defaultValue={"Phản ánh"}
              label="LOAI CONG VIEC"
              onChange={handleChangeForm}
            >
              {state.map((item) => (
                <MenuItem value={item.label} key={item.label}>
                  {item.label}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <FormControl fullWidth style={{ marginBottom: "20px" }}>
            <InputLabel id="demo-simple-select-label">ĐỘ ƯU TIÊN</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={work}
              defaultValue={"Trung bình"}
              label="ĐỘ ƯU TIÊN"
              onChange={handleChangeForm}
            >
              {state.map((item) => (
                <MenuItem value={item.label} key={item.label}>
                  {item.label}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <TextField
            id="outlined-basic"
            label="MÔ TẢ"
            variant="outlined"
            sx={{ display: "flex", marginBottom: "20px" }}
          />
        </Grid>
        <Grid item xs={6}>
          <Typography
            component="h3"
            sx={{ fontSize: "20px", padding: "20px 0" }}
          >
            Thông tin người tham gia
          </Typography>
          <Participant></Participant>

          <Typography
            component="h3"
            sx={{
              fontSize: "18px",
              paddingBottom: "20px",
              textTransform: "uppercase",
            }}
          >
            Mô tả chi tiết
          </Typography>
          <Editor
            editorState={EditorState}
            toolbarClassName="toolbarClassName"
            wrapperClassName="wrapperClassName"
            editorClassName="editorClassName"
          />
        </Grid>
      </Grid>
    </Typography>
  );
};

export default Container;
