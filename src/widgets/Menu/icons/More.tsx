import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 -4 24 10" {...props}>
      <g id="Grupo_1041" data-name="Grupo 1041" transform="translate(-6550.028 -14341.396)">
        <circle id="Elipse_42" data-name="Elipse 42" cx="1.75" cy="1.75" r="1.75" transform="translate(6550.628 14341.995)" fill="none" stroke="#9b2244" stroke-miterlimit="10" stroke-width="1.2" />
        <circle id="Elipse_43" data-name="Elipse 43" cx="1.75" cy="1.75" r="1.75" transform="translate(6558.412 14341.995)" fill="none" stroke="#9b2244" stroke-miterlimit="10" stroke-width="1.2" />
        <circle id="Elipse_44" data-name="Elipse 44" cx="1.75" cy="1.75" r="1.75" transform="translate(6566.196 14341.995)" fill="none" stroke="#9b2244" stroke-miterlimit="10" stroke-width="1.2" />
      </g>
    </Svg>

  );
};

export default Icon;
