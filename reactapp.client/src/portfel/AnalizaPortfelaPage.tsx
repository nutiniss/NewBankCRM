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
                            <Card.Text>48,6 mln PLN</Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={4}>
                    <Card>
                        <Card.Body>
                            <Card.Title>Moi klienci</Card.Title>
                            <Card.Text>126</Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={4}>
                    <Card>
                        <Card.Body>
                            <Card.Title>Moi potencjalni klienci</Card.Title>
                            <Card.Text>34</Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}
