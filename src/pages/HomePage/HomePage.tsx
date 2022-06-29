import React from 'react';
import { Link } from 'react-router-dom';

import { THomePage } from './THomePage';

import Topbar from '../../components/Topbar/Topbar';

import './HomePage.css';

const Home: React.FC<THomePage> = ({ pageTitle }) => (
    <>
        <Topbar />
        <article className='home-page'>
            <h1>{pageTitle}</h1>
            <p className='project-intro'>
                Base web project to create applications with front end
                applications.
            </p>
            <section className='tools-block'>
                <a
                    href='https://webpack.js.org/'
                    target='_blank'
                    title='Webpack'
                >
                    <img src='/assets/images/webpack-icon.svg' alt='webpack' />
                </a>
                <a href='https://reactjs.org/' target='_blank' title='ReactJS'>
                    <img src='/assets/images/react-icon.svg' alt='reactjs' />
                </a>
                <a
                    href='https://reactrouter.com/'
                    target='_blank'
                    title='React Router'
                >
                    <img
                        src='/assets/images/react-router-icon.svg'
                        alt='react-route'
                    />
                </a>
                <a
                    href='https://www.typescriptlang.org/'
                    target='_blank'
                    title='Typescript'
                >
                    <img
                        src='/assets/images/typescript-icon.svg'
                        alt='typescript'
                    />
                </a>
                <a href='https://jestjs.io/' target='_blank' title='Jest'>
                    <img src='/assets/images/jest-icon.svg' alt='jest' />
                </a>
                <a
                    href='https://testing-library.com/'
                    target='_blank'
                    title='Testing Library'
                >
                    <img
                        src='/assets/images/testing-library-icon.svg'
                        alt='testing-library'
                    />
                </a>
            </section>
            <section>
                <h2>Getting Started</h2>
                <ul>
                    <li>Installing deppedencies: npm install</li>
                    <li>
                        Executing the project: npm run dev (it runs on port
                        3000)
                    </li>
                    <li>Executing tests: npm run test</li>
                </ul>
                <h2>What's next?</h2>
                <ul>
                    <li>Layout design</li>
                    <li>Project description and guideline</li>
                    <li>More components samples</li>
                    <li>Test samples and guidelines</li>
                </ul>
            </section>
        </article>
    </>
);

export default Home;
