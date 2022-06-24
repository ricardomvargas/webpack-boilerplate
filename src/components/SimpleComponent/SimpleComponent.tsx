import React from 'react';

import { TSimpleComponent } from './TSimpleComponent';

import './SimpleComponent.css';

const SimpleComponent: React.FC<TSimpleComponent> = ({ colorClass }) => (
    <>
        <h2 className={colorClass}>I'm a Simple Component!</h2>
    </>
);

export default SimpleComponent;
