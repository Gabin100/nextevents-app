import Link from 'next/link';
import React from 'react';
import classes from './styles/main-header.module.css';

function MainHeader() {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>
        <Link href={'/'}>NextEvents</Link>
      </div>
      <nav className={classes.navigation}>
        <ul>
          <li>
            <Link href={'/events'}>Browse all Events</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainHeader;
