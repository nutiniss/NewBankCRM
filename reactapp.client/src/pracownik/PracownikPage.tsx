import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

export const Pracownik = () => {
    return (
        <Container fluid >
            <Form>
                <Row>
                    <Col>
                        <Button variant="primary" className="me-2">Dodaj</Button>
                        <Button variant="info">Anuluj</Button>
                    </Col>
                </Row>
                <Row className="mt-3">
                    <Tabs
                        defaultActiveKey="danePodstawowe"
                        className="mb-3"
                    >
                        <Tab eventKey="danePodstawowe" title="Dane podstawowe">
                            <Row className="mb-3">
                                <Col>
                                    <Form.Group>
                                        <Form.Label>Imię</Form.Label>
                                        <Form.Control type="text" />
                                    </Form.Group>
                                </Col>
                                <Col>
                                    <Form.Group>
                                        <Form.Label>Nazwisko</Form.Label>
                                        <Form.Control type="text" />
                                    </Form.Group>
                                </Col>
                            </Row>
                            <Row className="mb-3">
                                <Col>
                                    <Form.Group>
                                        <Form.Label>Stanowisko</Form.Label>
                                        <Form.Select>
                                            <option>Wybierz</option>
                                            <option value="1">Dyrektor</option>
                                            <option value="2">Kierownik</option>
                                            <option value="3">Sprzedawca</option>
                                        </Form.Select>
                                    </Form.Group>
                                </Col>
                                <Col>
                                    <Form.Group>
                                        <Form.Label>Forma zatrudnienia</Form.Label>
                                        <Form.Select>
                                            <option>Wybierz</option>
                                            <option value="1">Umowa o pracę</option>
                                            <option value="2">Umowa zlecenie</option>
                                            <option value="3">Umowa o dzieło</option>
                                        </Form.Select>
                                    </Form.Group>
                                </Col>
                            </Row>
                        </Tab>
                        <Tab eventKey="wynagrodzenie" title="Wynagrodzenie">
                            <Row className="mb-3">
                                <Col className="col-2">
                                    <Form.Group>
                                        <Form.Label>Netto</Form.Label>
                                        <Form.Control type="text" />
                                    </Form.Group>
                                </Col>
                                <Col className="col-2">
                                    <Form.Group>
                                        <Form.Label>Brutto</Form.Label>
                                        <Form.Control type="text" />
                                    </Form.Group>
                                </Col>
                            </Row>
                        </Tab>
                        <Tab eventKey="uwagi" title="Uwagi">
                            <Row className="mb-3">
                                <Col className="col-8">
                                    <Form.Group>
                                        <Form.Label>Dodatkowe informacje</Form.Label>
                                        <Form.Control as="textarea" />
                                    </Form.Group>
                                </Col>
                                <Col>
                                    <Form.Group>
                                        <Form.Label>Uwagi</Form.Label>
                                        <Form.Control as="textarea" />
                                    </Form.Group>
                                </Col>
                            </Row>
                        </Tab>
                    </Tabs>
                </Row>
            </Form>
        </Container>
    )
}