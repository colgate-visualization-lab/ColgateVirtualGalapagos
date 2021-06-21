import React from "react";
import ArrowLeft from "./ArrowLeft";
import ArrowRight from "./ArrowRight";

const YellowTail = ({ className }: { className?: string }) => (
  <>
    <defs>
      <linearGradient
        id="linear-gradient"
        x1="172.74"
        y1="233.76"
        x2="176.11"
        y2="62.42"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0.1" stopColor="#f7f7f7" />
        <stop offset="0.12" stopColor="#eef0f1" />
        <stop offset="0.21" stopColor="#bdc9cd" />
        <stop offset="0.31" stopColor="#92a7ae" />
        <stop offset="0.4" stopColor="#6f8c95" />
        <stop offset="0.5" stopColor="#547682" />
        <stop offset="0.6" stopColor="#406774" />
        <stop offset="0.7" stopColor="#355e6c" />
        <stop offset="0.8" stopColor="#315b69" />
      </linearGradient>
      <linearGradient
        id="linear-gradient-2"
        x1="31.44"
        y1="141.79"
        x2="93.79"
        y2="141.79"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0" stopColor="#ff0" />
        <stop offset="1" stopColor="#e6e6e6" />
      </linearGradient>
      <linearGradient
        id="linear-gradient-3"
        x1="189.02"
        y1="154.15"
        x2="226.24"
        y2="154.15"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0" stopColor="#557778" />
        <stop offset="0.17" stopColor="#5d7f80" />
        <stop offset="0.44" stopColor="#749397" />
        <stop offset="0.78" stopColor="#98b5bc" />
        <stop offset="0.99" stopColor="#b3ced7" />
      </linearGradient>
    </defs>
    <g id="fishy" className={className}>
      <path
        fill="url(#linear-gradient)"
        d="M88.36,142.32s16.25-23,35.53-29.15,36.47-11.55,52-10.42a176.81,176.81,0,0,1,29.44,4.9l8.39,3.81s-1.51,24.84,5.53,32.77,32.8,41.3,32.8,41.3l7.75,5.73a7.25,7.25,0,0,0-3.66.56c-1.37.79-12,2.25-12,2.25s-6.22,5.9-18.29,9.24-9.36,3.23-14.19,3.69a110.35,110.35,0,0,1-13,.59H173.68l-34.16-4.18L111,184.64,89.46,160.09Z"
        transform="translate(-31.15 -98.73)"
      />
      <path
        fill="url(#linear-gradient-2)"
        d="M86.3,142.45S80,140.06,74.2,130.06s-17.74-22.52-17.74-22.52l-7.88-7s-7.36-4.32-8.45,1.4-3.94,20-2.82,26.19.85,23.23-2.25,31.53-3.28,21.87-3.28,21.87-2.68,5.76,6.94,1.69S68.52,169.34,71,166.66s10.88-5.44,10.88-5.44,5.12-4,6.2.94c0,0,6.54,1.43,5.61-9.91S92.5,142.17,86.3,142.45Z"
        transform="translate(-31.15 -98.73)"
      />
      <path
        fill="#a9c0b6"
        d="M88.09,162.16s.56-3.19,3.56-2.07,5.07,4.7,5.07,4.7,13,20.27,40.92,34.72c5.82,3.19,21.4,5.26,21.4,5.26s19.33,2.82,24,2.82H141.4s-12.15-1.17-15.77-3.45-29-23.5-31.93-30.68C93.7,173.45,87.15,165.91,88.09,162.16Z"
        transform="translate(-31.15 -98.73)"
      />
      <path
        fill="none"
        stroke="#000"
        strokeWidth="0.5px"
        d="M86.3,142.45s-5.06-1.13-12.1-12.39-17.74-22.52-17.74-22.52l-7.88-7s-7.32-4.23-8.45,1.4-3.38,16.9-2.82,26.19,1.41,21.4-2.25,31.53c-3,8.43-3.3,17.95-3.29,20.93a4.66,4.66,0,0,1-.22,1.48c-.4,1.21-.56,3.83,7.17,1.15,9.76-3.38,31.35-15,32.29-16.52s10.88-5.44,10.88-5.44,5.82-4.13,6.2.94,6.19,12,6.19,12,13.85,18.82,32.1,30.41c0,0,5.07,3.19,15,3s32.28,0,32.28,0h29.47a62.32,62.32,0,0,0,11.45-1.13c4.69-1.08,22-5.63,28.69-11.63a3.61,3.61,0,0,1,2-.91c2.73-.34,9.17-1.22,10.79-2.1,1.23-.68,3.62-.68,5.33-.57a7.14,7.14,0,0,0,4.51-1.22,9.62,9.62,0,0,0,3.86-4.6c1.31-3.94-5.63-8.82-5.63-8.82s-7.27-4.21-11.83-16.7c-4.49-12.3-2.49-9.56-5.25-17.09-2.47-6.7-15.77-17.45-27.22-27.21s-35.29-13.14-35.29-13.14-25.72-4.51-48.43,3-35.85,19.9-35.85,19.9S89.78,133.44,86.3,142.45Z"
        transform="translate(-31.15 -98.73)"
      />
      <path
        fill="#435f6d"
        d="M269.79,185.43c-8.82,15-23.09-3.75-23.09-3.75s-15.91-11-20.53-60.6c0,0,18.63,16,20.91,21.74s2.41,10.61,5.25,17.09,7,14.88,11.83,16.7C269.12,178.51,270.4,184.71,269.79,185.43Z"
        transform="translate(-31.15 -98.73)"
      />
      <path
        fill="url(#linear-gradient-3)"
        d="M226.05,171.17a46.49,46.49,0,0,1-10.7-15C211,146.58,203,139.63,195.08,132.5s-5.82,2.44-5.82,2.44,2.82,14.08,3.57,20.84a49.67,49.67,0,0,0,7.51,20.08c3.38,4.88,10.88,1.31,10.88,1.31a10.19,10.19,0,0,1,9.95-3.75C227.71,174.58,226.05,171.17,226.05,171.17Z"
        transform="translate(-31.15 -98.73)"
      />
      <path
        fill="#fff"
        d="M240.69,151.27s-4.13.75-4.69-4.88c0-4.32,4.69-4.13,4.69-4.13a4.42,4.42,0,0,1,4.32,4.52C245.2,151.27,242.84,151.61,240.69,151.27Z"
        transform="translate(-31.15 -98.73)"
      />
      <path
        stroke="red"
        fill="none"
        d="M245,181.68s-4.7.19-7.71-11.64l-3-11.82"
        transform="translate(-31.15 -98.73)"
      />
      <path
        fill="#406774"
        d="M243,186.56s-16.52-17.27-18.4-23.28.19-12.76,0-18.58S224,125.18,218,116.92s-8.26-4.69-8.26-4.69-1.5,18.77,1.88,25.9,5.54,18.2,8.45,24,1.31,6.57,9,13.7a125.52,125.52,0,0,0,11.45,9.76S242.76,186.51,243,186.56Z"
        transform="translate(-31.15 -98.73)"
      />
      <path
        fill="#99a1ac"
        stroke="#99a1ac"
        d="M224.47,120.25a51.1,51.1,0,0,1,9.84,22.67c2.07,13.33,2.26,15,5.36,22.15s-.67,10.89,7,17.27-3.75,4.88-3.75,4.88-24.38-23.95-18.48-33.28c0,0,.17-26.45-3.63-31.12s-4.72-10.7-7.17-10.7S218.76,113.53,224.47,120.25Z"
        transform="translate(-31.15 -98.73)"
      />
      <path
        d="M240.51,144.23s-2.44-.18-2.07,2.58,2.07,2.68,2.07,2.68,2.25.65,2.44-2.16A2.78,2.78,0,0,0,240.51,144.23Z"
        transform="translate(-31.15 -98.73)"
      />
      <path
        fill="#6f9ba4"
        d="M207,108.38s-29-5.54-44.56-2.35-31.72,7.89-43,16.33c-10.31,7.74-18,14.83-20.61,18.86a2.39,2.39,0,0,1-2,1.06l-9.93.16a.38.38,0,0,1-.35-.54c1.89-3.7,14.15-25.14,49.57-36.43C175,93.08,207,108.38,207,108.38Z"
        transform="translate(-31.15 -98.73)"
      />
      <path
        d="M85.37,151.55s-3-.19-2.54-3.09S85.37,146,85.37,146s2.15-.22,2.15,2.75S85.37,151.55,85.37,151.55Z"
        transform="translate(-31.15 -98.73)"
      />
      <path
        d="M93.72,150.43s-.38-3.57,2.63-3.19a3,3,0,0,1,2.81,3.19s.38,4-2.34,4.13S93.63,151.82,93.72,150.43Z"
        transform="translate(-31.15 -98.73)"
      />
      <path
        d="M104,150.88s-.47-4.11,2.72-4.21,2.63,4.21,2.63,4.21.28,4.71-2.16,4.52S104.14,154.62,104,150.88Z"
        transform="translate(-31.15 -98.73)"
      />
      <path
        fill="#fff"
        d="M112.68,151.56s0-3.62-2-3.86-1.32,3.18-1.32,3.18-.47,3.68,1.13,3.68S112.8,152.91,112.68,151.56Z"
        transform="translate(-31.15 -98.73)"
      />
      <path
        fill="#fff"
        d="M99.18,151s.45-3.27,2.24-3.35,2.15,3.35,2.15,3.35,0,3-1.78,3.05S99.28,152.46,99.18,151Z"
        transform="translate(-31.15 -98.73)"
      />
      <path
        fill="#fff"
        d="M92.41,149.86s-.29-2.49-1.69-2.65-2.26.49-2.35,2.18a2.58,2.58,0,0,0,2,2.82C91.65,152.32,92.3,151.63,92.41,149.86Z"
        transform="translate(-31.15 -98.73)"
      />
      <path
        d="M115.87,149.71s1.78,2.37-.19,2.53S113,149.93,115.87,149.71Z"
        transform="translate(-31.15 -98.73)"
      />
      <path
        d="M126.76,149.71s-2.26-1.09,0-2S128.82,150.12,126.76,149.71Z"
        transform="translate(-31.15 -98.73)"
      />
      <path
        d="M127.06,156.53s-2.93,1-.4,2.81S128.38,155.54,127.06,156.53Z"
        transform="translate(-31.15 -98.73)"
      />
      <path
        d="M110.43,158.87s-2.52,1.22.2,2.44C113.35,160.56,111.93,159.34,110.43,158.87Z"
        transform="translate(-31.15 -98.73)"
      />
      <path
        fill="#264341"
        d="M207,181s2.93-3.66,5.6,0-3.19,2.7-3.19,2.7A2.53,2.53,0,0,1,207,181Z"
        transform="translate(-31.15 -98.73)"
      />
    </g>
  </>
);

export const Arrow = ({
  className,
  variant,
  ...rest
}: {
  className?: string;
  onClick: React.EventHandler<any>;
  variant: "left" | "right";
}) => {
  const classes =
    className + " hover:scale-110 transform transition-normal cursor-pointer";

  return variant === "left" ? (
    <ArrowLeft {...rest} className={classes} />
  ) : (
    <ArrowRight {...rest} className={classes} />
  );
};

export default Arrow;
