import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'

export const NoweZadanie = () => {
    return (
        <Container fluid>
            <Form>
                <Row>
                    <Col>
                        <Button variant="primary" className="me-2">Zapisz zadanie</Button>
                        <Button variant="info">Anuluj</Button>
                    </Col>
                </Row>
                <Row className="mt-3 mb-3">
                    <Col>
                        <Form.Group>
                            <Form.Label>Nazwa zadania</Form.Label>
                            <Form.Control type="text" />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group>
                            <Form.Label>Priorytet</Form.Label>
                            <Form.Select>
                                <option>Wybierz</option>
                                <option value="wysoki">Wysoki</option>
                                <option value="sredni">Średni</option>
                                <option value="niski">Niski</option>
                            </Form.Select>
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Form.Group>
                            <Form.Label>Termin realizacji</Form.Label>
                            <Form.Control type="date" />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group>
                            <Form.Label>Opis</Form.Label>
                            <Form.Control as="textarea" rows={3} placeholder="Np. wymagane dokumenty klienta" />
                        </Form.Group>
                    </Col>
                </Row>
            </Form>
        </Container>
    )
}
