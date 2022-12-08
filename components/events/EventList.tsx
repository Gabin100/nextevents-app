import React from 'react';
import { DUMMY_EVENTS_INTERFACE } from '../../dummy-data';
import EventItem from './EventItem';

const EventList: React.FC<{ items: DUMMY_EVENTS_INTERFACE[] }> = ({
  items,
}) => {
  return (
    <ul>
      {items.map((event) => (
        <EventItem item={event} />
      ))}
    </ul>
  );
};

export default EventList;
