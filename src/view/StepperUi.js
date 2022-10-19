import { Box, Stepper, Step, StepLabel } from "@mui/material";
import React, { PureComponent } from "react";

class StepperUi extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      steps: [
        "Công việc mới",
        "Đang thực hiện",
        "Đã hoàn thành",
        "Chậm tiến độ",
        "Công việc hủy",
        "Không thực hiện",
      ],
      activeStep: 0,
    };
    this.handleClickStep = this.handleClickStep.bind(this);
  }

  handleClickStep = (e) => {
    const name = e.target.innerText;
    const index = this.state.steps.findIndex((step) => step.includes(name));
    if (index >= 0) {
      this.setState({
        ...this.state,
        activeStep: index,
      });
    }
  };
  render() {
    return (
      <Box sx={{ width: "100%", padding: "25px 0" }}>
        <Stepper activeStep={this.state.activeStep}>
          {this.state.steps.map((label) => {
            const labelProps = {};
            return (
              <Step key={label}>
                <StepLabel {...labelProps} onClick={this.handleClickStep}>
                  {label}
                </StepLabel>
              </Step>
            );
          })}
        </Stepper>
      </Box>
    );
  }
}
export default StepperUi;
