import "./styles.css";

export const ConversionResult = ({ result, size, minHeight }) => (
  <>
    <div className="inputBorder">
      <div className="result" style={{ fontSize: size, minHeight: minHeight }}>
        {result}
      </div>
    </div>
  </>
);
