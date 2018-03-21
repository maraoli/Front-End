import React, { Component } from 'react';
import styled, { css } from 'styled-components';
import './vagas_profissao.css';
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
}) `
  color: palevioletred;
  font-size: 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
  width: 100%;


  /* here we use the dynamically computed props */
  margin: ${props => props.margin};
  padding: ${props => props.padding};
`;


class Vagas_profissao extends Component {
  constructor(props) {
    super(props)
    this.state = {
      primeiro_nome: '',
      ultimo_nome: '',
      mini_bio: '',
      experiencia1: '',
      experiencia2: '',
      experiencia3: '',
      pais: 'br',
      estado: 'SP',
      cidade: 'SP',
      historia: '',
      recolocacao: true,
      experiencias: [
        {

        }
      ]
    }

    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)

  }

  addExperiencia() {
    var experiencias = this.state.experiencias;
    experiencias.push({});

    this.setState({
      experiencias: experiencias
    })
  }

  generateExperienceInputs() {
    var self = this;
    return this.state.experiencias.map(function (experiencia, index) {
      return (
        <div className="container-fluid">
          <Row>
          <Col span={6}>
            <div style={block}>
              <Label>
                Empresa
             <Input
                  type="text"
                  name="empresa_ultima_experiência"
                  value={experiencia.empresa_ultima_experiênci}
                  onChange={(e) => {
                    const target = e.target;
                    self.handleExperienceChanged(index, "empresa_ultima_experiência", target.value)
                  }}
                />
              </Label>
            </div>
          </Col>
          <Col span={6}>
            <div style={block}>
              <Label>
                Função<br />
                <Input
                  type="text"
                  name="funcao_ultima_experiência"
                  value={experiencia.funcao_ultima_experiência}
                  onChange={(e) => {
                    const target = e.target;
                    self.handleExperienceChanged(index, "funcao_ultima_experiência", target.value)
                  }}
                />
              </Label>
            </div>
          </Col>
          </Row>
          <Row>
          <Col span={12}>
            <div style={block}>
              <Label>
                Atividades Desenvolvidas<br />
                <TextArea 
                  type="text"
                  name="atividades_ultima_experiência"
                  value={experiencia.atividades_ultima_experiência}
                  onChange={(e) => {
                    const target = e.target;
                    self.handleExperienceChanged(index, "atividades_ultima_experiência", target.value)
                  }}
                />
              </Label>
            </div>
          </Col>
          </Row>
        </div>
      );
    })
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

  handleExperienceChanged(indice, propertyName, value) {
    let experiencias = this.state.experiencias;
    experiencias[indice][propertyName] = value;

    this.setState({
      experiencias: experiencias
    })
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>

        { /* -------------------------------- */}
        { /*------ NOME E SOBRENOME --------- */}
        { /* -------------------------------- */}

        <Row>
          <Col span={6}>
            <div style={block}>
              <Label>
                Primeiro Nome
             <Input
                  type="text"
                  name="primeiro_nome"
                  value={this.state.primeiro_nome}
                  onChange={this.handleChange}
                />
              </Label>
            </div>
          </Col>
          <Col span={6}>
            <div style={block}>
              <Label>
                Último Nome<br />
                <Input
                  type="text"
                  name="ultimo_nome"
                  value={this.state.ultimo_nome}
                  onChange={this.handleChange}
                />
              </Label>
            </div>
          </Col>
        </Row>

        { /* ------------------------------ */}
        { /*------ MINI BIOGRAFIA --------- */}
        { /* ------------------------------ */}

        <Row>
          <Col span={12}>
            <div style={block}>
              <Label>
                Fale um pouco sobre você
                <br />
                <TextArea
                  type="text"
                  name="mini_bio"
                  value={this.state.mini_bio}
                  onChange={this.handleChange}
                />
              </Label>
            </div>
          </Col>
        </Row>


        { /* ----------------------------- */}
        { /*------ EXPERIENCIAS  --------- */}
        { /* ----------------------------- */}

        <Row>
          <Col span={12}>
            <div style={block}>
              <Label>
                Tenho experiência como
                </Label>
            </div>
          </Col>

        </Row>
        { /*------ */}
        <Row>
          <Col span={12} offset>
            <div style={block}></div>
          </Col>
        </Row>
        <Row>
          <Col span={12}>
            <div style={block}>
              <div className="form-group">
                <select deafultvalue="blank"
                  style={{ width: '100%' }}
                  className="selectbox day"
                  data-form-required-message="Campo obrigatório"
                  placeholder="Nível de experiência"
                  name="experiencia1"
                  id="experiencia1"
                  value={this.state.experiencia1}
                  onChange={this.handleChange}>
                  <option value="blank"></option>
                  <option value="junior">Junior</option>
                  <option value="senior">Sênior</option>
                  <option value="pleno">Pleno</option>
                  <option value="outros">Outros</option>
                </select>
              </div>
            </div>
          </Col>
        </Row>
        <Row>
          <Col span={12}>
            <div style={block}>
              <div className="form-group">
                <select deafultvalue="blank"
                  style={{ width: '100%' }}
                  className="selectbox day"
                  data-form-required-message="Campo obrigatório"
                  placeholder="Função"
                  name="experiencia2"
                  id="experiencia2"
                  value={this.state.experiencia2}
                  onChange={this.handleChange}>
                  <option value="blank"></option>
                  <option value="frontend">Front-End</option>
                  <option value="backend">Back-End</option>
                  <option value="mobile">Mobile</option>
                  <option value="iot">IOT</option>
                  <option value="oux">UX</option>
                </select>
              </div>
            </div>
          </Col>
        </Row>
    
       

        { /* ------------------------------------- */}
        { /*------ PAIS, ESTADO E CIDADE --------- */}
        { /* ------------------------------------- */}

        <Row>
          <Col span={12}>
            <div style={block}>
              <Label>
                Pais
                        <div className="form-group">
                  <select
                    className="selectbox day"
                    style={{ width: '80%' }}
                    data-form-required-message="Campo obrigatório"
                    placeholder="País"
                    name="pais"
                    id="pais"
                    value={this.state.pais}
                    onChange={this.handleChange}>
                    <option value="br">Brazil</option>
                    <option value="an">Angola</option>
                    <option value="mo">Moçambique</option>
                    <option value="pt">Portugal</option>
                    <option value="outros">Outros</option>
                  </select>
                </div>
              </Label>
            </div>
          </Col>
        </Row>
        <Row>
          <Col span={12}>
            <div style={block}>
              <Label>
                Estado
                  <div className="form-group">
                  <select
                    className="selectbox day"
                    style={{ width: '80%' }}
                    data-form-required-message="Campo obrigatório"
                    placeholder="Função"
                    name="estado"
                    id="estado"
                    value={this.state.estado}
                    onChange={this.handleChange}>
                    <option value="AC">Acre</option>
                    <option value="AL">Alagoas</option>
                    <option value="AP">Amapá</option>
                    <option value="AM">Amazonas</option>
                    <option value="BA">Bahia</option>
                    <option value="CE">Ceará</option>
                    <option value="DF">Distrito Federal</option>
                    <option value="ES">Espírito Santo</option>
                    <option value="GO">Goiás</option>
                    <option value="MA">Maranhão</option>
                    <option value="MT">Mato Grosso</option>
                    <option value="MS">Mato Grosso do Sul</option>
                    <option value="MG">Minas Gerais</option>
                    <option value="PA">Pará</option>
                    <option value="PB">Paraíba</option>
                    <option value="PR">Paraná</option>
                    <option value="PE">Pernambuco</option>
                    <option value="PI">Piauí</option>
                    <option value="RJ">Rio de Janeiro</option>
                    <option value="RN">Rio Grande do Norte</option>
                    <option value="RS">Rio Grande do Sul</option>
                    <option value="RO">Rondônia</option>
                    <option value="RR">Roraima</option>
                    <option value="SC">Santa Catarina</option>
                    <option value="SP">São Paulo</option>
                    <option value="SE">Sergipe</option>
                    <option value="TO">Tocantins</option>
                  </select>
                </div>
              </Label>
            </div>
          </Col>
        </Row>
        <Row>
          <Col span={12}>
            <div style={block}>
              <Label>
                Cidade
                             <div className="form-group">
                  <select
                    className="selectbox day"
                    style={{ width: '80%' }}
                    data-form-required-message="Campo obrigatório"
                    placeholder="Função adicional"
                    name="cidade"
                    id="cidade"
                    value={this.state.cidade}
                    onChange={this.handleChange}>
                    <option value="SP">São Paulo</option>
                    <option value="BA">Bauru</option>
                    <option value="UB">Ubatuba</option>
                    <option value="CA">Campinas</option>
                    <option value="IL">Ilha Solteira</option>
                    <option value="SA">São José dos Campos</option>
                  </select>
                </div>
              </Label>
            </div>
          </Col>
          <Col span={4} offset >
            <div style={block}></div>
          </Col>
        </Row>

        { /* ------------------------------------- */}
        { /*------ CAMPO PROFISSIONAL --------- */}
        { /* ------------------------------------- */}

        {this.generateExperienceInputs()}

        <Row>
          <Col span={12}>
            <div style={block}>
              <Button onClick={() => { this.addExperiencia() }}>Add +</Button>
            </div>
          </Col>
        </Row>

        { /* ------------------------------------- */}
        { /*------ RECOLOCAÇÃO ------------------- */}
        { /* ------------------------------------- */}


        <Row>
          <Col span={12}>
            <div style={block}>
              <Label>
                Estou aberta para recolocação
                      <Input
                  name="recolocacao"
                  type="checkbox"
                  checked={this.state.recolocacao}
                  onChange={this.handleChange} />
              </Label>
            </div>
          </Col>
        </Row>

        <Row>
          <Col span={12}>
            <div style={block}>
              <Label>
                Conte mais sobre as suas experiências profissionais<br />
                <TextArea
                  type="text"
                  name="historia"
                  value={this.state.historia}
                  onChange={this.handleChange}
                />
              </Label>
            </div>
          </Col>
        </Row>

        { /* ---------------------- */}
        { /*------ BOTÕES --------- */}
        { /* ---------------------- */}
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

export default Vagas_profissao;
