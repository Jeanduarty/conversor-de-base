import "./styles.css";

import { useState } from "react";

import { InputNumber } from "../../components/inputNumber";
import { ConversionResult } from "../../components/conversionResult";
import { TopHomeBar } from "../../components/topHomeBar";
import { FooterHome } from "../../components/footer";
import { ConveterDecimalForBinary } from "../../services/convertServices/convertNumber";

export const Home = () => {
  const [decimal, setDecimal] = useState(0);
  const [result, setResult] = useState(0);
  const [flag, setFlag] = useState(false);

  const size = decimal > 9999999 ? 15 : 25;
  const minHeight = isNaN(decimal) ? 34 : 20.667;

  const handleChangeNumber = (e) => {
    const { value } = e.target;
    const decimalValue = parseInt(value);
    setDecimal(decimalValue);
    handleConvert(decimalValue);
    handleEffet();
  };

  const handleConvert = (decimalValue) => {
    setResult(<ConveterDecimalForBinary decimal={decimalValue} />);
  };

  const handleEffet = () => {
    setFlag(true);

    setTimeout(() => {
      setFlag(false);
    }, 50);
  };

  return (
    <div className="container">
      <div className="sub-container-home">
        <TopHomeBar />
        <InputNumber
          onChange={handleChangeNumber}
          size={size}
          minHeight={minHeight}
        />
        <ConversionResult
          result={result}
          decimal={decimal}
          size={size}
          minHeight={minHeight}
          flag={flag}
        />
        <FooterHome />
      </div>
    </div>
  );
};
