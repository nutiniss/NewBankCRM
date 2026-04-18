import Table from 'react-bootstrap/Table'
import Container from 'react-bootstrap/Container'
import { Zadanie } from '../types/kalendarz/zadanie'
import { ZadanieItem } from './ZadanieItem'

export const Zadania = () => {
    const listaZadan: Zadanie[] = [
        { nazwa: 'Przygotowanie oferty', priorytet: 'Wysoki', termin: '2026-04-24', status: 'W toku' },
        { nazwa: 'Aktualizacja danych klienta', priorytet: 'Średni', termin: '2026-04-25', status: 'Nowe' },
    ]

    return (
        <Container fluid>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Zadanie</th>
                        <th>Priorytet</th>
                        <th>Termin</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {listaZadan.map((item, index) => <ZadanieItem key={index} zadanie={item} />)}
                </tbody>
            </Table>
        </Container>
    )
}
