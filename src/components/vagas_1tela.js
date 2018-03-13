import React, { Component } from 'react';
import styled, { css } from 'styled-components';
import './vagas_1tela.css';

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

/*
const Select = styled.select`
              border-radius: 0px;
              padding: 0.25em 1em;
              margin: 0 1em;
              background: transparent;
              color: palevioletred;
              border: 0px solid palevioletred;

              ${props => props.primary && css`
                background: palevioletred;
                color: white;
        `}`;
*/

const Input = styled.input.attrs({
  // we can define static props
  type: '',
  // or we can define dynamic ones
  margin: props => props.size || '0.0em',
  padding: props => props.size || '0.0em'
  })`
  color: palevioletred;
  font-size: 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
  width: 100%;


  /* here we use the dynamically computed props */
  margin: ${props => props.margin};
  padding: ${props => props.padding};
`;


class Vagas_1tela extends Component {
  constructor(props) {
      super(props)
      this.state = {instituicao: '',
                    curso: '',
                    ano_inicio1: '',
                    ano_conclusao2:'',
                    periodo:''
                    }

      this.handleSubmit = this.handleSubmit.bind(this)
      this.handleChange = this.handleChange.bind(this)

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
      this.setState(state => ({[name] : value}))
    }

    render() {
      return (
        <form onSubmit={this.handleSubmit}>

 

          { /* ----------------------------- */ }
          { /*------ TEXTO INTRODUTÓRIO  --------- */ }
          { /* ----------------------------- */ }


          <Row>
          <Col span={12} offset>
             <div style={block}></div>
           </Col>
           </Row>
           <Row>
            <Col span={12}>
              <div style={block}>
                      <div className="form-group">
                          <p>
                            Complete seu cadastro para ganhar pontos e se destacar mais para as empresas </p>
                            <br />
                      </div>
                </div>
            </Col>
            </Row>
            

           
          { /* ---------------------- */ }
          { /*------ BOTÕES --------- */ }
          { /* ---------------------- */ }
          <Row>
            <Col span={12}>
              <div style={block}>
                  <Button >Histórico Acadêmico</Button>
              </div>
            </Col>
            <Col span={12}>
              <div style={block}>
                 <Button>Histórico Profissional</Button>
              </div>
            </Col>
          </Row>
          <Link to="/vagas">
            <a className="nav-link js-scroll-trigger">Histórico Acadêmico</a>
          </Link>
        </form>
      )
    }
  }



function Row (props) {
  return (
    <div className='section group'>{props.children}</div>
  )
}

function Col ({ span, offset = false, children }) {
  let colClass = `col span_${span}_of_12`
  colClass = offset ? colClass + ' offset' : colClass
  return (
    <div className={colClass}>{children}</div>
  )
}

export default Vagas_1tela;
