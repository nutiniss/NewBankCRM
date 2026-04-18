import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'

export const AnalizaPortfela = () => {
    return (
        <Container fluid>
            <Row className="g-3">
                <Col md={4}>
                    <Card>
                        <Card.Body>
                            <Card.Title>Łączna wartość portfela</Card.Title>
                            <Card.Text>2 450 000 PLN</Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={4}>
                    <Card>
                        <Card.Body>
                            <Card.Title>Klienci aktywni</Card.Title>
                            <Card.Text>142</Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={4}>
                    <Card>
                        <Card.Body>
                            <Card.Title>Średni portfel klienta</Card.Title>
                            <Card.Text>17 253 PLN</Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}
