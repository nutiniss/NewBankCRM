import { Zadanie } from '../types/kalendarz/zadanie'

type ZadanieProps = {
    zadanie: Zadanie
}

export const ZadanieItem = (props: ZadanieProps) => {
    const { zadanie } = props
    return (
        <tr>
            <td>{zadanie.nazwa}</td>
            <td>{zadanie.priorytet}</td>
            <td>{zadanie.termin}</td>
            <td>{zadanie.status}</td>
        </tr>
    )
}
