import { FC } from "react";
import { useListValue, useSearchValue } from "../context/AppContext";
import ListElement from "./List/ListElement";

const Dropdown: FC = () => {
    const search = useSearchValue();
    const list = useListValue();

    if (search) {
        return (
            <ul
                style={{
                    position: "absolute",
                    border: "1px solid #ccc",
                    width: "100%",
                    padding: 0,
                    borderRadius: "4px",
                    marginTop: 0,
                    maxHeight: "200px",
                    overflow: "auto",
                }}
            >
                {list.length > 0 ? (
                    list.map((e, i) => (
                        <ListElement key={i} name={e.name_en} search={search} />
                    ))
                ) : (
                    <ul style={{ paddingLeft: 0 }}>
                        <ListElement empty />
                    </ul>
                )}
            </ul>
        );
    } else {
        return <></>;
    }
};

export default Dropdown;
