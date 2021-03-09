import {
  Container,
  Row,
  Button,
  InputGroup,
  FormControl,
} from "react-bootstrap";

function Header() {
  return (
    <header className="header">
      <Container>
        <Row className="headerRow">
          <h1>Youtube Theater</h1>
          <InputGroup className="mb-3">
            <InputGroup.Prepend>
              <Button variant="secondary">Search</Button>
            </InputGroup.Prepend>
            <FormControl aria-describedby="basic-addon1" />
          </InputGroup>
        </Row>
      </Container>
    </header>
  );
}

export default Header;
