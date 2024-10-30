import FlexContainer from "../components/FlexContainer";
import { Container, Row, Col, Card } from "react-bootstrap"; // Add this import statement
import { data } from "../data/module-data"; // Import the data

export default function Lab3() {
  const namesAndIds = data.map((item) => ({
    // Fetch name and id
    id: item.id,
    name: item.name,
  }));

  return <FlexContainer data={namesAndIds} />;
}
