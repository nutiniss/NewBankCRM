import { Okazja } from '../types/szanseSprzedazowe/okazja'

type OkazjaProps = {
    okazja: Okazja
}

export const OkazjaItem = (props: OkazjaProps) => {
    const { okazja } = props
    return (
        <tr>
            <td>{okazja.nazwa}</td>
            <td>{okazja.klient}</td>
            <td>{okazja.etap}</td>
            <td>{okazja.wartosc.toLocaleString('pl-PL')} PLN</td>
        </tr>
    )
}
