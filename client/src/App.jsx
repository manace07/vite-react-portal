import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
//import Dashboard from './component/Dashboard';
import Layout from './component/share/Layout';
//import Login from './pages/Login';
//import Registration from './pages/Registration';
import IssuesReports from './component/IssuesReports';

export default function App() {
return (
<Router>
  <Routes>
  {/* <Route index element={<Login />} /> */}
    <Route path="/" element={<Layout />}>   
       <Route index element={<IssuesReports/>} />   
      {/* <Route index element={<Dashboard />} />    */}
     {/* <Route path='Registration' element={<Registration />} />  */}
    {/* </Route> */}
    {/* </Route>    */}
       </Route>    
  </Routes>
</Router>
)
}
