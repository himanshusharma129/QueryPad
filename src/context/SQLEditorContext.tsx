import React, { createContext, useState, useContext, ReactNode } from 'react';
import { ITable } from 'types/TableTypes';

interface SqlEditorContextProps {
    savedQueries: string[];
    activeQuery: string;
    addSavedQuery: () => void;
    setNewActiveQuery: (query: string) => void;
    outputData: ITable;
    setNewOutputData: (data: ITable) => void;
}

const SqlEditorContext = createContext<SqlEditorContextProps | undefined>(undefined);

interface SqlEditorProviderProps {
    children: ReactNode;
}

const SqlEditorProvider: React.FC<SqlEditorProviderProps> = ({ children }) => {
    const defaultQueries = ['SELECT * FROM customers', 'SELECT * FROM products', 'SELECT count FROM products where unitPrice < 50'
    ]; //@TODO find a way to form this using table data

    const [savedQueries, setSavedQueries] = useState<string[]>(defaultQueries);
    const [activeQuery, setActiveQuery] = useState<string>(savedQueries[0]);
    const [outputData, setOutputData] = useState<ITable>([]); //@TODO find a way to form this using table data

    const addSavedQuery = () => {
        setSavedQueries([...savedQueries, activeQuery]);
    };

    const setNewActiveQuery = (query: string) => {
        setActiveQuery(query);
    };

    const setNewOutputData = (data: ITable) => {
        setOutputData(data);
    }

    return (
        <SqlEditorContext.Provider value={{ savedQueries, activeQuery, addSavedQuery, setNewActiveQuery, outputData, setNewOutputData }}>
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
