import React, { PureComponent } from "react";
import { Autocomplete, TextField } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import CloseIcon from "@mui/icons-material/Close";
import axios from "axios";

class Participant extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      ParticipantLabel: [
        "Người quản lý",
        "Người được xem",
        "Người phụ trách",
        "Người hỗ trợ",
        "Chọn nhóm phê duyệt",
        "Chọn người phê duyệt",
      ],
      option: [],
    };
  }
  async componentDidMount() {
    const url = "https://634f57204af5fdff3a7265c5.mockapi.io/api/v1/todoapp";
    try {
      const response = await axios.get(url);
      const data = response.data;
      this.setState({
        ...this.state,
        option: [...data],
      });
    } catch (error) {
      console.error(error);
    }
  }
  render() {
    return (
      <React.Fragment>
        {this.state.ParticipantLabel.map((label) => (
          <Autocomplete
            key={label}
            multiple
            id="tags-outlined"
            options={this.state.option}
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
  }
}

export default Participant;
