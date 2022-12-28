import React, { createContext, useContext } from "react";
import { RootStoreType } from "./root";

const StoreContext = createContext<RootStoreType>({} as unknown as RootStoreType)

interface ProviderProps extends React.PropsWithChildren { store: RootStoreType }

export function StoreProvider({store, children}: ProviderProps) {
    return <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
}

export function useStore(): RootStoreType {
    return useContext(StoreContext)
}