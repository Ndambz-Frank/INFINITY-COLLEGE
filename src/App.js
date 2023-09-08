// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

import React from "react";

import Forms from "./components/ourcomponents";

import Footer from "./components/footer";

import Section from "./components/mainsection";

import 'bootstrap/dist/css/bootstrap.min.css';

const App = ()=> {
  return (
    <div>
      <Forms />
      <Section />
      <Footer />
    </div>
  );
}

export default App;
