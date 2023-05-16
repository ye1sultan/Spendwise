const API_URL = 'https://personalfinance.herokuapp.com/api';

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

    const data = await response.json();

    if (!response.ok) {
        throw new Error(data.message);
    }

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

    const response = await fetch(`${API_URL}/register`, requestOptions);

    const data = await response.json();

    if (!response.ok) {
        throw new Error(data.message);
    }

    return data;
};

// api.js
export const authenticatedFetch = (url, options = {}) => {
    const token = sessionStorage.getItem('authToken');
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

    const contentType = response.headers.get('content-type');
    if (contentType && contentType.includes('application/json')) {
        const data = await response.json();
        return data;
    } else {
        // If there's no JSON content in the response, return an empty object
        return {};
    }
};

export const updateTransaction = async (id, updatedTransaction) => {
    const response = await authenticatedFetch(`${API_URL}/transactions/${id}`, {
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

export const updateUser = async (id, updatedUser) => {
    const response = await authenticatedFetch(`${API_URL}/users/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedUser),
    });

    if (!response.ok) {
        throw new Error(`Error updating user with ID ${id}: ${response.statusText}`);
    }

    return await response.json();
};

export const getAllGoals = async () => {
    const response = await authenticatedFetch(`${API_URL}/goals`);

    if (!response.ok) {
        throw new Error('Failed to fetch goals');
    }

    const data = await response.json();
    return data;
};

export const addNewGoal = async (newGoal) => {
    const response = await authenticatedFetch(`${API_URL}/goals`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(newGoal),
    });

    if (!response.ok) {
        throw new Error('Error adding new goal');
    }

    const data = await response.json();
    return data;
};

export const deleteGoal = async (id) => {
    const response = await authenticatedFetch(`${API_URL}/goals/${id}`, {
        method: 'DELETE',
    });

    if (!response.ok) {
        throw new Error('Error deleting goal');
    }

    const contentType = response.headers.get('content-type');
    if (contentType && contentType.includes('application/json')) {
        const data = await response.json();
        return data;
    } else {
        // If there's no JSON content in the response, return an empty object
        return {};
    }
};

export const updateGoal = async (id, updatedGoal) => {
    const response = await authenticatedFetch(`${API_URL}/goals/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedGoal),
    });

    if (!response.ok) {
        throw new Error(`Error updating goals with ID ${id}: ${response.statusText}`);
    }

    return await response.json();
};

export const getMontlyBalance = async () => {
    const response = await authenticatedFetch(`${API_URL}/monthly-balances`);

    if (!response.ok) {
        throw new Error('Failed to fetch monthly balances');
    }

    const data = await response.json();
    return data;
};

export const createMonthlyBalance = async (date, balance) => {
    const response = await authenticatedFetch(`${API_URL}/monthly-balances`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            date,
            balance,
        }),
    });

    if (!response.ok) {
        throw new Error('Failed to create monthly balance');
    }

    const data = await response.json();
    return data;
};

export const updateMonthlyBalance = async (date, balance, id) => {
    const response = await authenticatedFetch(`${API_URL}/monthly-balances/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            date,
            balance,
        }),
    });

    if (!response.ok) {
        throw new Error('Failed to update monthly balance');
    }

    const data = await response.json();
    return data;
};