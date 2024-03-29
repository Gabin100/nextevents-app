import React from 'react';
import classes from './styles/logistics-item.module.css';

type LogisticsItemProps = {
  icon: React.ReactElement;
  children: React.ReactNode;
};

const LogisticsItem: React.FC<LogisticsItemProps> = (props) => {
  const { icon: Icon } = props;

  return (
    <li className={classes.item}>
      <span className={classes.icon}>{Icon}</span>
      <span className={classes.content}>{props.children}</span>
    </li>
  );
};

export default LogisticsItem;
