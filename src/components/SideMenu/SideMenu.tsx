'use server';

import { HomeIcon } from '../icons/Home/HomeIcon';
import { SideMenuItem } from './SideMenuItem/SideMenuItem';
import { SettingsIcon } from '../icons/Settings/SettingsIcon';
import { NotificationBellIcon } from '../icons/NotificationBell/NotificationBellIcon';

const SideMenu = () => {
  return (
    <aside>
      <ul>
        <SideMenuItem url='/' text='Inicio' icon={<HomeIcon />} />
        <SideMenuItem
          url='/settings'
          text='Configurações'
          icon={<SettingsIcon />}
        />
        <SideMenuItem
          url='/notification'
          text='Notificações'
          icon={<NotificationBellIcon />}
        />
      </ul>
    </aside>
  );
};

export { SideMenu };
