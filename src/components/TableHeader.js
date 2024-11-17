import { Dropdown } from "react-bootstrap";

export default function TableHeader({ sort, th }) {
  return (
    <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        {th}
      </Dropdown.Toggle>
      <Dropdown.Menu>
        <Dropdown.Item onClick={() => sort(`${th}SortASC`)}>
          sort asc
        </Dropdown.Item>
        <Dropdown.Item onClick={() => sort(`${th}SortDESC`)}>
          sort desc
        </Dropdown.Item>
        <Dropdown.Item onClick={() => sort(`sortNATURAL`)}>
          sort Natural
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}
