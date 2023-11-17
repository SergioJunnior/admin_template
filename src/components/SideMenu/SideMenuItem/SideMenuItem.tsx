'use client';

import { useRouter } from 'next/navigation';
import { Tooltip } from '@mui/material';

type SideMenuItemProps = {
  url: string;
  text: string;
  icon: any;
};

const SideMenuItem = ({ url, text, icon }: SideMenuItemProps) => {
  const router = useRouter();
  return (
    <li
      onClick={() => router.push(url)}
      className={`
    hover:bg-gray-100`}
    >
      <div className={`flex flex-col justify-center items-center w-20 h-20`}>
        <Tooltip title={text}>{icon}</Tooltip>
      </div>
    </li>
  );
};

export { SideMenuItem };
