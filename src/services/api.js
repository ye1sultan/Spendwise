const API_URL = 'http://personalfinance.herokuapp.com/api';

export const login = async (email, password) => {
    const requestOptions = {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
    };

    const response = await fetch(`${API_URL}/login`, requestOptions);

    if (!response.ok) {
        throw new Error('Failed to log in');
    }

    const data = await response.json();
    return data;
};

export const register = async (name, email, password, passwordConfirmation) => {
    const requestOptions = {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, password, passwordConfirmation }),
    };

    const response = await fetch('http://personalfinance.herokuapp.com/api/register', requestOptions);

    if (!response.ok) {
        throw new Error('Failed to register');
    }

    const data = await response.json();
    return data;
};

// api.js
export const authenticatedFetch = (url, options = {}) => {
    const token = localStorage.getItem('authToken');
    const headers = {
        ...options.headers,
        Authorization: `Bearer ${token}`,
    };

    return fetch(url, {
        ...options,
        headers,
    });
};