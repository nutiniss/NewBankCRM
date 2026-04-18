import { Sprawa } from '../types/sprawy/sprawa'

type SprawaProps = {
    sprawa: Sprawa
}

export const SprawaItem = (props: SprawaProps) => {
    const { sprawa } = props
    return (
        <tr>
            <td>{sprawa.numer}</td>
            <td>{sprawa.tytul}</td>
            <td>{sprawa.priorytet}</td>
            <td>{sprawa.status}</td>
        </tr>
    )
}
