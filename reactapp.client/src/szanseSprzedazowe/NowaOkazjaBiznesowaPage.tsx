import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'

export const NowaOkazjaBiznesowa = () => {
    return (
        <Container fluid>
            <Form>
                <Row>
                    <Col>
                        <Button variant="primary" className="me-2">Dodaj okazję</Button>
                        <Button variant="info">Anuluj</Button>
                    </Col>
                </Row>
                <Row className="mt-3 mb-3">
                    <Col>
                        <Form.Group>
                            <Form.Label>Nazwa okazji</Form.Label>
                            <Form.Control type="text" />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group>
                            <Form.Label>Klient</Form.Label>
                            <Form.Control type="text" />
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Form.Group>
                            <Form.Label>Etap sprzedaży</Form.Label>
                            <Form.Select>
                                <option>Wybierz</option>
                                <option value="kwalifikacja">Kwalifikacja</option>
                                <option value="oferta">Oferta</option>
                                <option value="negocjacje">Negocjacje</option>
                            </Form.Select>
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group>
                            <Form.Label>Wartość</Form.Label>
                            <Form.Control type="number" />
                        </Form.Group>
                    </Col>
                </Row>
            </Form>
        </Container>
    )
}
