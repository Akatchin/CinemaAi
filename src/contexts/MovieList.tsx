import { createContext } from "react";
import { ReactNode, useState } from "react";

type ContextProps = {
    children: ReactNode
}

type ContextType = {
    favorites: Array<Number>
    addFavorites: (list: Array<Number>) => void
}

const initialValue: ContextType = {
    favorites: [0],
    addFavorites: () => {}
}

export const FavContext = createContext(initialValue);

export const FavoriteContext = ({children}: ContextProps) => {

    const [favorites, setFavorites] = useState(Array<Number>);

    const addFavorites = (list: Array<Number>) => {
        setFavorites(list)
    }

    return (
        <FavContext.Provider value={{favorites, addFavorites}}>{children}</FavContext.Provider>
    )
}
