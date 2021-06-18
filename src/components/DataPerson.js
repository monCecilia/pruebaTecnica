import React from "react";
import { useState, useEffect } from "react";
import { Row, Col, Navbar, Button, Table } from "react-bootstrap";
import Container from 'react-bootstrap/Container';
import List from "./List";

function DataPerson({ loading }) {
  const [dataState, setDataState] = useState(null);


  useEffect(() => {
    getInfo();
  }, [loading]);

  const getInfo = () => {
    fetch("https://randomuser.me/api/?results=100")
      .then((response) => response.json())
      .then((personData) => setDataState(personData));
  };
  
  
  if (dataState === null) {
    return <p>Loading ...</p>;
  }
  
  // const personList = Object.keys(dataState.results).map((person, item) => { 
  //  <List key={person} photo={dataState.results[item.thumbnail]} name={item.first[person]} />
  //   console.log(person);
  // });


  // const personList = Object.keys(dataState.results).map((person, i) => { 
  //   <List key={i} photo={dataState.results[person].picture.thumbnail} name={dataState.results[person].name.first} />
  //  });
  //  console.log(personList);
  
  const personList = dataState.results.map((person) => <List 
  photo={person.picture.thumbnail} 
  name={person.name.first} 
  surname={person.name.last} 
  country={person.location.country} />);
  
  
  return (
    <Container>
      <Row>
        <Col>
          <Navbar bg="light">
            <Navbar.Brand>Interview Task</Navbar.Brand>
            <Button
              variant="outline-secondary"
              //   disabled={isLoading}
              //   onClick={!isLoading ? handleClick : null}
            >
              Colored Rows
            </Button>
            <Button
              variant="outline-secondary"
              //   disabled={isLoading}
              //   onClick={!isLoading ? handleClick : null}
            >
              Sort by country
            </Button>
            <Button
              variant="outline-secondary"
              //   disabled={isLoading}
              //   onClick={!isLoading ? handleClick : null}
            >
              Restore
            </Button>
          </Navbar>
        </Col>
      </Row>
      <Table striped bordered>
          <thead>
            <tr>
              <th>Photo</th>
              <th>Name</th>
              <th>Surname</th>
              <th>Country</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
              {personList}
              <Button
              variant="outline-secondary"
              //   disabled={isLoading}
              //   onClick={!isLoading ? handleClick : null}
            > 
            Delete
          </Button>
          </tbody>
        </Table>
    </Container>
  );
}

export default DataPerson;
