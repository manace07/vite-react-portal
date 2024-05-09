import React from 'react'
<<<<<<< HEAD
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Dashboard from './component/Dashboard';
import Login from './pages/Login';
import Layout from './component/share/Layout'
// import Register from './pages/Register';
=======
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
//import Dashboard from './component/Dashboard';
import Layout from './component/share/Layout';
//import Login from './pages/Login';
//import Registration from './pages/Registration';
import IssuesReports from './component/IssuesReports';
>>>>>>> maxiarbn/main

export default function App() {
return (
<Router>
  <Routes>
<<<<<<< HEAD
    <Route path="/" element={<Login />}>
    {/* <Route path="/register" element={<Register />} /> */}
    <Route path="/component" element={<Layout />} >
    <Route index element={<Dashboard />} />
    </Route>
    </Route>
=======
  {/* <Route index element={<Login />} /> */}
    <Route path="/" element={<Layout />}>   
       <Route index element={<IssuesReports/>} />   
      {/* <Route index element={<Dashboard />} />    */}
     {/* <Route path='Registration' element={<Registration />} />  */}
    {/* </Route> */}
    {/* </Route>    */}
       </Route>    
>>>>>>> maxiarbn/main
  </Routes>
</Router>
)
}