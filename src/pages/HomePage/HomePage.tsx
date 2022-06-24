import React from 'react';

import { THomePage } from './THomePage';

import SimpleComponent from '../../components/SimpleComponent/SimpleComponent';

import './HomePage.css';

const Home: React.FC<THomePage> = ({ pageTitle }) => (
    <article>
        <h1>{pageTitle}</h1>
        <p>
            This is a startup project to create web applications with webpack,
            React, Typescript, Jest and React testing library
        </p>
        <p>Status: In development</p>
        <section>
            <h2>What's next?</h2>
            <ul>
                <li>Layout design</li>
                <li>Project description and guideline</li>
                <li>More components samples</li>
                <li>Test samples and guidelines</li>
            </ul>
        </section>
        <section>
            <h3>First component sample:</h3>
            <SimpleComponent colorClass='title-red' />
        </section>
    </article>
);

export default Home;
