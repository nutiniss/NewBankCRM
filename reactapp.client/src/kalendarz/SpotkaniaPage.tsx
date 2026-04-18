import Table from 'react-bootstrap/Table'
import Container from 'react-bootstrap/Container'
import { Spotkanie } from '../types/kalendarz/spotkanie'
import { SpotkanieItem } from './SpotkanieItem'

export const Spotkania = () => {
    const listaSpotkan: Spotkanie[] = [
        { klient: 'Baltic Logistics Sp. z o.o.', dataIGodzina: '21.04.2026, 10:30', tryb: 'Zdalnie', status: 'Potwierdzone' },
        { klient: 'MediCore Group', dataIGodzina: '22.04.2026, 13:00', tryb: 'Stacjonarnie', status: 'Zaplanowane' },
        { klient: 'GreenPol Energia', dataIGodzina: '23.04.2026, 09:15', tryb: 'Zdalnie', status: 'Zaplanowane' },
        { klient: 'HydroTech S.A.', dataIGodzina: '24.04.2026, 11:45', tryb: 'Stacjonarnie', status: 'Potwierdzone' },
    ]

    return (
        <Container fluid>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Nazwa klienta</th>
                        <th>Data i godzina</th>
                        <th>Tryb spotkania</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {listaSpotkan.map((item) => <SpotkanieItem key={`${item.klient}-${item.dataIGodzina}`} spotkanie={item} />)}
                </tbody>
            </Table>
        </Container>
    )
}
