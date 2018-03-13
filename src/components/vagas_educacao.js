import React, { Component } from 'react';
import styled, { css } from 'styled-components';
import './vagas_educacao.css';

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


class Vagas_educacao extends Component {
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

        { /* -------------------------------- */ }
        { /*------ INSTITUIÇÃO E CURSO--------- */ }
        { /* -------------------------------- */ }

        <Row>
         <Col span={6}>
           <div style={block}>
           <Label>
             Instituição
             <Input
               type="text"
               name="instituicao"
               value={this.state.instituicao}
               onChange={this.handleChange}
             />
           </Label>
           </div>
         </Col>
         <Col span={6}>
           <div style={block}>
           <Label>
             Curso<br />
             <Input
               type="text"
               name="curso"
               value={this.state.curso}
               onChange={this.handleChange}
             />
           </Label>
           </div>
         </Col>
         </Row>


          { /* ----------------------------- */ }
          { /*------ ANO DE INICIO  --------- */ }
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
                          <label>
                            Ano de Início </label>
                            <br />
                      <select deafultvalue="blank"
                              style={{width:'100%'}}
                              className="selectbox day"
                              data-form-required-message="Campo obrigatório"
                              placeholder="Ano de inicio"
                              name="ano_inicio1"
                              id="ano_inicio1"
                              value={this.state.ano_inicio1}
                              onChange={this.handleChange}>
                          <option value="blank"></option>
                          <option value="1986">1986</option>
                          <option value="1987">1987</option>
                          <option value="1988">1988</option>
                          <option value="1989">1989</option>
                          <option value="1990">1990</option>
                          <option value="1991">1991</option>
                          <option value="1992">1992</option>
                          <option value="1993">1993</option>
                          <option value="1994">1994</option>
                          <option value="1995">1995</option>
                          <option value="1996">1996</option>
                          <option value="1997">1997</option>
                          <option value="1998">1998</option>
                          <option value="1999">1999</option>
                          <option value="2000">2000</option>
                          <option value="2001">2001</option>
                          <option value="2002">2002</option>
                          <option value="2003">2003</option>
                          <option value="2004">2004</option>
                          <option value="2005">2005</option>
                          <option value="2006">2006</option>
                          <option value="2007">2007</option>
                          <option value="2008">2008</option>
                          <option value="2009">2009</option>
                          <option value="2010">2010</option>
                          <option value="2011">2011</option>
                          <option value="2012">2012</option>
                          <option value="2013">2013</option>
                          <option value="2014">2014</option>
                          <option value="2015">2015</option>
                          <option value="2016">2016</option>
                          <option value="2017">2017</option>
                          <option value="2018">2018</option>
                         
                      </select>
                      </div>
                </div>
            </Col>
            </Row>
            <Row>
            <Col span={12}>
              <div style={block}>
                      <div className="form-group">
                          <label>
                            Ano de Conclusão</label>
                            <br />
                      <select deafultvalue="blank"
                              style={{width:'100%'}}
                              className="selectbox day"
                              data-form-required-message="Campo obrigatório"
                              placeholder="Ano de Conclusão"
                              name="ano_conclusao2"
                              id="ano_conclusao2"
                              value={this.state.ano_conclusao2}
                              onChange={this.handleChange}>
                           <option value="blank"></option>
                           <option value="2000">2000</option>
                          <option value="2001">2001</option>
                          <option value="2002">2002</option>
                          <option value="2003">2003</option>
                          <option value="2004">2004</option>
                          <option value="2005">2005</option>
                          <option value="2006">2006</option>
                          <option value="2007">2007</option>
                          <option value="2008">2008</option>
                          <option value="2009">2009</option>
                          <option value="2010">2010</option>
                          <option value="2011">2011</option>
                          <option value="2012">2012</option>
                          <option value="2013">2013</option>
                          <option value="2014">2014</option>
                          <option value="2015">2015</option>
                          <option value="2016">2016</option>
                          <option value="2017">2017</option>
                          <option value="2018">2018</option>
                           
                        </select>
                      </div>
               </div>
            </Col>
            </Row>
            <Row>
            <Col span={12}>
              <div style={block}>
                      <div className="form-group">
                          <label>Período </label>
                            <br />
                            <select deafultvalue="blank"
                                    style={{width:'100%'}}
                                    className="selectbox day"
                                    data-form-required-message="Campo obrigatório"
                                    placeholder="Período"
                                    name="periodo"
                                    id="periodo"
                                    value={this.state.periodo}
                                    onChange={this.handleChange}>
                                        <option value="blank"></option>
                                        <option value="frontend">Matutino</option>
                                        <option value="backend">Vespertino</option>
                                        <option value="mobile">Noturno</option>
                                        <option value="iot">Integral</option>
                                   
                            </select>
                            
                      </div>
              </div>
            </Col>
            </Row>
            

           
          { /* ---------------------- */ }
          { /*------ BOTÕES --------- */ }
          { /* ---------------------- */ }
          <Row>
            <Col span={6}>
              <div style={block}>
                  <Button primary>Salvar</Button>
              </div>
            </Col>
            <Col span={6}>
              <div style={block}>
                 <Button>Cancelar</Button>
              </div>
            </Col>
          </Row>
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

export default Vagas_educacao;
