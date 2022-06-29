import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import HomePage from './pages/HomePage/HomePage';
import FormSample from './pages/FormSamplePage/FormSamplePage';

import './styles/Main.css';

const App: React.FC = () => (
    <BrowserRouter>
        <Routes>
            <Route
                path='/'
                element={<HomePage pageTitle='Webpack Boilerplate' />}
            />
            <Route
                path='form-sample'
                element={<FormSample pageTitle='Form sample page' />}
            />
        </Routes>{' '}
    </BrowserRouter>
);

export default App;
