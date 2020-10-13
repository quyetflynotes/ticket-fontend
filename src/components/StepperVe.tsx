import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import DanhSachVe from './DanhSachVe';
import AddGhe from './ChairCar/AddGhe';
import DiemDonTra from './DiemDonTra';
import NhapThongTinMuaVe from './NhapThongTinMuaVe';
import Ghe from '../pages/Ghe';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
    },
    button: {
      marginRight: theme.spacing(1),
    },
    instructions: {
      marginTop: theme.spacing(1),
      marginBottom: theme.spacing(1),
    },
  }),
);

function getSteps() {
  return ['Chọn chỗ', 'Điểm đón trả', 'Nhập thông tin'];
}

function getStepContent(step: number) {
  switch (step) {
    case 0:
      return <Ghe />;
    case 1:
      return <DiemDonTra/>;
    case 2:
      return <NhapThongTinMuaVe/>;
    default:
      return 'Unknown step';
  }
}

export default function HorizontalLinearStepper() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set<number>());
  const steps = getSteps();

  const isStepOptional = (step: number) => {
    return step === 1;
  };

  const isStepSkipped = (step: number) => {
    return skipped.has(step);
  };

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleSkip = () => {
    if (!isStepOptional(activeStep)) {
      // You probably want to guard against something like this,
      // it should never occur unless someone's actively trying to break something.
      throw new Error("You can't skip a step that isn't optional.");
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped((prevSkipped) => {
      const newSkipped = new Set(prevSkipped.values());
      newSkipped.add(activeStep);
      return newSkipped;
    });
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <div className={classes.root}>
      <Stepper activeStep={activeStep}>
        {steps.map((label, index) => {
          const stepProps: { completed?: boolean } = {};
          const labelProps: { optional?: React.ReactNode } = {};

          if (isStepSkipped(index)) {
            stepProps.completed = false;
          }
          return (
            <Step key={label} {...stepProps}>
              <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      <div>
        {activeStep === steps.length ? (
          <div>
            <h3 className="text-center">Bạn đã đặt chỗ thành công</h3>
            <Button onClick={handleReset} className={classes.button}>
              Reset
            </Button>
          </div>
        ) : (
            <div>
              <Typography className={classes.instructions}>{getStepContent(activeStep)}</Typography>
              <div className="footer-thanhToan">
                <div className="footer-right">
                  <button disabled={activeStep === 0} onClick={handleBack} className="btn btn-outline-primary">
                    Quay lại
                  </button>
                  <div>
                    Ghế: &nbsp;
                  <div className="footer-total">
                      B1
                  </div>
                  </div>
                </div>
                <div className="footer-right">
                  Tổng cộng: &nbsp;
                  <div className="footer-total">
                    200,000 đ
                  </div>
                  <button
                    onClick={handleNext}
                    className="btn btn-primary"
                  >
                    {activeStep === steps.length - 1 ? 'Đặt chỗ' : 'Tiếp tục'}
                  </button>
                </div>

              </div>
            </div>
          )}
      </div>
    </div>
  );
}
