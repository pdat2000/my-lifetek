import { Box, Stepper, Step, StepLabel } from "@mui/material";
import { useState } from "react";

const steps = [
  "Công việc mới",
  "Đang thực hiện",
  "Đã hoàn thành",
  "Chậm tiến độ",
  "Công việc hủy",
  "Không thực hiện",
];
const StepperUi = () => {
  const [activeStep, setActiveStep] = useState(0);

  const handleClickStep = (e) => {
    const name = e.target.innerText;
    const index = steps.findIndex((step) => step.includes(name));
    if (index >= 0) {
      setActiveStep(index);
    }
  };

  return (
    <Box sx={{ width: "100%", padding: "25px 0" }}>
      <Stepper activeStep={activeStep}>
        {steps.map((label) => {
          const labelProps = {};
          return (
            <Step key={label}>
              <StepLabel {...labelProps} onClick={handleClickStep}>
                {label}
              </StepLabel>
            </Step>
          );
        })}
      </Stepper>
    </Box>
  );
};

export default StepperUi;
