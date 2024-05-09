CREATE TABLE issues_n_reports (
    id INT PRIMARY KEY,
    title VARCHAR(50),
    author VARCHAR(50),
    remarks VARCHAR(50),
    report_status VARCHAR(50),
    approve_by VARCHAR(50),
    created_at date default current_date
);

CREATE TABLE options (
    id INT PRIMARY KEY,
    report_status VARCHAR(50)
);

INSERT INTO issues_n_reports (report_status) VALUES
('Approved'),
('Pending'),
('Declined');