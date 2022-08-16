import React from 'react';

interface ButtonProps {
  background?: string;
  text: string;
}

export default function QuickMenu({ background, text }: ButtonProps) {
  return <button className={`hover:bg-[${background}]`}>{text}</button>;
}
