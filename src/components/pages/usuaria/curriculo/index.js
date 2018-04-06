import React, { Component } from 'react';
import styled, { css } from 'styled-components';
// import './style.css';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Fragment
} from 'react-router-dom'

//FILES TEMP
import Navbar from '../Navbar';

// const block = {
//   backgroundColor: 'white',
//   textAlign: 'center',
//   margin: '0 auto'
// }

// const Label = styled.label`
//       border-radius: 0px;
//       padding: 0.25em 1em;
//       margin: 0 1em;
//       background: transparent;
//       color: palevioletred;
//       border: 0px solid palevioletred;
//       width: 100%;
//       margin: 0 auto;

//       ${props => props.primary && css`
//         background: palevioletred;
//         color: white;
//         margin: 0 auto;
// `}`;

// const TextArea = styled.textarea`
//       border-radius: 3px;
//       padding: 0.25em 1em;
//       margin: 0 0em;
//       width: 100%;
//       background: transparent;
//       color: palevioletred;
//       border: 2px solid palevioletred;
//       margin: 0 auto;

//       ${props => props.primary && css`
//         background: palevioletred;
//         color: white;
//         margin: 0 auto;
// `}`;

// const Button = styled.button`
//       border-radius: 3px;
//       padding: 0.25em 1em;
//       margin: 0 1em;
//       background: transparent;
//       color: palevioletred;
//       border: 2px solid palevioletred;

//         ${props => props.primary && css`
//           background: palevioletred;
//           color: white;
//         `}`;


// class Curriculo extends Component {
//   constructor(props) {
//     super(props)
//     // this.state = {instituicao: '',
//     //               curso: '',
//     //               ano_inicio1: '',
//     //               ano_conclusao2:'',
//     //               periodo:''
//     //               }

//     // this.handleSubmit = this.handleSubmit.bind(this)
//     // this.handleChange = this.handleChange.bind(this)

//   }

//   handleSubmit(e) {
//     e.preventDefault()
//     console.log('handlesubmit');
//     console.log(JSON.stringify(this.state, null, 4))
//     alert("Informações cadastradas!\n" + JSON.stringify(this.state, null, 4));
//   }

//   handleChange(e) {
//     const target = e.target
//     const name = target.name
//     const value = target.type === 'checkbox' ? target.checked : target.value
//     this.setState(state => ({ [name]: value }))
//   }

//   render() {
//     return (
//       <div>
//         <Navbar />
//         <form onSubmit={this.handleSubmit}>



//           { /* ----------------------------- */}
//           { /*------ TEXTO INTRODUTÓRIO  --------- */}
//           { /* ----------------------------- */}


//           <Row >
//             <Col span={12} offset >
//               <div style={block}></div>
//             </Col>
//           </Row>
//           <Row>
//             <Col span={12} >
//               <div style={block} >
//                 <div className="form-group">
//                   <h1>Complete seu cadastro para ganhar pontos e se destacar mais para as empresas </h1>
//                 </div>
//               </div>
//             </Col>
//           </Row>



//           { /* ---------------------- */}
//           { /*------ BOTÕES --------- */}
//           { /* ---------------------- */}
//           <div id="#secao-2-curriculo">
//             <Row>
//               <Col span={6}>
//                 <div style={block}>
//                   <Button >
//                     <Link to="/academico">
//                       <a className="nav-link js-scroll-trigger">Histórico Acadêmico</a>
//                     </Link>
//                   </Button>
//                 </div>
//               </Col>
//               <Col span={6}>
//                 <div style={block}>
//                   <Button >
//                     <Link to="/profissional">
//                       <a className="nav-link js-scroll-trigger">Histórico Profissional</a>
//                     </Link>
//                   </Button>
//                 </div>
//               </Col>
//             </Row>
//           </div>

//         </form>
//       </div>
//     )
//   }
// }



// function Row(props) {
//   return (
//     <div className='section group'>{props.children}</div>
//   )
// }

// function Col({ span, offset = false, children }) {
//   let colClass = `col span_${span}_of_12`
//   colClass = offset ? colClass + ' offset' : colClass
//   return (
//     <div className={colClass}>{children}</div>
//   )
// }
class Curriculo extends Component {
  constructor(props) {
      super(props);
  }

  render() {
      return (
          <React.Fragment>
              <Navbar/>
              <h1 className="secao-1-curriculo">Complete seu cadastro para ganhar pontos e se destacar mais para as empresas </h1>
              <div className="secao-2-curriculo">
                <button id="botao" className="botao2">
                  <Link to="/academico">
                      <a className="nav-link js-scroll-trigger">Histórico Acadêmico</a>
                  </Link>
                </button>
                <button id="botao" className="botao2" >
                  <Link to="/profissional">
                      <a  className="nav-link js-scroll-trigger">Histórico Profissional</a>
                  </Link>
                </button>
              </div>
          </React.Fragment>
        );
    }
} 


export default Curriculo;
