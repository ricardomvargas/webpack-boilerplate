import React from 'react';
import { Link } from 'react-router-dom';

import { THomePage } from './THomePage';

import SimpleComponent from '../../components/SimpleComponent/SimpleComponent';
import SimpleMenu from '../../components/SimpleMenu/SimpleMenu';

import './HomePage.css';

const links = [
    { title: 'Home', destination: '/' },
    { title: 'Form Sample', destination: '/form-sample' },
];

const Home: React.FC<THomePage> = ({ pageTitle }) => (
    <>
        <SimpleMenu links={links} />
        <article>
            <h1>{pageTitle}</h1>
            <p>
                This is a startup project to create web applications with
                webpack, React, Typescript, Jest and React testing library
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
            <Link to='form-sample'>Go To: form page sample</Link>
        </article>
    </>
);

export default Home;
