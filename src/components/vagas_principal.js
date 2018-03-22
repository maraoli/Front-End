import React, { Component } from 'react';
import styled, { css } from 'styled-components';
import './vagas_principal.css';
import {
  Link
} from 'react-router-dom'

const block = {
  backgroundColor: 'white',
  textAlign: 'center'
}

const Label = styled.label`
      border-radius: 0px;
      padding: 0.25em 1em;
      margin: 0 1em;
      background: transparent;
      color: palevioletred;
      border: 0px solid palevioletred;
      width: 100%;

      ${props => props.primary && css`
        background: palevioletred;
        color: white;
`}`;

const TextArea = styled.textarea`
      border-radius: 3px;
      padding: 0.25em 1em;
      margin: 0 0em;
      width: 100%;
      background: transparent;
      color: palevioletred;
      border: 2px solid palevioletred;

      ${props => props.primary && css`
        background: palevioletred;
        color: white;
`}`;

const Button = styled.button`
      border-radius: 3px;
      padding: 0.25em 1em;
      margin: 0 1em;
      background: transparent;
      color: palevioletred;
      border: 2px solid palevioletred;

        ${props => props.primary && css`
          background: palevioletred;
          color: white;
        `}`;


class Vagas_principal extends Component {
  constructor(props) {
    super(props)
    // this.state = {instituicao: '',
    //               curso: '',
    //               ano_inicio1: '',
    //               ano_conclusao2:'',
    //               periodo:''
    //               }

    // this.handleSubmit = this.handleSubmit.bind(this)
    // this.handleChange = this.handleChange.bind(this)

  }

  handleSubmit(e) {
    e.preventDefault()
    console.log('handlesubmit');
    console.log(JSON.stringify(this.state, null, 4))
    alert("Informações cadastradas!\n" + JSON.stringify(this.state, null, 4));
  }

  handleChange(e) {
    const target = e.target
    const name = target.name
    const value = target.type === 'checkbox' ? target.checked : target.value
    this.setState(state => ({ [name]: value }))
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>



        { /* ----------------------------- */}
        { /*------ TEXTO INTRODUTÓRIO  --------- */}
        { /* ----------------------------- */}


        <Row>
          <Col span={12} offset>
            <div style={block}></div>
          </Col>
        </Row>
        <Row>
          <Col span={12}>
            <div style={block}>
              <div className="form-group">
                <h1>
                  Complete seu cadastro para ganhar pontos e se destacar mais para as empresas </h1>
                <br />
              </div>
            </div>
          </Col>
        </Row>



        { /* ---------------------- */}
        { /*------ BOTÕES --------- */}
        { /* ---------------------- */}
        <div className="container">
          <Row>
            <Col span={6}>
              <div style={block}>
                <Button >
                  <Link to="/vagas_educacao">
                    <a className="nav-link js-scroll-trigger">Histórico Acadêmico</a>
                  </Link>
                </Button>
              </div>
            </Col>
            <Col span={6}>
              <div style={block}>
                <Button >
                  <Link to="/vagas_profissao">
                    <a className="nav-link js-scroll-trigger">Histórico Profissional</a>
                  </Link>
                </Button>
              </div>
            </Col>
          </Row>
        </div>

      </form>
    )
  }
}



function Row(props) {
  return (
    <div className='section group'>{props.children}</div>
  )
}

function Col({ span, offset = false, children }) {
  let colClass = `col span_${span}_of_12`
  colClass = offset ? colClass + ' offset' : colClass
  return (
    <div className={colClass}>{children}</div>
  )
}

export default Vagas_principal;
