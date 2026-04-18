import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'

const etapy = [
    { nazwa: 'Kontakt', liczba: 8 },
    { nazwa: 'Oferta', liczba: 6 },
    { nazwa: 'Negocjacje', liczba: 4 },
    { nazwa: 'Domknięcie', liczba: 3 },
]

export const Pipeline = () => {
    return (
        <Container fluid>
            <Row className="g-3">
                {etapy.map((etap) => (
                    <Col md={3} key={etap.nazwa}>
                        <Card>
                            <Card.Header>{etap.nazwa}</Card.Header>
                            <Card.Body>{etap.liczba} szans</Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    )
}
