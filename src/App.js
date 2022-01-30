import logo from './logo.svg';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import './App.css';
import NavBar from './Componentes/NavBar/NavBar';
import ItemListContainer from './Componentes/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './Componentes/ItemDetailContainer/ItemDetailContainer';
import Cartwidget from './Componentes/Cartwidget/Cartwidget';


function App() {
  return (
    
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <Routes>
          <Route exact path='/' element= {<ItemListContainer /> } />
          <Route exact path='/categoria/:idCategoria' element= {<ItemListContainer /> } />
          <Route exact path='/detalle/:idProducto' element= {<ItemDetailContainer /> } />
          <Route exact path='/carrito' element={<Cartwidget />} />
        </Routes>      
    </div>

    </BrowserRouter>
  );
}

export default App;
