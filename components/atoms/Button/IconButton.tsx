import { Button } from 'antd';
import { NodeElement } from 'rc-tree/lib/interface';
import React from 'react';

interface ButtonProps {
  icon?: NodeElement;
  text: string;
  handleClick?: () => void;
}

export default function IconButton({ icon, text, handleClick }: ButtonProps) {
  return (
    <Button icon={icon} onClick={handleClick}>
      {text}
    </Button>
  );
}
