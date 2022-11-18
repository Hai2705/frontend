import './App.css';
import Home from './page/Home/Home';
import Login from './components/Login/Login';
// import PrivateRoute from './Ultis/PrivateRoute';
// import PublicRoute from './Ultis/PublicRoute';
// import axios from 'axios';
// import { getToken, removeUserSession, setUserSession } from './Ultis/Common';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Unisex from './Product/Unisex/Unisex'
import Female from './Product/Female/Female'
import Index from './Index/Index';
import Male from './Product/Male/Male';
import ContentP from './Index/ContentProduct/ContentP';
import SidebarP from './Index/SidebarProduct/SidebarP';
import Dior from './Product/Dior/Dior';
import VS from './Product/Victoria Sercet/VS'
import AD from './Product/AD/AD';
const Test = () => {
  return (
    <div>
    <Router>
      <Routes>
        <Route exact path="/index" element={<Index/>}>
        </Route>
          <Route path="/victoriasercet" element={<VS/>}>
          </Route>
          <Route path="/alexandria" element={<AD/>}>
          </Route>
          <Route path="/unisex" element={<Unisex/>}>
          </Route>
          <Route path="/female" element={<Female/>} >
          </Route>
          <Route path="/male" element={<Male/>}>
          </Route>
          <Route path="/dior" element={<Dior/>}>
          </Route>
        </Routes>
    </Router>
    {/* <ContentP/> */}
    </div>
  );
}
export default Test;
