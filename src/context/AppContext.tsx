import {
    createContext,
    FC,
    useCallback,
    useContext,
    useEffect,
    useState,
} from "react";
import ResponseInterface from "../interfaces/ResponseInterface";
import { getData } from "../api/api";

const SearchValue = createContext("");
const SearchValueUpdate = createContext({} as (search: string) => void);
const ListValue = createContext([] as ResponseInterface[]);
const ListValueUpdate = createContext(
    {} as (list: ResponseInterface[]) => void
);
const SelectedValue = createContext("");
const SelectedValueUpdate = createContext({} as (selected: string) => void);

export function useSearchValue() {
    return useContext(SearchValue);
}
export function useSearchValueUpdate() {
    return useContext(SearchValueUpdate);
}

export function useListValue() {
    return useContext(ListValue);
}

export function useListValueUpdate() {
    return useContext(ListValueUpdate);
}
export function useSelectedValue() {
    return useContext(SelectedValue);
}

export function useSelectedValueUpdate() {
    return useContext(SelectedValueUpdate);
}

const AppContext: FC = ({ children }) => {
    const [search, setSearch] = useState("");
    const [list, setList] = useState<ResponseInterface[]>([]);
    const [selected, setSelected] = useState("");
    const fetchAPI = useCallback(async () => {
        // TODO add debounce function
        // due to lack of time I did not create debounce functionality, but API is hosted on my own server, so it won't be an issue, although I realize the real world implications this might have
        const data = await getData(search);
        setList(data);
    }, [search]);

    useEffect(() => {
        fetchAPI();
    }, [fetchAPI]);

    return (
        <SearchValue.Provider value={search}>
            <SearchValueUpdate.Provider value={setSearch}>
                <ListValue.Provider value={list}>
                    <ListValueUpdate.Provider value={setList}>
                        <SelectedValue.Provider value={selected}>
                            <SelectedValueUpdate.Provider value={setSelected}>
                                {children}
                            </SelectedValueUpdate.Provider>
                        </SelectedValue.Provider>
                    </ListValueUpdate.Provider>
                </ListValue.Provider>
            </SearchValueUpdate.Provider>
        </SearchValue.Provider>
    );
};

export default AppContext;
