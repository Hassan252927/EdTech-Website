import React, { useEffect, useState } from 'react';
import axios from 'axios';

const StudentsTable = () => {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch data from your API
    const fetchStudents = async () => {
      try {
        // PORT no - login-register-backend
        const response = await axios.get('http://localhost:5173/api/users', {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}` // Adjust token retrieval as needed
          }
        });
        setStudents(response.data);
        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    };

    fetchStudents();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error fetching data: {error.message}</p>;

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Student Data</h1>
      <table style={styles.table}>
        <thead>
          <tr style={styles.tableHeaderRow}>
            <th style={styles.tableHeader}>ID</th>
            <th style={styles.tableHeader}>Name</th>
            <th style={styles.tableHeader}>Email</th>
            <th style={styles.tableHeader}>Phone</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr key={student._id} style={styles.tableRow}>
              <td style={styles.tableCell}>{student._id}</td>
              <td style={styles.tableCell}>{student.name}</td>
              <td style={styles.tableCell}>{student.email}</td>
              <td style={styles.tableCell}>{student.phone}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const styles = {
  container: {
    fontFamily: 'Arial, sans-serif',
    margin: '20px'
  },
  heading: {
    fontSize: '24px',
    marginBottom: '20px'
  },
  table: {
    width: '100%',
    borderCollapse: 'collapse'
  },
  tableHeaderRow: {
    backgroundColor: '#f4f4f4'
  },
  tableHeader: {
    padding: '10px',
    border: '1px solid #ddd',
    textAlign: 'left',
    color: '#333'
  },
  tableRow: {
    '&:hover': {
      backgroundColor: '#f9f9f9'
    }
  },
  tableCell: {
    padding: '10px',
    border: '1px solid #ddd'
  }
};

export default StudentsTable;
