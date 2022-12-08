import Link from 'next/link';
import React from 'react';
import { DUMMY_EVENTS_INTERFACE } from '../../dummy-data';
import classes from './styles/event-item.module.css';

const EventItem: React.FC<{ item: DUMMY_EVENTS_INTERFACE }> = ({ item }) => {
  const humanReadableDate = new Date(item.date).toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
  const formattedAddress = item.location.replace(', ', '\n');
  const exploreLink = `/events/${item.id}`;
  return (
    <li className={classes.item}>
      <img src={'/' + item.image} alt={item.title} />
      <div className={classes.content}>
        <div className={classes.summary}>
          <h2>{item.title}</h2>
          <div className={classes.date}>
            <time>{humanReadableDate}</time>
          </div>
          <div className={classes.address}>
            <address> {formattedAddress} </address>
          </div>
        </div>
        <div className={classes.actions}>
          <Link href={exploreLink}>Explore Event</Link>
        </div>
      </div>
    </li>
  );
};

export default EventItem;
