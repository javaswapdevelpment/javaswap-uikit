import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 24 24" {...props}>
      <path id="Trazado_832" data-name="Trazado 832" d="M4531.981,13574.473l-2.855-2.636.156-3.884-3.86-.454-2.157-3.233-3.389,1.9-3.646-1.348-1.623,3.53-3.743,1.052.762,3.811-2.41,3.051,2.857,2.636-.157,3.884,3.861.454,2.155,3.233,3.391-1.9,3.644,1.349,1.625-3.531,3.742-1.052-.761-3.811Zm-13.364,6.033-5.111-4.444,1.417-1.631,3.6,3.137,7.006-6.881,1.513,1.542Z" transform="translate(-4509.216 -13564.266)" fill="#d86d25"/>
    </Svg>
  );
};

export default Icon;
