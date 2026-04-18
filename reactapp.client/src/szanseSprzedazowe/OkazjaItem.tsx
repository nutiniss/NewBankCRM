import { Okazja } from '../types/szanseSprzedazowe/okazja'

type OkazjaProps = {
    okazja: Okazja
}

export const OkazjaItem = (props: OkazjaProps) => {
    const { okazja } = props

    return (
        <tr>
            <td>{okazja.klient}</td>
            <td>{okazja.produkt}</td>
            <td>{okazja.etap}</td>
            <td>{okazja.dataZamkniecia}</td>
        </tr>
    )
}
