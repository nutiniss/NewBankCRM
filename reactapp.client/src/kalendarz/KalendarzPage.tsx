import Table from 'react-bootstrap/Table'
import Container from 'react-bootstrap/Container'
import { Wydarzenie } from '../types/kalendarz/wydarzenie'

export const Kalendarz = () => {
    const wydarzenia: Wydarzenie[] = [
        { data: '21.04.2026', godzina: '10:30', typ: 'Spotkanie', opis: 'Baltic Logistics Sp. z o.o. — spotkanie zdalne', klient: 'Baltic Logistics Sp. z o.o.' },
        { data: '22.04.2026', godzina: '09:00', typ: 'Zadanie', opis: 'Aktualizacja analizy finansowej klienta HydroTech', priorytet: 'Wysoki' },
        { data: '22.04.2026', godzina: '13:00', typ: 'Spotkanie', opis: 'MediCore Group — spotkanie stacjonarne', klient: 'MediCore Group' },
        { data: '24.04.2026', godzina: '08:30', typ: 'Zadanie', opis: 'Przygotowanie oferty cross-sellingowej dla MediCore', priorytet: 'Średni' },
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
                    {wydarzenia.map((item) => (
                        <tr key={`${item.data}-${item.godzina}-${item.opis}`}>
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
