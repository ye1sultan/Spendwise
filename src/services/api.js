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
    if (!token) {
        throw new Error('Authentication token not found');
    }

    const headers = {
        ...options.headers,
        Authorization: `Bearer ${token}`,
    };

    return fetch(url, {
        ...options,
        headers,
    });
};

export const getAllTransactions = async () => {
    const response = await authenticatedFetch(`${API_URL}/transactions`);

    if (!response.ok) {
        throw new Error('Failed to fetch transactions');
    }

    const data = await response.json();
    return data;
};

export const addTransaction = async (transaction) => {
    console.log('Transaction to add:', transaction);
    const response = await authenticatedFetch(`${API_URL}/transactions`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(transaction),
    });

    if (!response.ok) {
        throw new Error('Error adding transaction');
    }

    const data = await response.json();
    return data;
};

export const deleteTransaction = async (id) => {
    const response = await authenticatedFetch(`${API_URL}/transactions/${id}`, {
        method: 'DELETE',
    });

    if (!response.ok) {
        throw new Error('Error deleting transaction');
    }

    const data = await response.json();
    return data;
};

export const updateTransaction = async (id, updatedTransaction) => {
    const response = await fetch(`${API_URL}/transactions/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedTransaction),
    });

    if (!response.ok) {
        throw new Error(`Error updating transaction with ID ${id}: ${response.statusText}`);
    }

    return await response.json();
};  