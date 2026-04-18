import { Spotkanie } from '../types/kalendarz/spotkanie'

type SpotkanieProps = {
    spotkanie: Spotkanie
}

export const SpotkanieItem = (props: SpotkanieProps) => {
    const { spotkanie } = props

    return (
        <tr>
            <td>{spotkanie.klient}</td>
            <td>{spotkanie.dataIGodzina}</td>
            <td>{spotkanie.tryb}</td>
            <td>{spotkanie.status ?? 'Zaplanowane'}</td>
        </tr>
    )
}
