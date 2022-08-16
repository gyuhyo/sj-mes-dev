import { Content } from 'antd/lib/layout/layout';
import * as Icons from '@ant-design/icons';
import React from 'react';
import IconButton from 'components/atoms/Button/IconButton';

export default function MainActionButtons() {
  const handleClick = () => {
    alert('test');
  };
  return (
    <Content
      className="
        h-auto
        flex-none
        shadow-md
        bg-[#f0f0f0]
        p-2
        text-right
        children:align-text-top
        children:mr-2
        children:rounded-sm
        children:border-1.5
        children:font-bold"
    >
      <IconButton
        icon={<Icons.SearchOutlined />}
        text="조회"
        handleClick={handleClick}
      />
      <IconButton icon={<Icons.PlusOutlined />} text="추가" />
      <IconButton icon={<Icons.SaveOutlined />} text="저장" />
      <IconButton icon={<Icons.DeleteOutlined />} text="삭제" />
      <IconButton icon={<Icons.CloseOutlined />} text="취소" />
      <IconButton icon={<Icons.PrinterOutlined />} text="인쇄" />
      <IconButton icon={<Icons.UploadOutlined />} text="엑셀 Upload" />
      <IconButton icon={<Icons.DownloadOutlined />} text="엑셀 Download" />
    </Content>
  );
}
