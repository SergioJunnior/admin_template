import { ReactNode } from 'react';
import { Title } from '../Title/Title';

type HeaderProps = {
  title: string;
  subtitle: string;
  children?: ReactNode;
};

const Header = ({ title, subtitle, children }: HeaderProps) => {
  return (
    <div>
      <Title title={title} subtitle={subtitle} />
    </div>
  );
};

export { Header };
