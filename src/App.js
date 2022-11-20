import './App.css';
// import Home from './Product/Home/Home';
import Index from './Index/Index';
import Home from './page/Home/Home';
import Login from './components/Login/Login';
// import PrivateRoute from './Ultis/PrivateRoute';
// import PublicRoute from './Ultis/PublicRoute';
// import axios from 'axios';
// import { getToken, removeUserSession, setUserSession } from './Ultis/Common';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import UserList from './page/UserList/UserList';
import User from './page/user/User';
import NewUser from './page/newUser/NewUser';
import ProductList from './page/productList/productList';
import Product from './page/product/Product';
import Test from './test';
import LoginIndex from './Product/Login/Login';
import Allproduct from './Product/All Product/Allproduct';
import OrderList from './page/OrderList/OrderList'
import Order from './page/Order/Order';
function App(){
  return (
    <div className="App">
      <Router>

            <Routes>
              <Route exact path="/" element={<Index/>}>
              </Route>
              <Route exact path="/admin" element={<Home/>}>
              </Route>
              <Route exact path="/product" element={<Allproduct/>}>
              </Route>
            <Route exact path="/signin" element={<LoginIndex/>}>
              </Route>
              <Route path="/login" element ={<Login />}>
              </Route>
              <Route path="/users" element={<UserList/>}>
              </Route>
              <Route path="/user/:userID" element={<User/>}>
              </Route>
              <Route path="/newUser" element={<NewUser/>}>
              </Route>
              <Route path="/products" element={<ProductList/>}>
              </Route>
              <Route path="/product/:productID" element={<Product/>}>
              </Route>
              <Route path="/newProduct" element={<ProductList/>}>
              </Route>
              <Route path="/orders" element={<OrderList/>}>
              </Route>
              <Route path="/order/:orderID" element={<Order/>}>
              </Route>
            </Routes>
    </Router>  
    <Test />
    </div>
  );
}
 
export default App;
