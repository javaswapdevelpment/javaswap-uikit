import React from "react";
import styled, { keyframes } from "styled-components";
import { SpinnerProps } from "./types";
import { Svg, SvgProps, ProgressJava } from "../Svg";

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const SpinnerIcon: React.FC<SvgProps> = (props) => {
  return (
      <ProgressJava viewBox="0 0 58 58" {...props} />
  );
};

const Container = styled.div`
  position: relative;
`;

const RotatingPancakeIcon = styled(SpinnerIcon)`
  position: absolute;
  top: 0;
  left: 0;
  animation: ${rotate} 2s linear infinite;
  transform: translate3d(0, 0, 0);
`;

const Spinner: React.FC<SpinnerProps> = ({ size = 128 }) => {
  return (
    <Container>
      <RotatingPancakeIcon width={`${size * 0.5}px`} />
    </Container>
  );
};

export default Spinner;
