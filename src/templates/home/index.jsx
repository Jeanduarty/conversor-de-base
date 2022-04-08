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

  const size = decimal > 9999999 ? 15 : 25

  const handleChangeNumber = (e) => {
    const { value } = e.target
    const decimalValue = value
    setDecimal(parseInt(decimalValue))
    setResult(<ConveterDecimalForBinary decimal={decimalValue} />)
  }

  return (
    <div className='container'>
      <TopHomeBar />
      <InputNumber onChange={handleChangeNumber} size={size} />
      <Converter />
      <ConversionResult result={result} decimal={decimal} size={size} />
      <FooterHome />
    </div>
  )
}
