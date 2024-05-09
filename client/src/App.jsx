import React from 'react'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import IssuesReport from './component/IssuesReports';
// import Dashboard from './component/Dashboard';
// import Login from './pages/Login';
import Layout from './component/share/Layout'

// import Register from './pages/Register';

export default function App() {
return (
<Router>
  <Routes>
    {/* <Route path="/" element={<Login />}> */}
    {/* <Route path="/register" element={<Register />} /> */}
    <Route path="/" element={<Layout />} >
    <Route index element={<IssuesReport />} />
    </Route>
    {/* </Route> */}
  </Routes>
</Router>
)
}