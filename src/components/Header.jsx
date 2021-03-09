import {
  Container,
  Row,
  Button,
  InputGroup,
  FormControl,
} from "react-bootstrap";
import { useState } from "react";

function Header(props) {
  const [searchInput, setInput] = useState("");

  return (
    <header className="header">
      <Container>
        <Row className="headerRow">
          <h1>Youtube Theater</h1>
          <InputGroup className="mb-3">
            <InputGroup.Prepend>
              <Button
                variant="secondary"
                onClick={() => props.searchHandler(searchInput)}
              >
                Search
              </Button>
            </InputGroup.Prepend>
            <FormControl
              aria-describedby="basic-addon1"
              onChange={(e) => setInput(e.target.value)}
            />
          </InputGroup>
        </Row>
      </Container>
    </header>
  );
}

export default Header;
