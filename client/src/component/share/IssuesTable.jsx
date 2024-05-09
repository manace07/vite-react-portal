import React, { useState } from "react";
import { TextField, Table, TableContainer, TableHead, TableBody, TableRow, TableCell, Paper, TablePagination } from "@mui/material";

const IssuesTable = ({ rows = [] }) => {  //
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [searchTerm, setSearchTerm] = useState("");

  // Filter rows based on the search term
  
  const filteredRows = rows.filter(row =>
    Object.values(row).join(" ").toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  // Dynamic styling based on status
  const makeStyle = (status) => ({
    Approved: { background: 'rgb(145 254 159 / 47%)', color: 'green' },
    Pending: { background: '#ffadad8f', color: 'red' },
    Delivered: { background: '#59bfff', color: 'white' },
  }[status] || {});

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
              <TableCell>Title</TableCell>
              <TableCell align="left">Author</TableCell>
              <TableCell align="left">Remarks</TableCell>
              <TableCell align="left">Status</TableCell>
              <TableCell align="left">Created By</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredRows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row, index) => (
              <TableRow key={index}>
                <TableCell component="th" scope="row">{row.title}</TableCell>
                <TableCell>{row.author}</TableCell>
                <TableCell>{row.remarks}</TableCell>
                <TableCell>
                  <span style={makeStyle(row.status)}>{row.status}</span>
                </TableCell>
                <TableCell>{row.createdby}</TableCell>
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
