import { SVGProps } from 'react';

const HomeIcon = ({ ...props }: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={props.width ?? '24'}
      fill={props.fill ?? 'none'}
      viewBox={props.viewBox ?? '0 0 24 24'}
      strokeWidth={props.strokeWidth ?? 1.5}
      stroke={props.stroke ?? 'currentColor'}
      className={props.className ?? 'w-6 h-6'}
    >
      <path
        strokeLinecap='round'
        strokeLinejoin='round'
        d='M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25'
      />
    </svg>
  );
};

export { HomeIcon };
