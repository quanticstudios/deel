import { useSelectedValue } from "../context/AppContext";

const ShowSelected = () => {
  const selected = useSelectedValue();
  if (selected) {
    return (
      <h3
        style={{
          textAlign: "center",
          fontWeight: 400,
          fontFamily: "sans-serif",
        }}
      >
        Selected City: <b>{selected}</b>
      </h3>
    );
  } else {
    return <></>;
  }
};

export default ShowSelected;
