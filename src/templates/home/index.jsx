import './styles.css';

import { Component } from 'react'

import { InputNumber } from '../../components/inputNumber';
import { ConversionResult } from '../../components/conversionResult';
import { Converter } from '../../components/buttonConverter';
import { TopHomeBar } from '../../components/topHomeBar';
import { FooterHome } from '../../components/footer';

export class Home extends Component {
  state = {
    notWasConvert: 0,
    wasConvert: 2,
    result: 0
  }

  handleChangeNumber1 = (e) => {
    const { value } = e.target
    const valueInt = parseInt(value)
    this.setState({ notWasConvert: valueInt })
  }

  // handleChangeNumber2 = (e) => {
  //   const { value } = e.target
  //   this.setState({ wasConvert: parseInt(value) })
  // }

  handleConvert = () => {
    const { notWasConvert, wasConvert } = this.state

    const validationNotWasConvert = isNaN(notWasConvert) ? 0 : notWasConvert
    
    this.setState({ result: (validationNotWasConvert * wasConvert) })
  }

  render() {
    const { result } = this.state

    return (
      <div className='container'>
        <TopHomeBar />
        <InputNumber onChange={this.handleChangeNumber1} />
        <Converter onClick={this.handleConvert} />
        <ConversionResult result={result} />
        <FooterHome />
      </div>
    );
  }
}
