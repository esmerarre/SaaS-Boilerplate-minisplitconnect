import { AppConfig } from '@/utils/AppConfig';

export const Logo = (props: {
  isTextHidden?: boolean;
}) => (
  <div className="flex items-center text-xl font-semibold">
    <svg
      className="mr-1 size-8"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 32 32"
      fill="none"
    >
      {/*
        Path syntax legend:
        - M x y : Move to (x,y) without drawing
        - C x1 y1 x2 y2 x y : Cubic Bezier curve using control points (x1,y1), (x2,y2) ending at (x,y)
      */}
      <path
        d="M2 17C10 28 18 6 30 17"
        stroke="#3B82F6"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2.5 23C10.5 31 19 11 29.5 21"
        stroke="#10B981"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
    {!props.isTextHidden && AppConfig.name}
  </div>
);
