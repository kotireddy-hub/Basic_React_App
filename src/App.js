import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header/Header';

// function App() {
//   return (
//     <div className="App">
//      <h1>Interduction</h1>
//      <p>Thhis is a para</p>
//     </div>
//   );
// }
class App extends React.Component{
  render(){
  return (
        <div className="App">
          <Header />
        </div>
      );
  }
}

export default App;

// // two type component 
// 1.class component
// 2. function component
//Header component
//Content component
//footer 
