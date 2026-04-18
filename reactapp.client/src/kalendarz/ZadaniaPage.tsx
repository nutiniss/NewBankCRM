import Table from 'react-bootstrap/Table'
import Container from 'react-bootstrap/Container'
import { Zadanie } from '../types/kalendarz/zadanie'
import { ZadanieItem } from './ZadanieItem'

export const Zadania = () => {
    const listaZadan: Zadanie[] = [
        { nazwa: 'Aktualizacja analizy finansowej klienta HydroTech', priorytet: 'Wysoki', termin: '22.04.2026', status: 'W toku' },
        { nazwa: 'Przygotowanie oferty cross-sellingowej dla MediCore', priorytet: 'Średni', termin: '24.04.2026', status: 'Nowe' },
        { nazwa: 'Kontakt z działem prawnym ws. zabezpieczeń', priorytet: 'Wysoki', termin: '25.04.2026', status: 'Nowe' },
        { nazwa: 'Weryfikacja dokumentów KYC dla GreenPol', priorytet: 'Niski', termin: '29.04.2026', status: 'Nowe' },
    ]

    return (
        <Container fluid>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Zadanie</th>
                        <th>Priorytet</th>
                        <th>Termin realizacji</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {listaZadan.map((item) => <ZadanieItem key={`${item.nazwa}-${item.termin}`} zadanie={item} />)}
                </tbody>
            </Table>
        </Container>
    )
}
