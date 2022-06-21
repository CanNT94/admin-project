import React, { createContext, ReactNode, useCallback, useState } from 'react';
import { useRouter } from 'next/router';
import { User } from '../model/user';

const TOKEN_KEY = 'auth-token-customer';
const USER_KEY = 'auth-customer';

type Props = {
    children: ReactNode;
};

type authContextType = {
    token: string | null;
    user: User | null;
    isLoggedIn: boolean;
    saveToken: (token: string) => void;
    saveUser: (user: User) => void;
    logout: () => void;
};

const authContextDefaultValues: authContextType = {
    token: '',
    user: null,
    isLoggedIn: false,
    saveToken: () => {},
    saveUser: () => {},
    logout: () => {},
};

const AuthContext = createContext<authContextType>(authContextDefaultValues);

const getToken = (): string | null => {
    if (localStorage.getItem(TOKEN_KEY)) {
        const token = localStorage.getItem(TOKEN_KEY);
        window.sessionStorage.setItem(TOKEN_KEY, token ? token : '');
    }
    return window.sessionStorage.getItem(TOKEN_KEY)
        ? window.sessionStorage.getItem(TOKEN_KEY)
        : null;
};

const getUser = (): User | null => {
    if (localStorage.getItem(USER_KEY)) {
        const user = localStorage.getItem(USER_KEY);
        window.sessionStorage.setItem(USER_KEY, user ? user : '');
    }
    const user = window.sessionStorage.getItem(USER_KEY);
    if (user) {
        return JSON.parse(user);
    }
    return null;
};

export const AuthContextProvider = ({ children }: Props) => {
    const router = useRouter();

    const [token, setToken] = useState<string | null>(() => {
        return getToken();
    });
    const [user, setUser] = useState<User | null>(() => {
        return getUser();
    });

    const userIsLoggedIn = !!token;

    const logoutHandler = useCallback(() => {
        setToken(null);
        setUser(null);
        localStorage.removeItem(TOKEN_KEY);
        localStorage.removeItem(USER_KEY);
        localStorage.clear();
        router.push('/login');
    }, []);

    const saveToken = (token: string) => {
        setToken(token);
        localStorage.removeItem(TOKEN_KEY);
        localStorage.setItem(TOKEN_KEY, token);
        window.sessionStorage.removeItem(TOKEN_KEY);
        window.sessionStorage.setItem(TOKEN_KEY, token);
    };

    const saveUser = (user: User) => {
        setUser(user);
        localStorage.removeItem(USER_KEY);
        localStorage.setItem(USER_KEY, JSON.stringify(user));
        window.sessionStorage.removeItem(USER_KEY);
        window.sessionStorage.setItem(USER_KEY, JSON.stringify(user));
    };

    const contextValue = {
        token: token,
        user: user,
        isLoggedIn: userIsLoggedIn,
        saveToken: saveToken,
        saveUser: saveUser,
        logout: logoutHandler,
    };

    return (
        <AuthContext.Provider value={contextValue}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContext;
