import React from 'react';
import { Link } from 'react-router-dom';

import SimpleMenuProps from './SimpleMenuProps';

import { createListItemKey } from '../../utils/utils';

import './SimpleMenu.css';

const keys = createListItemKey();

const SimpleMenu: React.FC<SimpleMenuProps> = ({ links }) => (
  <ul className='simple-menu'>
    {links?.map((l) => (
      <li key={keys.next().value ?? 1}>
        <Link to={l.destination}>{l.title}</Link>
      </li>
    ))}
  </ul>
);

export default SimpleMenu;
