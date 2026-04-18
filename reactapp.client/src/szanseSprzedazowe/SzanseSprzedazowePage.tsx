import Table from 'react-bootstrap/Table'
import Container from 'react-bootstrap/Container'
import { Okazja } from '../types/szanseSprzedazowe/okazja'
import { OkazjaItem } from './OkazjaItem'

export const SzanseSprzedazowe = () => {
    const listaOkazji: Okazja[] = [
        { nazwa: 'Program inwestycyjny 2026', klient: 'Firma Alfa', etap: 'Kwalifikacja', wartosc: 250000 },
        { nazwa: 'Ubezpieczenie grupowe', klient: 'Firma Beta', etap: 'Negocjacje', wartosc: 180000 },
    ]

    return (
        <Container fluid>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Nazwa okazji</th>
                        <th>Klient</th>
                        <th>Etap</th>
                        <th>Wartość</th>
                    </tr>
                </thead>
                <tbody>
                    {listaOkazji.map((item, index) => <OkazjaItem key={index} okazja={item} />)}
                </tbody>
            </Table>
        </Container>
    )
}
