import { useState, useContext, createContext } from "react";

const SearchContext = createContext()

function SearchProvider({ children }) {
    const [auth, setAuth] = useState({
        keyword: "",
        results: [],
    });



    return (
        <SearchContext.Provider value={[auth, setAuth]}>
            {children}
        </SearchContext.Provider>
    );
};

//const hook
const useSearch = () => useContext(SearchContext)

export { useSearch, SearchProvider }

