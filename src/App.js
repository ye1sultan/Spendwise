import {React} from 'react';
import {Routes, Route, Navigate} from 'react-router-dom';

import Landing from './pages/Landing';

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path='/' element={<Navigate to="/home" />} />
                <Route path='/home' element={<Landing />} /> 
                <Route path='*' element={<Navigate to="/home" />} />
            </Routes>
        </div>
    );
};

export default App;