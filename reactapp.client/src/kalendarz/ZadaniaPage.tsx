import Table from 'react-bootstrap/Table'
import Container from 'react-bootstrap/Container'
import { Link } from 'react-router-dom'
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
            <div className="business-table-shell">
                <Table responsive hover className="business-table">
                <thead>
                    <tr>
                        <th>Zadanie</th>
                        <th>Priorytet</th>
                        <th>Termin realizacji</th>
                        <th>Status</th>
                                            <th className="business-table-actions-header">Akcje</th>
                    </tr>
                </thead>
                <tbody>
                    {listaZadan.map((item) => <ZadanieItem key={`${item.nazwa}-${item.termin}`} zadanie={item} editPath={`/nowe-zadanie?zadanie=${encodeURIComponent(item.nazwa)}&tryb=edycja`} />)}
                </tbody>
            </Table>
            </div>
            <div className="table-actions-footer">
                <Link to="/nowe-zadanie" className="btn btn-primary business-table-new-button">Nowe zadanie</Link>
            </div>
        </Container>
    )
}
