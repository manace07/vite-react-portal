import React from 'react';
import Card from '../component/share/Cards';
import Table1 from './share/IssuesTable';
<<<<<<< HEAD
import Table2 from './share/InventoryTable';
import Table3 from './share/SuppliersTable';
=======

//import Table2 from './share/InventoryTable';
//import Table3 from './share/SuppliersTable';
>>>>>>> maxiarbn/main

const Dashboard = () => {
  return (
    <div className='bg-white text-slate-500 p-10 '>
     <div className='TableContainer'> 
      <div className='Cardbox'>
        <Card/>
        <h1 className='Title'>Issues and Reports</h1>
        <Table1/>
<<<<<<< HEAD
        <h1 className='Title'> Inventory</h1>
        <Table2/>
        <h1 className='Title'>Suppliers</h1>
        <Table3/>
=======
        {/* <h1 className='Title'> Inventory</h1>
        <Table2/>
        <h1 className='Title'>Suppliers</h1>
        <Table3/> */}
>>>>>>> maxiarbn/main
      </div>
      </div>
     <div>
      
      </div>
    </div>
  )
}

export default Dashboard;
