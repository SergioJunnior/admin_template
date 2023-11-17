import { ReactNode } from 'react';
import { SideMenu } from '../SideMenu/SideMenu';
import { Header } from '../Header/Header';

type LayoutProps = {
  title: string;
  subtitle: string;
  children?: ReactNode;
};

const Layout = ({ title, subtitle, children }: LayoutProps) => {
  return (
    <div className='flex h-screen w-screen'>
      <SideMenu />
      <div className={`flex flex-col w-full p-7 bg-gray-300 dark:bg-gray-800 `}>
        <Header title={title} subtitle={subtitle} />
        <div
          className={`
       flex flex-col mt-7 
      `}
        >
          {children}
        </div>
      </div>
    </div>
  );
};

export { Layout };
