import { Container } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import { fetchjobs } from '../services/cellsservices.js';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';

export function Findjobs() {
  const [cells, setCells] = useState([]);

  async function populateCellState() {
    try {
      const cdata = await fetchjobs();
      setCells(cdata.cells);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    populateCellState();
  }, []);

  return (
    <Table className="mt-4">
      <thead>
        <tr>
          <th>Company Name</th>
          <th>Location</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {cells.map((c, index) => (
          <tr key={index}>
            <td>{c.companyName}</td>
            <td>{c.location}</td>
            {/* <td>
              <Button variant="outline-success">Apply Now</Button>{' '}
            </td> */}
          </tr>
        ))}

       
        <tr>
          <td>Wipro</td>
          <td>Pune</td>
          <td>
            <Button variant="outline-success">Apply Now</Button>{' '}
          </td>
        </tr>

        <tr>
          <td>Infosys</td>
          <td>Banglore</td>
          <td>
            <Button variant="outline-success">Apply Now</Button>{' '}
          </td>
        </tr>
        <tr>
          <td>Bank Of America</td>
          <td>Mumbai</td>
          <td>
            <Button variant="outline-success">Apply Now</Button>{' '}
          </td>

        </tr>
      </tbody>
    </Table>
  );
}
