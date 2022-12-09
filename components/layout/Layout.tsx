import React from 'react';
import MainHeader from './MainHeader';

type LayoutProps = {
  children: React.ReactNode;
};

function Layout(props: LayoutProps) {
  return (
    <>
      <MainHeader />
      <main>{props.children}</main>
    </>
  );
}

export default Layout;
