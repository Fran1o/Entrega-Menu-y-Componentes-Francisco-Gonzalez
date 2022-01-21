import logo from './logo.svg';
import './App.css';
import NavBar from './NavBar/NavBar'
import { ItemListContainer } from './Components/ItemListContainer'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react'

function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer greetings="ACA VOY A PONER UN SECTION O DIV CON IMAGENES DE LOS ARTICULOS MAS VENDIDOS O NOVEDADES, O SINO SACO LA SECCION BATERIAS DEL MENU Y LA PONGO ACA CON IMAGENES"/>
    </div>
  );
}

export default App;
