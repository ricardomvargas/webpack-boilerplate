import React from 'react';

import SimpleMenu from '../SimpleMenu/SimpleMenu';

import './Topbar.css';

const links = [
    { title: 'Home', destination: '/' },
    { title: 'Form Sample', destination: '/form-sample' },
];

const Topbar: React.FC = () => (
    <nav className='topbar'>
        <SimpleMenu links={links} />
    </nav>
);

export default Topbar;
