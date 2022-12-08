import Link from 'next/link';
import React from 'react';
import classes from './styles/button.module.css';

type ButtonProps = {
  link: string;
  children: React.ReactNode;
};

const Button: React.FC<ButtonProps> = ({ children, link }) => {
  return (
    <Link href={link} className={classes.btn}>
      {' '}
      {children}
    </Link>
  );
};

export default Button;
