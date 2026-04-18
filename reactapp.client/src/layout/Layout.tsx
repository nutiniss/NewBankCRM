import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Outlet, Link } from 'react-router-dom';

export function Layout() {
    return (
        <div className="app">
            <Navbar expand="lg" className="bg-body-tertiary">
                <Container fluid>
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

                            <NavDropdown title="Mój portfel" id="moj-portfel">
                                <NavDropdown.Item>
                                    <Link to="/moi-klienci" className="d-block">Moi klienci</Link>
                                </NavDropdown.Item>
                                <NavDropdown.Item>
                                    <Link to="/nowy-klient-potencjalny" className="d-block">Nowy klient potencjalny</Link>
                                </NavDropdown.Item>
                                <NavDropdown.Item>
                                    <Link to="/analiza-portfela" className="d-block">Analiza portfela</Link>
                                </NavDropdown.Item>
                            </NavDropdown>

                            <NavDropdown title="Kalendarz" id="kalendarz-menu">
                                <NavDropdown.Item>
                                    <Link to="/kalendarz" className="d-block">Kalendarz</Link>
                                </NavDropdown.Item>
                                <NavDropdown.Item>
                                    <Link to="/spotkania" className="d-block">Spotkania</Link>
                                </NavDropdown.Item>
                                <NavDropdown.Item>
                                    <Link to="/zadania" className="d-block">Zadania</Link>
                                </NavDropdown.Item>
                                <NavDropdown.Item>
                                    <Link to="/nowe-spotkanie" className="d-block">Nowe spotkanie</Link>
                                </NavDropdown.Item>
                                <NavDropdown.Item>
                                    <Link to="/nowe-zadanie" className="d-block">Nowe zadanie</Link>
                                </NavDropdown.Item>
                            </NavDropdown>

                            <NavDropdown title="Szanse sprzedażowe" id="szanse-sprzedazowe-menu">
                                <NavDropdown.Item>
                                    <Link to="/szanse-sprzedazowe" className="d-block">Szanse sprzedażowe</Link>
                                </NavDropdown.Item>
                                <NavDropdown.Item>
                                    <Link to="/pipeline" className="d-block">Pipeline</Link>
                                </NavDropdown.Item>
                                <NavDropdown.Item>
                                    <Link to="/nowa-okazja-biznesowa" className="d-block">Nowa okazja biznesowa</Link>
                                </NavDropdown.Item>
                            </NavDropdown>

                            <NavDropdown title="Sprawy" id="sprawy-menu">
                                <NavDropdown.Item>
                                    <Link to="/sprawy" className="d-block">Sprawy</Link>
                                </NavDropdown.Item>
                                <NavDropdown.Item>
                                    <Link to="/nowa-sprawa" className="d-block">Nowa sprawa</Link>
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
            <div className="px-3 mt-2">
                <Container fluid>
                    <Outlet />
                </Container>
            </div>
        </div>
    )
}
