import React from 'react';

import SimpleComponentProps from './SimpleComponentProps';

import './SimpleComponent.css';

const SimpleComponent: React.FC<SimpleComponentProps> = ({ colorClass }) => (
  <>
    <h2 className={colorClass}>I'm a Simple Component!</h2>
  </>
);

export default SimpleComponent;
