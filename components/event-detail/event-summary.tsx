import React from 'react';
import classes from './styles/event-summary.module.css';

type EventSummaryProps = {
  title: string;
};

const EventSummary: React.FC<EventSummaryProps> = (props) => {
  const { title } = props;

  return (
    <section className={classes.summary}>
      <h1>{title}</h1>
    </section>
  );
};

export default EventSummary;
