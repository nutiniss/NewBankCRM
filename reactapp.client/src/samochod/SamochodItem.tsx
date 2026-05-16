import { Link } from 'react-router-dom'
import { Samochod } from '../types/samochod/samochod'

type SamochodProps = {
    samochod: Samochod
    editPath: string
}

export const SamochodItem = (props: SamochodProps) => {
    const { samochod, editPath } = props
    return (
        <tr>
            <td>{samochod.vin}</td>
            <td>{samochod.numerRejestracyjny}</td>
            <td>{samochod.opis}</td>
            <td>{samochod.cena}</td>
            <td className="business-table-actions-cell">
                <Link to={editPath} className="btn btn-outline-primary btn-sm table-action-button">Edytuj</Link>
            </td>
        </tr>
    )
}
