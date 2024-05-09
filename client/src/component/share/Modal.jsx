import React, { useState } from 'react';
import { Button, TextField, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';

const Modal = ({ isOpen, onClose, onSubmit }) => {
  const [formData, setFormData] = useState({
    title: '',
    author: '',
    remarks: '',
    approve_by: '',
  });

  // Handle change in text fields
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData(prevFormData => ({
      ...prevFormData,
      [name]: value
    }));
  };

  // Handle form submission
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/tables', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        // Handle successful response
        console.log('Form data submitted successfully');
      } else {
        // Handle error response
        console.error('Error submitting form data');
      }
    } catch (error) {
      console.error('Error submitting form data:', error);
    }
  };

  return (
    <Dialog open={isOpen} onClose={() => onClose && onClose()} aria-labelledby="form-dialog-title">
      <DialogTitle id="form-dialog-title">Fill in the details</DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          margin="dense"
          label="Title"
          type="text"
          fullWidth
          variant="outlined"
          name="title"
          value={formData.title}
          onChange={handleInputChange}
        />
        <TextField
          margin="dense"
          label="Author"
          type="text"
          fullWidth
          variant="outlined"
          name="author"
          value={formData.author}
          onChange={handleInputChange}
        />
        <TextField
          margin="dense"
          label="Remarks"
          type="text"
          fullWidth
          variant="outlined"
          name="remarks"
          value={formData.remarks}
          onChange={handleInputChange}
        />
        <TextField
          margin="dense"
          label="Approved By"
          type="text"
          fullWidth
          variant="outlined"
          name="approve_by"
          value={formData.approve_by}
          onChange={handleInputChange}
        />
        {/* <TextField
          margin="dense"
          label="Status"
          type="text"
          fullWidth
          variant="outlined"
          name="status"
          value={formData.status}
          onChange={handleInputChange}
        /> */}
      </DialogContent>
      <DialogActions>
        <Button onClick={() => onClose && onClose()} color="primary">Cancel</Button>
        <Button onClick={handleFormSubmit} color="primary">Submit</Button>
      </DialogActions>
    </Dialog>
  );
};


export default Modal;
