import { useState, useEffect } from 'react';

const useFetchData = (fetchFunction, ...fetchFunctionArgs) => {
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            setError(null);

            try {
                const result = await fetchFunction(...fetchFunctionArgs);
                setData(result);
            } catch (error) {
                setError(error.message);
            }

            setIsLoading(false);
        };

        fetchData();
    }, [fetchFunction, ...fetchFunctionArgs]);

    return { data, isLoading, error };
};

export default useFetchData;