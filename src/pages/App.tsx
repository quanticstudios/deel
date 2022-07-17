import SearchComponent from "../components/SearchComponent";
import AppContext from "../context/AppContext";
import Dropdown from "../components/Dropdown";
import { useEffect, useState } from "react";
import ShowSelected from "../components/ShowSelected";

function App() {
    const appStyle = {
        height: "100vh",
        display: "flex",
        justifyContent: "center",
    };
    const [dropdownShown, setDropdownShown] = useState(false);

    useEffect(() => {
        document.addEventListener("click", () => {
            setDropdownShown(false);
        });
        return document.removeEventListener("click", () => {
            setDropdownShown(false);
        });
    });

    return (
        <div style={appStyle}>
            <AppContext>
                <div style={{ position: "relative" }}>
                    <h1
                        style={{
                            textAlign: "center",
                            fontFamily: "sans-serif",
                        }}
                    >
                        Search Food
                    </h1>
                    <ShowSelected />
                    <SearchComponent setDropdownShown={setDropdownShown} />
                    {dropdownShown && <Dropdown />}
                </div>
            </AppContext>
        </div>
    );
}

export default App;
