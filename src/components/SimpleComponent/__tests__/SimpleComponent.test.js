import React from 'react';
import { render } from '@testing-library/react';

import SimpleComponent from '../SimpleComponent';

const Wraper = ({ children }) => <div>{children}</div>;

test('Check if match with snapshot', () => {
    const simpleComponent = render(
        <Wraper children={<SimpleComponent colorClass='title-red' />} />
    );
    expect(simpleComponent).toMatchSnapshot();
});
