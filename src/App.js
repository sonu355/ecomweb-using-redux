import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import Product from './components/Product';
import Dashboard from './components/Dashboard';
import Cart from './components/Cart';
import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from 'react-router-dom';

function App() {
  const route = createBrowserRouter(createRoutesFromElements(
      <Route>
        <Route index element={<Dashboard />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
      </Route>
  ));

  return (
    <div className="App">
      <Product />
    </div>
  );
}

export default App;
