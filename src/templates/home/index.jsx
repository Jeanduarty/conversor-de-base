import './styles.css';

import { Component } from 'react'

import { InputNumber1 } from '../../components/inputNumber1';
import { InputNumber2 } from '../../components/inputNumber2';
import { Converter } from '../../components/buttonConverter';
import { TitleHome } from '../../components/titleHome';
import { FooterHome } from '../../components/footer';

export class Home extends Component {
  state = {
    notWasConvert: 0,
    wasConvert: 0,
    resultado: 0
  }

  handleChangeNumber1 = (e) => {
    const { value } = e.target
    this.setState({ notWasConvert: parseInt(value) })
  }

  handleChangeNumber2 = (e) => {
    const { value } = e.target
    this.setState({ wasConvert: parseInt(value) })
  }

  handleConvert = () => {
    const { notWasConvert, wasConvert } = this.state
    this.setState({ resultado: (notWasConvert * wasConvert) })
  }

  render() {
    const { notWasConvert, wasConvert, resultado } = this.state

    return (
        <div className='container'>
          <TitleHome/>
          <InputNumber1 onChange={this.handleChangeNumber1}/>
          <Converter onClick={this.handleConvert}/>
          <InputNumber2 onChange={this.handleChangeNumber2}/>
          <FooterHome/>
        </div>
    );
  }
}
