import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

export const Samochod = () => {
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
                                        <Form.Label>VIN</Form.Label>
                                        <Form.Control type="text" />
                                    </Form.Group>
                                </Col>
                                <Col>
                                    <Form.Group>
                                        <Form.Label>Numer Rejestracyjny</Form.Label>
                                        <Form.Control type="text" />
                                    </Form.Group>
                                </Col>
                            </Row>
                        </Tab>
                        <Tab eventKey="cena" title="Cena">
                            <Row className="mb-3">
                                <Col>
                                    <Form.Group>
                                        <Form.Label>Cena</Form.Label>
                                        <Form.Control type="text" />
                                    </Form.Group>
                                </Col>
                            </Row>
                        </Tab>
                        <Tab eventKey="opis" title="Opis">
                            <Row className="mb-3">
                                <Col className="col-8">
                                    <Form.Group>
                                        <Form.Label>Opis samochodu</Form.Label>
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