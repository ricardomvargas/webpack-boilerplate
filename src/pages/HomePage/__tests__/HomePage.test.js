import React from 'react';
import { render } from '@testing-library/react';

import HomePage from '../HomePage';

const Wraper = ({ children }) => <div>{children}</div>;

test('Check if match with snapshot', () => {
    const simpleComponent = render(
        <Wraper children={<HomePage pageTitle='Test Home Page' />} />
    );
    expect(simpleComponent).toMatchSnapshot();
});
