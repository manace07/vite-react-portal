import React, { useState, useEffect } from "react";
import { TextField, Table, TableContainer, TableHead, TableBody, TableRow, TableCell, Paper, TablePagination } from "@mui/material";

const IssuesTable = ({ rows = [], onItemCount }) => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [searchTerm, setSearchTerm] = useState("");
  const [options, setOptions] = useState([]);
  const [selectedOptions, setSelectedOptions] = useState({});

  // Pagination
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  // Rows per page
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  // Fetch options
  useEffect(() => {
    fetchOptions();
  }, []);

  const fetchOptions = async () => {
    try {
      const response = await fetch('http://localhost:5000/tables');
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      setOptions(data);
      // Update item count
      if (onItemCount) {
        onItemCount(data.length);
      }
    } catch (error) {
      console.error('Error fetching options:', error);
    }
  };

  // Delete function
  const deleteTable = async(id) => {
    try {
        const deleteTable = await fetch(`http://localhost:5000/tables/${id}`, {
            method: "DELETE"
        });
        setOptions(options.filter(issues_n_reports => issues_n_reports.id !== id));
        // Update item count
        if (onItemCount) {
          onItemCount(options.length - 1);
        }
    } catch (error) {
        console.error(error.message)
    }
  };

  // Select function
  const handleStatusChange = (event, id) => {
    const selectedStatus = event.target.value;
    setSelectedOptions((prevSelectedOptions) => ({
      ...prevSelectedOptions,
      [id]: selectedStatus,
    }));
  };

  // Filter rows based on the search term
  const filteredRows = options.filter(row =>
    row.id.toString().toLowerCase().includes(searchTerm.toLowerCase()) ||
    row.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div style={{ marginTop: 20 }}>
      <TextField
        label="Search"
        variant="outlined"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        fullWidth
        style={{ marginBottom: 20 }}
      />
      <TableContainer component={Paper} style={{ boxShadow: "0px 13px 20px 0px rgba(128, 128, 128, 0.29)" }}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell align="left">Title</TableCell>
              <TableCell align="left">Author</TableCell>
              <TableCell align="left">Remarks</TableCell>
              <TableCell align="left">Approve by</TableCell>
              <TableCell align="left">Date Created</TableCell>
              <TableCell align="left">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredRows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map(issues_n_reports => (
              <TableRow key={issues_n_reports.id}>
                <TableCell>{issues_n_reports.id}</TableCell>
                <TableCell>{issues_n_reports.title}</TableCell>
                <TableCell>{issues_n_reports.author}</TableCell>
                <TableCell>{issues_n_reports.remarks}</TableCell>
                <TableCell>{issues_n_reports.approve_by}</TableCell>
                <TableCell>{issues_n_reports.created_at}</TableCell>
                <TableCell>
                  <button className='btn bg-red-600 p-4' onClick={() => deleteTable(issues_n_reports.id)}>Delete</button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={filteredRows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </TableContainer>
    </div>
  );
};

export default IssuesTable;
