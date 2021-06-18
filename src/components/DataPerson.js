import React from "react";
import { useMemo } from "react";
import { useState, useEffect, useCallback } from "react";
import { Row, Col, Navbar, Button, Table } from "react-bootstrap";
import Container from 'react-bootstrap/Container';
import List from "./List";

function DataPerson() {
  const [dataState, setDataState] = useState([]);

  useEffect(() => {
    getInfo();
  }, []);

  const getInfo = () => {
    fetch("https://randomuser.me/api/?results=100")
      .then((response) => response.json())
      .then((personData) => setDataState(personData.results));
  };

  const removePerson = useCallback((indexToRemove) => {
    const newPersonData = dataState.filter((obj, i) => i !== indexToRemove);
    setDataState(newPersonData)
  }, [dataState]);
  
  const personList = useMemo(() => {
    return dataState.map((person, key) => <List
      photo={person.picture.thumbnail} 
      name={person.name.first} 
      surname={person.name.last} 
      country={person.location.country}
      onDelete={() => {removePerson(key)}}
    />);
  }, [dataState, removePerson])

  if (dataState.length === 0) {
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
          </tbody>
        </Table>
    </Container>
  );
}

export default DataPerson;
