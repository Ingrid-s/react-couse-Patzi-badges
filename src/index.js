//const element = document.createElement('h1');
//element.innerText ="Hello, Platzi Badges again";

//const container = document.getElementById('app');
//container.appendChild(element);

import React from 'react';
import ReacDom from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './global.css';
import App from './Components/App';
//import Badge from './Components/Badge';

//const element = <h1>Hello Platzi Badges</h1>
//alternativa a la lìnea de còdigo anterior:
/*const element = React.createElement('a',
 { href: 'https://google.com'},
  'Ir a google');*/

  //const name = 'Rocìo'
  
//   const element = React.createElement(
//       'h1',
//       {},
//       `hola soy ${name}`
//   )


//entre llaves podemos incluir expresiones js, sòlo se veràn los valores que den true, no false, null ni undefined!!!
//const sum = () => 50 + 2;
//const jsx = <h1>Hola soy, {sum()}</h1>

        /////CON JSX
// const jsx = (<div>
//     <h1>Hola, soy Ingrid</h1>
//     <p>Soy front-end Developer</p>
// </div>);

        ///// SIN JSX
// const element = React.createElement(
//     'div',
//     {},
//     React.createElement('h1', {}, 'Hola, soy Ingrid'),
//     React.createElement('p', {}, 'Soy front-end Developer')
// )
const container = document.getElementById('app');

//ReacDom.render(__què queremos renderizar ___dònde lo queremos mostrar)
ReacDom.render(<App />, container);