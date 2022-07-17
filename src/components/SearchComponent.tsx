import { FC } from "react";
import { useSearchValue, useSearchValueUpdate } from "../context/AppContext";

const InputWrapper: FC = ({ children }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        position: "relative",
      }}
      onClick={(e) => e.stopPropagation()}
    >
      {children}
    </div>
  );
};

interface IProps {
  setDropdownShown: (arg: true) => void;
}

const SearchComponent: FC<IProps> = ({ setDropdownShown }) => {
  const inputStyle = {
    height: "40px",
    border: "1px solid #ccc",
    borderRadius: "4px",
    width: "300px",
    padding: "0 10px",
    fontSize: "16px",
    fontFamily: "sans-serif",
  };
  const search = useSearchValue();
  const setSearchValue = useSearchValueUpdate();
  return (
    <InputWrapper>
      <input
        type="text"
        style={inputStyle}
        onChange={(e) => setSearchValue(e.target.value)}
        onFocus={(e) => setDropdownShown(true)}
        value={search}
      />
    </InputWrapper>
  );
};

export default SearchComponent;
