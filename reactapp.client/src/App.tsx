import './App.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
function App() {
    return (
        <Container fluid>
            <div className="mb-3">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </div>
            <div className="mb-3">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </div>
            <hr />
            <Row>
                <Col className="mb-3">
                    <Card>
                        <Card.Header>Ogloszenie 1</Card.Header>
                        <Card.Body>
                            <Card.Text>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            </Card.Text>
                            <Button variant="primary">Szczegóły</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col className="mb-3">
                    <Card>
                        <Card.Header>Ogloszenie 2</Card.Header>
                        <Card.Body>
                            <Card.Text>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            </Card.Text>
                            <Button variant="primary">Szczegóły</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col className="mb-3">
                    <Card>
                        <Card.Header>Ogloszenie 3</Card.Header>
                        <Card.Body>
                            <Card.Text>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            </Card.Text>
                            <Button variant="primary">Szczegóły</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col className="mb-3">
                    <Card>
                        <Card.Header>Ogloszenie 4</Card.Header>
                        <Card.Body>
                            <Card.Text>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            </Card.Text>
                            <Button variant="primary">Szczegóły</Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <hr />
            <Row>
                <Col className="mb-3">
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="/image/1.png" className="card-image" />
                        <Card.Body>
                            <Card.Title>Towar1</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col className="mb-3">
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="/image/1.png" className="card-image" />
                        <Card.Body>
                            <Card.Title>Towar2</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col className="mb-3">
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="/image/1.png" className="card-image" />
                        <Card.Body>
                            <Card.Title>Towar3</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col className="mb-3">
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="/image/1.png" className="card-image" />
                        <Card.Body>
                            <Card.Title>Towar4</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container> 
    );
}

export default App;