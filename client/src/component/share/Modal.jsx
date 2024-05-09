import React, { useState } from 'react';
import { Button, TextField, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';

const Modal = ({ isOpen, onClose, onSubmit }) => {
  const [formData, setFormData] = useState({
    title: '',
    author: '',
    remarks: '',
    createdby: '',
    status: ''
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
  const handleSubmit = (event) => {
    event.preventDefault();
    if (typeof onSubmit === 'function') {
      onSubmit(formData);
      setFormData({ // Clear the form after submission
        title: '',
        author: '',
        remarks: '',
        createdby: '',
        status: ''
      });
    } else {
      console.error('No onSubmit function provided!');
    }
    if (typeof onClose === 'function') {
      onClose(); // Close the modal
    } else {
      console.error('No onClose function provided!');
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
          label="Created By"
          type="text"
          fullWidth
          variant="outlined"
          name="createdby"
          value={formData.createdby}
          onChange={handleInputChange}
        />
        <TextField
          margin="dense"
          label="Status"
          type="text"
          fullWidth
          variant="outlined"
          name="status"
          value={formData.status}
          onChange={handleInputChange}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={() => onClose && onClose()} color="primary">Cancel</Button>
        <Button onClick={handleSubmit} color="primary">Submit</Button>
      </DialogActions>
    </Dialog>
  );
};


export default Modal;
