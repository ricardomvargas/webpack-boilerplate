import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import SimpleMenu from '../SimpleMenu';

const Wraper = ({ children }) => <BrowserRouter>{children}</BrowserRouter>;

test('Check if match with snapshot', () => {
    const simpleComponent = render(
        <Wraper
            children={
                <SimpleMenu links={[{ title: 'Home', destination: '/' }]} />
            }
        />
    );
    expect(simpleComponent).toMatchSnapshot();
});
