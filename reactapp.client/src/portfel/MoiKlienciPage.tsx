import Accordion from 'react-bootstrap/Accordion'
import Table from 'react-bootstrap/Table'
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import { useEffect, useState } from 'react'
import { Klient } from '../types/portfel/klient'
import { KlientItem } from './KlientItem'

export const MoiKlienci = () => {
    const [listaKlientow, setListaKlientow] = useState<Klient[]>([
        { id: 'K-001', imieNazwisko: 'Anna Kowalska', segment: 'Premium', wartoscPortfela: 450000, statusRelacji: 'Aktywna' },
        { id: 'K-002', imieNazwisko: 'Piotr Nowak', segment: 'Standard', wartoscPortfela: 120000, statusRelacji: 'Aktywna' },
    ])

    useEffect(() => {
        const listaKlientowZApi: Klient[] = [
            { id: 'K-003', imieNazwisko: 'Maria Wiśniewska', segment: 'VIP', wartoscPortfela: 870000, statusRelacji: 'Do kontaktu' },
            { id: 'K-004', imieNazwisko: 'Jan Wójcik', segment: 'Premium', wartoscPortfela: 390000, statusRelacji: 'Aktywna' },
            { id: 'K-005', imieNazwisko: 'Katarzyna Kamińska', segment: 'Standard', wartoscPortfela: 95000, statusRelacji: 'Nowa' },
        ]
        setListaKlientow(listaKlientowZApi)
    }, [])

    return (
        <Container fluid>
            <Accordion defaultActiveKey="filtrowanie">
                <Accordion.Item eventKey="filtrowanie">
                    <Accordion.Header>Filtrowanie i sortowanie</Accordion.Header>
                    <Accordion.Body>
                        <Form>
                            <Row className="mb-3">
                                <Col>
                                    <Form.Group>
                                        <Form.Label>Szukaj po kliencie</Form.Label>
                                        <Form.Control type="text" />
                                    </Form.Group>
                                </Col>
                                <Col>
                                    <Form.Group>
                                        <Form.Label>Segment</Form.Label>
                                        <Form.Select>
                                            <option>Wybierz</option>
                                            <option value="vip">VIP</option>
                                            <option value="premium">Premium</option>
                                            <option value="standard">Standard</option>
                                        </Form.Select>
                                    </Form.Group>
                                </Col>
                                <Col className="col-2">
                                    <Form.Group>
                                        <Form.Label>Portfel od</Form.Label>
                                        <Form.Control type="text" />
                                    </Form.Group>
                                </Col>
                            </Row>
                        </Form>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>

            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Klient</th>
                        <th>Segment</th>
                        <th>Wartość portfela</th>
                        <th>Status relacji</th>
                    </tr>
                </thead>
                <tbody>
                    {listaKlientow.map((item, index) => <KlientItem key={index} klient={item} />)}
                </tbody>
            </Table>
        </Container>
    )
}
