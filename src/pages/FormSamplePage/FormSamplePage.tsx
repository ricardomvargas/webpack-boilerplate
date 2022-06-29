import React from 'react';

import Topbar from '../../components/Topbar/Topbar';

import TFormSamplePage from './TFormSamplePage';

const FormSamplePage: React.FC<TFormSamplePage> = ({ pageTitle }) => (
    <>
        <Topbar />
        <article>
            <h1>{pageTitle}</h1>
        </article>
    </>
);

export default FormSamplePage;
