import React, { createContext, ReactNode, useCallback, useState } from 'react';
import { useRouter } from 'next/router';
import { User } from '../model/user';

const TOKEN_KEY = 'auth-user-token';
const USER_KEY = 'auth-user';

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

const getToken = () => {
    if (typeof window !== 'undefined') {
        return localStorage.getItem(TOKEN_KEY);
    } else {
        return null;
    }
};

const getUser = () => {
    if (typeof window !== 'undefined') {
        const user = localStorage.getItem(USER_KEY);
        if (user) {
            return JSON.parse(user);
        }
    } else {
        return null;
    }
};

export const AuthContextProvider = ({ children }: Props) => {
    const router = useRouter();

    const [token, setToken] = useState<string | null>(() => {
        return getToken();
    });
    const [user, setUser] = useState<User | null>(() => {
        return getUser();
    });

    const isLoggedIn = !!token;

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
    };

    const saveUser = (user: User) => {
        setUser(user);
        localStorage.removeItem(USER_KEY);
        localStorage.setItem(USER_KEY, JSON.stringify(user));
    };

    const contextValue = {
        token: token,
        user: user,
        isLoggedIn: isLoggedIn,
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
