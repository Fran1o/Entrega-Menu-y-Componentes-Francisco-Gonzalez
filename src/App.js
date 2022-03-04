import {BrowserRouter, Route, Routes} from 'react-router-dom'
import './App.css';
import NavBar from './Componentes/NavBar/NavBar';
import ItemListContainer from './Componentes/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './Componentes/ItemDetailContainer/ItemDetailContainer';
import Cart from './Componentes/Cart/Cart';
import Form from './Componentes/Form/Form';
import CartContextProvider from './Componentes/Context/CartContext';



function App() {

  return (
    
    <CartContextProvider>
      <BrowserRouter>
      <div className="App">
        <NavBar />
        <Routes>
          <Route exact path='/category/:idCategory' element= {<ItemListContainer /> } />
          <Route exact path='/detalle/:idProduct' element= {<ItemDetailContainer /> } />
          <Route exact path='/cart' element={<Cart />} />
          <Route exact path='/form' element={<Form />} /> 
          <Route exact path='*' element={<ItemListContainer />} />
        </Routes>      
    </div>
    </BrowserRouter>
    </CartContextProvider>
    
  );


}
  


export default App;
