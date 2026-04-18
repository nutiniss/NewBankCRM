import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Outlet, Link } from 'react-router-dom';
import Image from 'react-bootstrap/Image';

export function Layout() {
    return (
        <div className="app">
            <Navbar expand="lg" className="bg-body-tertiary">
                <Container fluid>
                    {/*<Navbar.Brand>*/}
                    {/*    <Link to="/" className="d-block">*/}
                    {/*        <Image src="/image/1.png" className="logo"/>*/}
                    {/*    </Link>*/}
                    {/*</Navbar.Brand>*/}
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Nav.Link>
                                <Link to="/" className="d-block">Pulpit</Link>
                            </Nav.Link>
                            <NavDropdown title="Magazyn" id="magazyn">
                                <NavDropdown.Item>
                                    <Link to="/towary" className="d-block">Towary</Link>
                                </NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item>
                                    <Link to="/towar" className="d-block">Towar</Link>
                                </NavDropdown.Item>
                            </NavDropdown>
                            <NavDropdown title="Kadry" id="kadry">
                                <NavDropdown.Item>
                                    <Link to="/pracownicy" className="d-block">Pracownicy</Link>
                                </NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item>
                                    <Link to="/pracownik" className="d-block">Pracownik</Link>
                                </NavDropdown.Item>
                            </NavDropdown>
                            <NavDropdown title="Transport" id="transport">
                                <NavDropdown.Item>
                                    <Link to="/samochody" className="d-block">Samochody</Link>
                                </NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item>
                                    <Link to="/samochod" className="d-block">Dodaj samochód</Link>
                                </NavDropdown.Item>
                            </NavDropdown>
                            <NavDropdown title="Inne 1" id="inne1">
                                <NavDropdown.Item>
                                    <Link to="/pracownicy" className="d-block">Inne 1.1.</Link>
                                </NavDropdown.Item>
                                <NavDropdown.Item>
                                    <Link to="/pracownik" className="d-block">Inne 1.2.</Link>
                                </NavDropdown.Item>
                            </NavDropdown>
                            <NavDropdown title="Inne 2" id="inne2">
                                <NavDropdown.Item>
                                    <Link to="/pracownicy" className="d-block">Inne 2.1.</Link>
                                </NavDropdown.Item>
                                <NavDropdown.Item>
                                    <Link to="/pracownik" className="d-block">Inne 2.2.</Link>
                                </NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                        <Form className="d-flex">
                            <Form.Control
                                type="search"
                                placeholder="Search"
                                className="me-2"
                                aria-label="Search"
                            />
                            <Button variant="outline-success">Search</Button>
                        </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <div className="px-3">
                <Container fluid>
                    <Outlet/>
                </Container>
            </div>
        </div>
    )
}
