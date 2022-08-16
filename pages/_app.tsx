import '../styles/globals.css';
import 'antd/dist/antd.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { ImFloppyDisk } from 'react-icons/im';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
  DownOutlined,
  SearchOutlined,
  PlusOutlined,
  SaveOutlined,
  SaveTwoTone,
  DeleteOutlined,
  CloseOutlined,
  PrinterOutlined,
  DownloadOutlined,
} from '@ant-design/icons';
import { Layout, Dropdown, Menu, Divider, Button } from 'antd';
import React, { useState } from 'react';
import IconButton from 'components/atoms/Button/IconButton';
import MainActionButtons from 'components/modules/MainActionButtons';
import MainQuickMenu from 'components/modules/MainQuickMenu';

const { Header, Sider, Content } = Layout;

function MyApp({ Component, pageProps }: AppProps) {
  const [collapsed, setCollapsed] = useState(true);

  const menu = (
    <Menu
      items={[
        {
          label: '로그아웃',
          key: 1,
        },
      ]}
    />
  );

  return (
    <div>
      <Head>
        <title>MES</title>
      </Head>
      <Layout>
        <Sider
          trigger={null}
          collapsible
          collapsed={collapsed}
          className={`min-h-screen ${
            collapsed ? '' : 'min-w-[300px] max-w-[300px]'
          }`}
        >
          <div className="logo" />
          <Menu
            className="sticky top-0"
            theme="dark"
            mode="inline"
            defaultSelectedKeys={['1']}
            onClick={() => setCollapsed(true)}
            items={[
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
            ]}
          />
        </Sider>
        <Layout className="site-layout">
          <div className="sticky top-0">
            <Header
              className="sticky top-0 flex site-layout-background h-[40px] leading-[40px]"
              style={{ padding: 0 }}
            >
              {React.createElement(
                collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
                {
                  className: 'trigger self-center flex-none',
                  onClick: () => setCollapsed(!collapsed),
                },
              )}
              <span className="font-bold flex-none">Samjeong MES</span>
              <Dropdown.Button
                icon={<DownOutlined />}
                overlay={menu}
                className="self-center flex-1 justify-end mr-4"
              >
                홍길동님
              </Dropdown.Button>
            </Header>
            <MainQuickMenu />
            <MainActionButtons />
          </div>
          <Content className="site-layout-background mt-2 p-3">
            <React.StrictMode>
              <Component {...pageProps} />
            </React.StrictMode>
          </Content>
        </Layout>
      </Layout>
    </div>
  );
}

export default MyApp;
