import Table from 'react-bootstrap/Table'
import Container from 'react-bootstrap/Container'
import { Spotkanie } from '../types/kalendarz/spotkanie'
import { SpotkanieItem } from './SpotkanieItem'

export const Spotkania = () => {
    const listaSpotkan: Spotkanie[] = [
        { temat: 'Omówienie celów kwartalnych', klient: 'Anna Kowalska', data: '2026-04-22 10:00', status: 'Zaplanowane' },
        { temat: 'Analiza ryzyka portfela', klient: 'Piotr Nowak', data: '2026-04-23 12:30', status: 'Potwierdzone' },
    ]

    return (
        <Container fluid>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Temat</th>
                        <th>Klient</th>
                        <th>Data</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {listaSpotkan.map((item, index) => <SpotkanieItem key={index} spotkanie={item} />)}
                </tbody>
            </Table>
        </Container>
    )
}
