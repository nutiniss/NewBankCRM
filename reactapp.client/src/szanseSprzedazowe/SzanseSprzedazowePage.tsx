import Table from 'react-bootstrap/Table'
import Container from 'react-bootstrap/Container'
import { Okazja } from '../types/szanseSprzedazowe/okazja'
import { OkazjaItem } from './OkazjaItem'

export const SzanseSprzedazowe = () => {
    const listaOkazji: Okazja[] = [
        { klient: 'Baltic Logistics Sp. z o.o.', produkt: 'Kredyt obrotowy', etap: 'Negocjacje warunków', dataZamkniecia: '28.04.2026', wartosc: 2400000 },
        { klient: 'HydroTech S.A.', produkt: 'Leasing floty', etap: 'Analiza ryzyka', dataZamkniecia: '06.05.2026', wartosc: 1700000 },
        { klient: 'GreenPol Energia', produkt: 'Kredyt inwestycyjny', etap: 'Oferta wstępna', dataZamkniecia: '12.05.2026', wartosc: 3200000 },
        { klient: 'MediCore Group', produkt: 'Cash management', etap: 'Spotkanie decyzyjne', dataZamkniecia: '15.05.2026', wartosc: 900000 },
    ]

    return (
        <Container fluid>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Nazwa klienta</th>
                        <th>Produkt</th>
                        <th>Etap</th>
                        <th>Planowana data zamknięcia etapu</th>
                    </tr>
                </thead>
                <tbody>
                    {listaOkazji.map((item) => <OkazjaItem key={`${item.klient}-${item.produkt}`} okazja={item} />)}
                </tbody>
            </Table>
        </Container>
    )
}
