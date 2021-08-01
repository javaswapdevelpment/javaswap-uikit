import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 80 80" {...props}>
      <defs>
        <linearGradient id="linear-gradient" x1="0.497" y1="-0.01" x2="0.503" y2="1.013" gradientUnits="objectBoundingBox">
          <stop offset="0" stop-color="#ffe88d" />
          <stop offset="0.01" stop-color="#ffe88d" />
          <stop offset="0.069" stop-color="#f5d485" />
          <stop offset="0.246" stop-color="#da9e72" />
          <stop offset="0.42" stop-color="#c37261" />
          <stop offset="0.586" stop-color="#b14f54" />
          <stop offset="0.742" stop-color="#a5364b" />
          <stop offset="0.884" stop-color="#9d2745" />
          <stop offset="1" stop-color="#9b2244" />
        </linearGradient>
        <filter id="Elipse_73" x="0" y="0" width="104" height="104" filterUnits="userSpaceOnUse">
          <feGaussianBlur stdDeviation="8" result="blur" />
          <feFlood flood-color="#ffc2c2" flood-opacity="0.502" />
          <feComposite operator="in" in2="blur" />
          <feComposite in="SourceGraphic" />
        </filter>
      </defs>
      <g id="Grupo_1780" data-name="Grupo 1780" transform="translate(-2888.973 -14080.129)">
        <g transform="matrix(1, 0, 0, 1, 2888.97, 14080.13)" filter="url(#Elipse_73)">
          <circle id="Elipse_73-2" data-name="Elipse 73" cx="28" cy="28" r="28" transform="translate(24 24)" fill="url(#linear-gradient)" />
        </g>
      </g>
      <g id="Grupo_1784" data-name="Grupo 1784" transform="translate(-2888.973 -14080.129)">
        <image id="Rectángulo_589" data-name="Rectángulo 589" width="34" height="56" transform="translate(2923.911 14106.036)" opacity="0.55" href="data:image/png;base64,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" />
        <g id="Grupo_1783" data-name="Grupo 1783">
          <path id="Trazado_1039" data-name="Trazado 1039" d="M2945.155,14112.886a.98.98,0,0,0-.713,1.085c.447,3.031-1.207,5.713-3.7,6.143a5.515,5.515,0,0,1-5.861-3.539.978.978,0,0,0-1.16-.562l-2.128.583a.98.98,0,0,0-.688,1.2,63.7,63.7,0,0,1,0,31.738.98.98,0,0,0,.688,1.2l2.212.605a.977.977,0,0,0,1.16-.562,5.507,5.507,0,0,1,5.863-3.545c2.495.435,4.145,3.116,3.7,6.149a.979.979,0,0,0,.712,1.085q1.087.3,2.176.595a1,1,0,0,0,1.226-.705,82.059,82.059,0,0,0,0-41.376,1,1,0,0,0-1.226-.705Zm2.211,19.913q-1.021,1.211-2.082,2.356a.753.753,0,0,0-.181.613q.225,1.682.375,3.385c.05.572-.477.96-.869.652q-.919-.722-1.852-1.415a1.492,1.492,0,0,0-1.6-.1q-1.011.552-2.029,1.073a.574.574,0,0,1-.765-.717q.378-1.509.691-3.039a.658.658,0,0,0-.154-.573q-1.017-1.087-2.066-2.11a.613.613,0,0,1,.292-1.038c.936-.15,1.868-.3,2.8-.464a.56.56,0,0,0,.425-.373q.544-1.469,1.027-2.988a.53.53,0,0,1,1.008-.078q.714,1.444,1.371,2.938a.57.57,0,0,0,.451.361q1.413.16,2.825.335A.733.733,0,0,1,2947.366,14132.8Z" fill="#fff" />
        </g>
      </g>
    </Svg>
  );
};

export default Icon;
