import { atom } from 'recoil';
import {
    UploadOutlined,
    UserOutlined,
    VideoCameraOutlined,
  } from '@ant-design/icons';

export const menuState = atom({
  key: 'menuState',
  default: [
    {
      key: '1',
      icon: <UserOutlined />,
      label: 'nav 1',
      children: [{ label: 'item 3', key: 'submenu-item-1' }],
    },
    {
      key: '2',
      icon: <VideoCameraOutlined />,
      label: 'nav 2',
    },
    {
      key: '3',
      icon: <UploadOutlined />,
      label: 'nav 3',
    },
  ],
});
