import React from 'react';

import Topbar from '../../components/Topbar/Topbar';

import FormSamplePageProps from './FormSamplePageProps';

const FormSamplePage: React.FC<FormSamplePageProps> = ({ pageTitle }) => (
  <>
    <Topbar />
    <article>
      <h1>{pageTitle}</h1>
    </article>
  </>
);

export default FormSamplePage;
