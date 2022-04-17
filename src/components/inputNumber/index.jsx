import "./styles.css";

window.addEventListener("keypress", (e) => {
  if (!checkChar(e)) e.preventDefault();
});

function checkChar(e) {
  const char = String.fromCharCode(e.keyCode);
  const pattern = "[0-9]";
  if (char.match(pattern)) return true;
}

export const InputNumber = ({ onChange, size, minHeight }) => (
  <div className="inputBorderNumber">
    <div className="inputDivNumber">
      <input
        type="search"
        maxLength={15}
        autoFocus
        className="inputNumber"
        onChange={onChange}
        placeholder="Digite um número decimal"
        style={{ fontSize: size, minHeight: minHeight }}
      ></input>
    </div>
  </div>
);
