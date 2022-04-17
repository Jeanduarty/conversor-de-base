import "./styles.css";

export const ConversionResult = ({ result, size, minHeight, flag }) => {
  const state = flag ? "visible" : "hidden";

  return (
    <div className="inputBorder">
      <div className="animation" style={{ visibility: state }}></div>
      <div className="result" style={{ fontSize: size, minHeight: minHeight }}>
        {result}
      </div>
    </div>
  );
};
