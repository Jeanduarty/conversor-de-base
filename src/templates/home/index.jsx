import './styles.css'

import { useState } from 'react'

import { InputNumber } from '../../components/inputNumber'
import { ConversionResult } from '../../components/conversionResult'
import { Converter } from '../../components/buttonConverter'
import { TopHomeBar } from '../../components/topHomeBar'
import { FooterHome } from '../../components/footer'
import { ConveterDecimalForBinary } from '../../services/convertServices/convertNumber'

export const Home = () => {
  const [decimal, setDecimal] = useState(0)
  const [result, setResult] = useState(0)

  const handleChangeNumber1 = (e) => {
    const { value } = e.target
    setDecimal(parseInt(value))
  }

  const handleConvert = () => {
    setResult(<ConveterDecimalForBinary decimal={decimal} />)
  }

  return (
    <div className='container'>
      <TopHomeBar />
      <InputNumber onChange={handleChangeNumber1} />
      <Converter onClick={handleConvert} />
      <ConversionResult result={result} />
      <FooterHome />
    </div>
  )
}
