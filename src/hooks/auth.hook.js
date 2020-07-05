import { useState, useEffect, useCallback } from 'react';

const storageKey = 'userData';

const useAuth = () => {
    const [name, setName] = useState(null);
    const [password, setPassword] = useState(null);

    const logIn = useCallback((name, password) => {
        if (name !== 'name' || password !== '1234567') return;

        setName(name);
        setPassword(password);

        localStorage.setItem(storageKey, JSON.stringify({
            name: name,
            password: password
        }));
    }, []);

    const logOut = useCallback(() => {
        setName(null);
        setPassword(null);

        localStorage.removeItem(storageKey);
    }, []);

    useEffect(() => {
        const data = JSON.parse(localStorage.getItem(storageKey));

        if (data && data.name && data.password) {
            logIn(data.name, data.password);
        }
    }, [logIn]);

    return { logIn, logOut, name, password };
}

export default useAuth;