import { createContext, useContext, useState } from "react";
import { store as states } from "./store";


const Context = createContext<any | null>(states);

interface AppContext {
    children: JSX.Element;
}

export const AppContext = ({ children }: AppContext) => {
    const [store, setStore] = useState<{}>(states);
    return (
        <Context.Provider value={{ store, setStore }}>
            {children}
        </Context.Provider>
    );
};

export const useStore = () => {
    const { store, setStore } = useContext<any>(Context);
    return [store, setStore];
};
