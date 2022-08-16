import { Content } from 'antd/lib/layout/layout';
import QuickMenu from 'components/atoms/Button/QuickMenu';
import React from 'react';

export default function MainQuickMenu() {
  return (
    <Content
      className="
        site-layout-background
        h-auto
        flex-none
        bg-[#001529]
        text-white
        children:p-3
        children:w-[70px]
        children:h-[70px]"
    >
      <QuickMenu background="#2c3b5e" text="test" />
      <QuickMenu background="#2c3b5e" text="test" />
      <QuickMenu background="#2c3b5e" text="test" />
      <QuickMenu background="#2c3b5e" text="test" />
      <QuickMenu background="#2c3b5e" text="test" />
      <QuickMenu background="#2c3b5e" text="test" />
      <QuickMenu background="#2c3b5e" text="test" />
      <QuickMenu background="#2c3b5e" text="test" />
      <QuickMenu background="#2c3b5e" text="test" />
    </Content>
  );
}
