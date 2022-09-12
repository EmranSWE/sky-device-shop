import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header';
import Shop from './Components/Shop/Shop';
import { Route, Routes } from 'react-router-dom';
import Orders from './Components/orders/Orders';
import Inventory from './Components/Inventory/Inventory';
import FileNotFound from './Components/FileNotFound/FileNotFound';
import About from './Components/About/About'
function App() {
  return (
    <div >
      <Header></Header>
      <Routes>
        <Route path='/' element={<Shop></Shop>}></Route>
        <Route path='/home' element={<Shop></Shop>}></Route>
        <Route path='/orders' element={<Orders></Orders>}></Route>
        <Route path='/inventory' element={<Inventory></Inventory>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='*' element={<FileNotFound></FileNotFound>}></Route>

      </Routes>
     
    </div>
  );
}

export default App;
