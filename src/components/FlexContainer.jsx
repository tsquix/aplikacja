import { Container, Row, Col, Card } from "react-bootstrap"; // Add this import statement
import React, { useReducer } from "react"; // Add useReducer import
import AppReducer from "../data/AppReducer"; // Add AppReducer import

export default function FlexContainer({ data }) {
  const Item = ({ name, id }) => (
    <Card style={{ width: `18rem` }} className="border mb-3 p-3 ms-3" key={id}>
      {name} {/* Display the name */}
    </Card>
  );
  return (
    <>
      <Container>
        <Row>
          {data.map((item) => (
            <Item key={item.id} name={item.name} id={item.id} />
          ))}
        </Row>
      </Container>
    </>
  );
}
