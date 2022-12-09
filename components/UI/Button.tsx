import Link from 'next/link';
import React from 'react';
import classes from './styles/button.module.css';

type ButtonProps = {
  link?: string;
  onClick?: (params?: any) => any;
  children: React.ReactNode;
};

const Button: React.FC<ButtonProps> = ({ children, link, onClick }) => {
  if (link) {
    return (
      <Link href={link} className={classes.btn}>
        {' '}
        {children}
      </Link>
    );
  }
  return (
    <button className={classes.btn} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
