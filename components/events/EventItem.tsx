import Link from 'next/link';
import React from 'react';
import { DUMMY_EVENTS_INTERFACE } from '../../dummy-data';

const EventItem: React.FC<{ item: DUMMY_EVENTS_INTERFACE }> = ({ item }) => {
  const humanReadableDate = new Date(item.date).toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
  const formattedAddress = item.location.replace(', ', '\n');
  const exploreLink = `/events/${item.id}`;
  return (
    <li>
      <img src={'/' + item.image} alt={item.title} />
      <div>
        <div>
          <h2>{item.title}</h2>
          <div>
            <time>{humanReadableDate}</time>
          </div>
          <div>
            <address> {formattedAddress} </address>
          </div>
        </div>
        <div>
          <Link href={exploreLink}>Explore Event</Link>
        </div>
      </div>
    </li>
  );
};

export default EventItem;
