import {Container} from 'react-bootstrap';
import {useState,useEffect} from 'react';

import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import {fetchCell, fetchjobs} from '../services/cellsservices.js';
import {saveCell} from '../services/cellsservices.js';
import {deleteCell} from '../services/cellsservices.js';
import Alert from 'react-bootstrap/Alert';




export function Celllist(){
    
       const [cells,setCells]=useState([]);
    
    async function populatecellstate(){
        try{
          const cdata = await fetchCell();  
            setCells(cdata.cells);
        }catch(error){
            console.log(error);
        }
    }
    useEffect(()=>{
       populatecellstate()
    },[]);
           
    
 async function handlecelldelete(cellemail) {
    try{
        await  deleteCell(cellemail);
                populatecellstate()
       
    }catch(error){
        console.log(error);
    }
}   

    return(        
         <Table className="mt-4">

      <thead>
        <tr>
        
          
          <th>Company Name</th>
          <th>MailId</th>
          <th>PassWord</th>
          <th>Location</th>
          
        </tr>
      </thead>
      <tbody>{
              cells.map((c) => {
              return(
                 
                <tr>  
                  
                  <td>{c.cellname}</td>
                  <td>{c.cellemail}</td>
                  <td>{c.cellpassword}</td>
                  <td>{c.celllocation}</td>
                 
                <td>
                          <Button variant="outline-danger" onClick = {()=>{
                                  handlecelldelete(c.cellemail)}
                                                                   } >Delete</Button>{' '}
                          
                </td>
              </tr>
              )
            })
          }
       
      
        
      </tbody>
    </Table>
    );
}