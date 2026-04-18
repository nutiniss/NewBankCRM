import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'

export const Pipeline = () => {
    return (
        <Container fluid>
            <Row className="g-3">
                <Col md={3}>
                    <Card>
                        <Card.Header>Kwalifikacja</Card.Header>
                        <Card.Body>5 okazji</Card.Body>
                    </Card>
                </Col>
                <Col md={3}>
                    <Card>
                        <Card.Header>Analiza potrzeb</Card.Header>
                        <Card.Body>3 okazje</Card.Body>
                    </Card>
                </Col>
                <Col md={3}>
                    <Card>
                        <Card.Header>Oferta</Card.Header>
                        <Card.Body>4 okazje</Card.Body>
                    </Card>
                </Col>
                <Col md={3}>
                    <Card>
                        <Card.Header>Negocjacje</Card.Header>
                        <Card.Body>2 okazje</Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}
