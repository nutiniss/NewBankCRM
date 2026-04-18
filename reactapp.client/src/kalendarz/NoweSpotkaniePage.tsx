import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'

export const NoweSpotkanie = () => {
    return (
        <Container fluid>
            <Form>
                <Row>
                    <Col>
                        <Button variant="primary" className="me-2">Zapisz spotkanie</Button>
                        <Button variant="info">Anuluj</Button>
                    </Col>
                </Row>
                <Row className="mt-3 mb-3">
                    <Col>
                        <Form.Group>
                            <Form.Label>Nazwa klienta</Form.Label>
                            <Form.Control type="text" />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group>
                            <Form.Label>Tryb spotkania</Form.Label>
                            <Form.Select>
                                <option>Wybierz</option>
                                <option value="zdalnie">Zdalnie</option>
                                <option value="stacjonarnie">Stacjonarnie</option>
                            </Form.Select>
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Form.Group>
                            <Form.Label>Data</Form.Label>
                            <Form.Control type="date" />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group>
                            <Form.Label>Godzina</Form.Label>
                            <Form.Control type="time" />
                        </Form.Group>
                    </Col>
                </Row>
            </Form>
        </Container>
    )
}
