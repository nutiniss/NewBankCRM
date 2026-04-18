import Table from 'react-bootstrap/Table'
import Container from 'react-bootstrap/Container'
import { Sprawa } from '../types/sprawy/sprawa'
import { SprawaItem } from './SprawaItem'

export const Sprawy = () => {
    const listaSpraw: Sprawa[] = [
        { numer: 'SPR-001', tytul: 'Reklamacja polisy', priorytet: 'Wysoki', status: 'Otwarte' },
        { numer: 'SPR-002', tytul: 'Aktualizacja pełnomocnictwa', priorytet: 'Średni', status: 'W toku' },
    ]

    return (
        <Container fluid>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Numer</th>
                        <th>Tytuł</th>
                        <th>Priorytet</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {listaSpraw.map((item, index) => <SprawaItem key={index} sprawa={item} />)}
                </tbody>
            </Table>
        </Container>
    )
}
