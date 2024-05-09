const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

//CREATE
app.post("/tables", async (req, res) => {
    try {
        const { title, author, remarks, report_status, approve_by } = req.body;
        const newTable = await pool.query(
            "INSERT INTO issues_n_reports (title, author, remarks, approve_by) VALUES($1, $2, $3, $4) RETURNING *",
            [title, author, remarks, approve_by]
        );
        res.json(newTable.rows[0]);
    } catch (error) {
        console.error(error.message);
    }
})

//GET ALL
app.get("/tables", async (req, res) => {
    try {
        const allTable = await pool.query("SELECT * FROM issues_n_reports");
        res.json(allTable.rows)

    } catch (error) {
        console.error(error.message)
    }
})

//UPDATE
app.put("/tables/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const { title, author, remarks, approve_by } = req.body;
        const updateTable = await pool.query(
            "UPDATE issues_n_reports SET title = $1, author = $2, remarks = $3, approve_by = $4 WHERE id = $5",
            [title, author, remarks, approve_by, id]
        );
        res.json("Table was updated");
    } catch (error) {
        console.error(error.message);
    }
})

//DELETE
app.delete("/tables/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const deleteTable = await pool.query("DELETE FROM issues_n_reports WHERE id = $1", [id]);
        res.json("Table was deleted");
    } catch (error) {
        console.error(error.message);
    }
})

//LISTEN
app.listen(5000, () => {
    console.log("server has started on port 5000");
})