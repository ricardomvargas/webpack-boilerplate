import React from 'react';

import { THomePage } from './THomePage';

import SimpleComponent from '../../components/SimpleComponent/SimpleComponent';

import './HomePage.css';

const Home: React.FC<THomePage> = ({ pageTitle }) => (
  <article>
    <h1>{pageTitle}</h1>
    <SimpleComponent colorClass='title-red' />
  </article>
);

export default Home;
