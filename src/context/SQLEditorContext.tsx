import React, { createContext, useState, useContext, ReactNode } from 'react';

interface SqlEditorContextProps {
    savedQueries: string[];
    activeQuery: string;
    addSavedQuery: (query: string) => void;
    setNewActiveQuery: (query: string) => void;
}

const SqlEditorContext = createContext<SqlEditorContextProps | undefined>(undefined);

interface SqlEditorProviderProps {
    children: ReactNode;
}

const SqlEditorProvider: React.FC<SqlEditorProviderProps> = ({ children }) => {
    const defaultQueries = ['SELECT * FROM users', 'SELECT * FROM products', 'SELECT * FROM orders',
    'SELECT * FROM users'
    ]; //@TODO find a way to form this using table data

    const [savedQueries, setSavedQueries] = useState<string[]>(defaultQueries);
    const [activeQuery, setActiveQuery] = useState<string>(savedQueries[0]);

    const addSavedQuery = (query: string) => {
        setSavedQueries([...savedQueries, query]);
    };

    const setNewActiveQuery = (query: string) => {
        setActiveQuery(query);
    };

    return (
        <SqlEditorContext.Provider value={{ savedQueries, activeQuery, addSavedQuery, setNewActiveQuery }}>
        {children}
        </SqlEditorContext.Provider>
    );
};

const useSqlEditor = (): SqlEditorContextProps => {
    const context = useContext(SqlEditorContext);
    if (!context) {
        console.error('useSqlEditor must be used within a SqlEditorProvider');
        throw new Error('useSqlEditor must be used within a SqlEditorProvider');
    }
    return context;
};

export { SqlEditorProvider, useSqlEditor };
