import { useState } from 'react'
import NavBar from './NavBar/NavBar'
import { ItemListContainer } from './Components/ItemListContainer'
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Components/ItemCount';


function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer />
      
    </div>
  );
}

export default App;
