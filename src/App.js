import { useState } from 'react'
import NavBar from './NavBar/NavBar'
import ItemListContainer from '../src/Components/ItemListContainer'
//import ItemCount from './Components/ItemCount';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';




function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer />
    </div>
  );
}

export default App;
