import React from 'react';
import { DUMMY_EVENTS_INTERFACE } from '../../dummy-data';
import EventItem from './EventItem';
import classes from './styles/event-list.module.css';

const EventList: React.FC<{ items: DUMMY_EVENTS_INTERFACE[] }> = ({
  items,
}) => {
  return (
    <ul className={classes.list}>
      {items.map((event) => (
        <EventItem key={event.id} item={event} />
      ))}
    </ul>
  );
};

export default EventList;
