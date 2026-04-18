import Table from 'react-bootstrap/Table'
import Container from 'react-bootstrap/Container'
import { Wydarzenie } from '../types/kalendarz/wydarzenie'

export const Kalendarz = () => {
    const wydarzenia: Wydarzenie[] = [
        { data: '2026-04-20', godzina: '09:00', typ: 'Spotkanie', opis: 'Przegląd portfela klienta VIP' },
        { data: '2026-04-20', godzina: '14:00', typ: 'Zadanie', opis: 'Kontakt z nowym leadem' },
        { data: '2026-04-21', godzina: '11:00', typ: 'Spotkanie', opis: 'Prezentacja oferty inwestycyjnej' },
    ]

    return (
        <Container fluid>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Data</th>
                        <th>Godzina</th>
                        <th>Typ</th>
                        <th>Opis</th>
                    </tr>
                </thead>
                <tbody>
                    {wydarzenia.map((item, index) => (
                        <tr key={index}>
                            <td>{item.data}</td>
                            <td>{item.godzina}</td>
                            <td>{item.typ}</td>
                            <td>{item.opis}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </Container>
    )
}
