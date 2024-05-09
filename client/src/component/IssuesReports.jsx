import React, { useState } from 'react';
import BasicTable from './share/IssuesTable';
import Modal from './share/Modal';

const IssuesReport = () => {
  const [itemCount, setItemCount] = useState(0);
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className='bg-white text-slate-500 p-10'>
      <div className='flex justify-end items-center'>
        <button className='nbutton flex bg-blue-700 text-white px-2 py-1 rounded-sm absolute text-xl' onClick={openModal}>+New</button>
      </div>
      <div className='TableContainer'> 
        <h1 className='ItemsLogged'>Number of Items Logged: {itemCount}</h1>
        <BasicTable onItemCount={setItemCount} />
      </div>
      
      {/* Modal */}
      <Modal isOpen={showModal} onClose={closeModal} />
    </div>
  );
}

export default IssuesReport;
