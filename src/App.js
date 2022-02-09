import logo from './logo.svg';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import './App.css';
import NavBar from './Componentes/NavBar/NavBar';
import ItemListContainer from './Componentes/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './Componentes/ItemDetailContainer/ItemDetailContainer';
import Cart from './Componentes/Cart/Cart';
import CartContextProvider, {cartContext} from './Componentes/Context/CartContext';



function App() {

  return (
    
    <CartContextProvider>
      <BrowserRouter>
      <div className="App">
        <NavBar />
        <Routes>
          <Route exact path='/categoria/:idCategoria' element= {<ItemListContainer /> } />
          <Route exact path='/detalle/:idProducto' element= {<ItemDetailContainer /> } />
          <Route exact path='/carrito' element={<Cart />} /> 
          <Route exact path='*' element={<ItemListContainer />} />
        </Routes>      
    </div>
    </BrowserRouter>
    </CartContextProvider>
    
  );


}
  


export default App;
