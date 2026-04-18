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
        { nazwa: 'Nexon Industry', branza: 'Produkcja', dataNawiazaniaRelacji: '10.04.2026', segment: 'Premium', statusRelacji: 'Nowa' },
        { nazwa: 'PortLine Cargo', branza: 'Transport', dataNawiazaniaRelacji: '11.04.2026', segment: 'Standard', statusRelacji: 'Aktywna' },
    ])

    useEffect(() => {
        const listaKlientowZApi: Klient[] = [
            { nazwa: 'EcoFarm Group', branza: 'Agro', dataNawiazaniaRelacji: '13.04.2026', segment: 'Premium', statusRelacji: 'Do kontaktu' },
            { nazwa: 'MediNova', branza: 'Medycyna', dataNawiazaniaRelacji: '15.04.2026', segment: 'VIP', statusRelacji: 'Aktywna' },
            { nazwa: 'Baltic Logistics Sp. z o.o.', branza: 'Logistyka', dataNawiazaniaRelacji: '18.03.2026', segment: 'VIP', statusRelacji: 'Aktywna' },
        ]
        setListaKlientow((aktualna) => [...aktualna, ...listaKlientowZApi])
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
                                        <Form.Label>Szukaj po nazwie klienta</Form.Label>
                                        <Form.Control type="text" placeholder="np. MediNova" />
                                    </Form.Group>
                                </Col>
                                <Col>
                                    <Form.Group>
                                        <Form.Label>Branża</Form.Label>
                                        <Form.Select>
                                            <option>Wybierz</option>
                                            <option value="produkcja">Produkcja</option>
                                            <option value="transport">Transport</option>
                                            <option value="agro">Agro</option>
                                            <option value="medycyna">Medycyna</option>
                                        </Form.Select>
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
                            </Row>
                        </Form>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>

            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Nazwa klienta</th>
                        <th>Branża</th>
                        <th>Data nawiązania relacji</th>
                        <th>Segment</th>
                        <th>Status relacji</th>
                    </tr>
                </thead>
                <tbody>
                    {listaKlientow.map((item) => <KlientItem key={`${item.nazwa}-${item.dataNawiazaniaRelacji}`} klient={item} />)}
                </tbody>
            </Table>
        </Container>
    )
}
