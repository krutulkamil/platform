import React from 'react';

interface IProps {
  children: React.ReactElement;
}

export default function DashboardLayout({ children }: IProps) {
  return <div>{children}</div>;
}
