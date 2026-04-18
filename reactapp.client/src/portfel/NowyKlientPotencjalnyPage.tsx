import Tab from 'react-bootstrap/Tab'
import Tabs from 'react-bootstrap/Tabs'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'

export const NowyKlientPotencjalny = () => {
    return (
        <Container fluid>
            <Form>
                <Row>
                    <Col>
                        <Button variant="primary" className="me-2">Dodaj</Button>
                        <Button variant="info">Anuluj</Button>
                    </Col>
                </Row>
                <Row className="mt-3">
                    <Tabs defaultActiveKey="danePodstawowe" className="mb-3">
                        <Tab eventKey="danePodstawowe" title="Dane podstawowe">
                            <Row className="mb-3">
                                <Col>
                                    <Form.Group>
                                        <Form.Label>Imię i nazwisko</Form.Label>
                                        <Form.Control type="text" />
                                    </Form.Group>
                                </Col>
                                <Col>
                                    <Form.Group>
                                        <Form.Label>Telefon</Form.Label>
                                        <Form.Control type="text" />
                                    </Form.Group>
                                </Col>
                            </Row>
                            <Row className="mb-3">
                                <Col>
                                    <Form.Group>
                                        <Form.Label>E-mail</Form.Label>
                                        <Form.Control type="email" />
                                    </Form.Group>
                                </Col>
                                <Col>
                                    <Form.Group>
                                        <Form.Label>Źródło leada</Form.Label>
                                        <Form.Select>
                                            <option>Wybierz</option>
                                            <option value="polecenie">Polecenie</option>
                                            <option value="www">Strona WWW</option>
                                            <option value="kampania">Kampania</option>
                                        </Form.Select>
                                    </Form.Group>
                                </Col>
                            </Row>
                        </Tab>
                        <Tab eventKey="potrzeby" title="Potrzeby klienta">
                            <Row className="mb-3">
                                <Col>
                                    <Form.Group>
                                        <Form.Label>Zakres zainteresowania</Form.Label>
                                        <Form.Control as="textarea" rows={5} />
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
