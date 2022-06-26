import React from 'react';

import SimpleMenu from '../../components/SimpleMenu/SimpleMenu';

import TFormSamplePage from './TFormSamplePage';

const links = [
    { title: 'Home', destination: '/' },
    { title: 'Form Sample', destination: '/form-sample' },
];

const FormSamplePage: React.FC<TFormSamplePage> = ({ pageTitle }) => (
    <>
        <SimpleMenu links={links} />
        <article>
            <h1>{pageTitle}</h1>
        </article>
    </>
);

export default FormSamplePage;
