// ParentComponent.jsx
import React, { useState } from 'react';
import Modal from './Modal';  // Import the Modal
import IssuesTable from './IssuesTable';  // Import the IssuesTable

const ParentComponent = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [rows, setRows] = useState([]);

    const handleOpenModal = () => setIsModalOpen(true);
    const handleCloseModal = () => setIsModalOpen(false);

    const handleAddRow = (newRow) => {
        setRows(prevRows => [...prevRows, newRow]);
        handleCloseModal();
    };

    return (
        <div>
            <button onClick={handleOpenModal}>Add New Entry</button>
            <Modal isOpen={isModalOpen} onClose={handleCloseModal} onSubmit={handleAddRow} />
            <IssuesTable rows={rows} />
        </div>
    );
};

export default ParentComponent;
