import {React} from 'react';
import {Routes, Route, Navigate} from 'react-router-dom';

import Home from './pages/Home';

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path='/' element={<Navigate to="/home" />} />
                <Route path='/home' element={<Home />} /> 
                <Route path='*' element={<Navigate to="/home" />} />
            </Routes>
        </div>
    );
};

export default App;