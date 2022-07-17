import React from "react";
import {
    useSearchValue,
    useSearchValueUpdate,
    useSelectedValueUpdate,
} from "../../context/AppContext";

interface IProps {
    name?: string;
    county?: string;
    empty?: boolean;
    search?: string;
}
// Due to instruction I did not use any external loaders etc, therefore I have no hover effects, since I was not clear on how we should approach this task
// If I was certain about the usage of external CSS I would have styled this component a bit better
const ListElement = ({ name, county, empty, search }: IProps) => {
    const liStyle = {
        listStyle: "none",
        height: "30px",
        borderBottom: "1px solid #ccc",
    };

    const setValue = useSelectedValueUpdate();
    const setInputValue = useSearchValueUpdate();
    function handleSelect() {
        setValue(name || "");
        setInputValue(name || "");
    }
    if (!empty && name) {
        const searchLength = search?.length;
        return (
            <li style={liStyle}>
                <button
                    style={{
                        background: "white",
                        border: "none",
                        paddingLeft: "10px",
                        height: "100%",
                        width: "100%",
                        cursor: "pointer",
                        textAlign: "left",
                    }}
                    onClick={handleSelect}
                >
                    <span style={{ fontSize: "16px", opacity: "0.8" }}>
                        <span style={{ fontWeight: "bold" }}>
                            {name.slice(0, searchLength)}
                        </span>
                        <span style={{ opacity: "0.8" }}>
                            {name.slice(searchLength)}
                        </span>
                    </span>
                </button>
            </li>
        );
    } else {
        return (
            <li
                style={{
                    ...liStyle,
                    display: "flex",
                    alignItems: "center",
                    paddingLeft: "10px",
                }}
            >
                No results
            </li>
        );
    }
};

export default ListElement;
