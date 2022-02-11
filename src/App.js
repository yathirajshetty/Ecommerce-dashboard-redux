import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Header from '../src/Components/Header/Header';
import Dashboard from '../src/Pages/Dashboard/Dashboard';
import AddProduct from '../src/Pages/AddProduct/AddProduct';
import AddCategory from '../src/Pages/AddCategory/AddCategory';
import ViewProduct from '../src/Pages/ViewProduct/ViewProduct';
function App() {
  return (
    <div className="App">
    <Router>
      <Routes>
        <Route path='/' element={<Dashboard />} />
        <Route path='/addproduct' element={<AddProduct />} />
        <Route path='/addcategory' element={<AddCategory />} />
        <Route path='/viewproduct' element={<ViewProduct />} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
