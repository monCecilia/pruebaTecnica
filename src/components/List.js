import React from "react";
import { Row, Col, Navbar, Button, Table } from "react-bootstrap";
const List = (props) => {
  return (
    <React.Fragment>
      <Row>
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
            <tr>
              <td>
                <img src={props.photo}></img>
              </td>
              <td>{props.name}</td>
              <td>{props.surname}</td>
              <td>{props.country}</td>
              <Button
                variant="outline-secondary"
                //   disabled={isLoading}
                //   onClick={!isLoading ? handleClick : null}
              >
                Delete
              </Button>
            </tr>
          </tbody>
        </Table>
      </Row>
    </React.Fragment>
  );
};
export default List;
{
  /* <div>{props.picture.thumbnail}</div>
<div>{props.name.first}</div>
<div>{props.name.last}</div>
<div>{props.location.country}</div> */
}
