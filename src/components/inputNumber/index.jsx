import "./styles.css";

export const InputNumber = ({ onChange, size, minHeight }) => (
  <div className="inputBorder">
    <div className="inputDivNumber">
      <input
        type="search"
        autoFocus
        className="inputNumber1"
        onChange={onChange}
        placeholder="Digite um número decimal"
        style={{ fontSize: size, minHeight: minHeight }}
      ></input>
    </div>
  </div>
);
