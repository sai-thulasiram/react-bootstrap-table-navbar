import React, { useEffect, useState } from 'react';
import { Navbar, Form, FormControl, Button, Table } from 'react-bootstrap';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const API = 'https://akkz2jpx61.execute-api.ap-south-1.amazonaws.com/dev/covid/zonebreachers';

const colData = [
  {
    colName: 'User',
    colValue: 'suspectName'
  },
  {
    colName: 'Phone Number',
    colValue: 'phoneNumber'
  },
  {
    colName: 'Registration Id',
    colValue: 'registrationID'
  },
  {
    colName: 'Distance from Registered Location (km)',
    colValue: 'distanceFromBaseLocation'
  },
  {
    colName: 'Breach Type',
    colValue: 'zoneBreachType'
  }
];

function App() {

  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch(API).then(resp => resp.json()).then (retVal => setUsers(retVal.body));
  })

  return (
    <div>
     <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">
          <img
            alt=""
            src={require("./logo.png")}
            width="50"
            height="50"
            className="d-inline-block"
          />{' '}&nbsp;&nbsp;
          Quarantine Data
        </Navbar.Brand>
        {/* <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-info">Search</Button>
        </Form> */}
 
      </Navbar>
        <h4>
            List of users breached respective Quarantine Zones
        </h4>
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            {
              colData.map(header => {
                return (<th>{header.colName}</th>);
              })
            }
          </tr>
        </thead>
        <tbody>
          { 
            users.map(row => {
              return(<tr>
                { colData.map(header => {
                  return (<th>{row[header.colValue]}</th>);
                })}
              </tr>);
            })
          }
        </tbody>
      </Table>
    </div>
  );
}

export default App;
