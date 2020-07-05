import { useState, useCallback } from 'react';

export default UseHttp = () => {
    const [loading, setloading] = useState(false);
    const [error, setError] = useState(null);

    const clearError = useCallback(() => setError(null), []);

    const request = useCallback(async (url, method = 'GET', body = null, headers = {}) => {
        setloading(true);

        try {
            if (body) {
                body = JSON.stringify(body);
                headers['Content-Type'] = 'application/json';
            }

            const response = fetch(url, { method, body, headers });
            const data = await response.json;

            if (!response.ok) {
                throw new Error(data.message || 'Что-то пошло не так');
            }

            setloading(false);

            return data
        } catch (error) {
            setloading(false);
            setError(error.message);
            throw error;
        }

    }, []);

    return { loading, request, error , clearError };
}