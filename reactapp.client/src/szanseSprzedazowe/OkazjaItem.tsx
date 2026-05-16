import { Link } from 'react-router-dom'
import { Okazja } from '../types/szanseSprzedazowe/okazja'

type OkazjaProps = {
    okazja: Okazja
    editPath: string
}

export const OkazjaItem = (props: OkazjaProps) => {
    const { okazja, editPath } = props

    return (
        <tr>
            <td>{okazja.klient}</td>
            <td>{okazja.produkt}</td>
            <td>{okazja.etap}</td>
            <td>{okazja.dataZamkniecia}</td>
            <td className="business-table-actions-cell">
                <Link to={editPath} className="btn btn-outline-primary btn-sm table-action-button">Edytuj</Link>
            </td>
        </tr>
    )
}
