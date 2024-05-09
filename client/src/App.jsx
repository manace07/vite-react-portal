import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Dashboard from './component/Dashboard';
import Layout from './component/share/Layout';
import Login from './pages/Login';

export default function App() {
return (
<Router>
  <Routes>
    <Route path='/' element={<Login />}>
    <Route path="/Layout" element={<Layout />}>
    <Route index element={<Dashboard />} />
    </Route>
    </Route>
  </Routes>
</Router>
)
}
