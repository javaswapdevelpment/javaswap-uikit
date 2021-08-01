import React from "react";
import StyledProgress, { Bar } from "./StyledProgress";
import ProgressJavaWrapper from "./ProgressJavaWrapper";
import { ProgressJava } from "../Svg";
import { ProgressProps } from "./types";

const stepGuard = (step: number) => {
  if (step < 0) {
    return 0;
  }

  if (step > 100) {
    return 100;
  }

  return step;
};

const Progress: React.FC<ProgressProps> = ({ primaryStep = 0, secondaryStep = null, showProgressJava = false }) => {
  return (
    <StyledProgress>
      {showProgressJava && (
        <ProgressJavaWrapper style={{ left: `${stepGuard(primaryStep)}%` }}>
          <ProgressJava />
        </ProgressJavaWrapper>
      )}
      <Bar primary style={{ width: `${stepGuard(primaryStep)}%` }} />
      {secondaryStep ? <Bar style={{ width: `${stepGuard(secondaryStep)}%` }} /> : null}
    </StyledProgress>
  );
};

export default Progress;
