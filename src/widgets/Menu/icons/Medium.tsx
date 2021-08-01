import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

const Icon: React.FC<SvgProps> = (props) => {
    return (

        <Svg viewBox="0 -6 23 23" {...props}>
            <g id="Grupo_1368" data-name="Grupo 1368" transform="translate(-4720.52 -14949.632)">
                <g id="Grupo_1367" data-name="Grupo 1367">
                    <circle id="Elipse_53" data-name="Elipse 53" cx="6.021" cy="6.021" r="6.021" transform="translate(4720.52 14949.632)" fill="#9b2244" />
                    <ellipse id="Elipse_54" data-name="Elipse 54" cx="2.969" cy="6.021" rx="2.969" ry="6.021" transform="translate(4733.138 14949.632)" fill="#9b2244" />
                    <ellipse id="Elipse_55" data-name="Elipse 55" cx="0.979" cy="6.021" rx="0.979" ry="6.021" transform="translate(4739.815 14949.632)" fill="#9b2244" />
                </g>
            </g>
        </Svg>
    );
};

export default Icon;
