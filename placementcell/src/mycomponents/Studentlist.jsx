import {Container} from 'react-bootstrap';
import {useState,useEffect} from 'react';
import {fetchStudents} from '../services/studentservices.js';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import {deleteStudent} from '../services/studentservices.js';
import {saveStudents} from '../services/studentservices.js';
import "../css/studentlist.css"

import {useNavigate } from "react-router-dom";



export function Studentlist(){
    
    
       const [students,setStudents]=useState([]);
    
    const navigate = useNavigate();


    
    async function populatestudentstate(){
        try{
          const data = await fetchStudents();  
            setStudents(data.students);
        }catch(error){
            console.log(error);
        }
    }
    useEffect(()=>{
        populatestudentstate();
    },[]);
           
    
    
 async function handledelete(prn) {
    try{
        await  deleteStudent(prn);
                populatestudentstate();
       
    }catch(error){
        console.log(error);
    }
}
    return(        
         <Table className="custom-table mt-4" >

      <thead>
        <tr>
        
          <th>PRN</th>
          <th>Full Name</th>
          <th>MailId</th>
          <th>PassWord</th>
          <th>Centre</th>
          <th>Year</th>
          <th>CGPA</th>
        </tr>
      </thead>
      <tbody>{
              students.map((s) => {
              return(
                 
                <tr >  
                  <td>{s.prn}</td>
                  <td>{s.name}</td>
                  <td>{s.email}</td>
                  <td>{s.password}</td>
                  <td>{s.year}</td>
                  <td>{s.centre}</td>
                  <td>{s.cgpa}</td>
                      <td>
                          <Button variant="outline-danger" onClick = {()=>{
                                  handledelete(s.prn)}
                                                                   } >Delete</Button>{' '}
                          <Button variant="outline-info" onClick = {()=>{
                                   
                                 navigate('/studentedit/${s.prn}') }          }>Edit</Button>{' '}
                                 
                      </td>                                
              </tr>
              )
            })
          }
       
      
        
      </tbody>
    </Table>
    );
}