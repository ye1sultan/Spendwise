import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const ProtectedWrapper = ({ children }) => {
    const token = sessionStorage.getItem('authToken');
    const navigate = useNavigate();

    useEffect(() => {
        if (!token) {
            alert('Unauthorized!');
            console.log('Unauthorized!');

            navigate('/login');
        }
    }, [token, navigate]);

    if (!token) {
        return null;
    }

    return <>{children}</>;
};

export default ProtectedWrapper;