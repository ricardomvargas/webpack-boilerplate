import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import FormSamplePage from '../FormSamplePage';

const Wraper = ({ children }) => <BrowserRouter>{children}</BrowserRouter>;

test('Check if match with snapshot', () => {
    const simpleComponent = render(
        <Wraper
            children={<FormSamplePage pageTitle='Test Form Sample Page' />}
        />
    );
    expect(simpleComponent).toMatchSnapshot();
});
