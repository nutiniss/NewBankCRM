import { Pracownik } from "../types/pracownik/pracownik"
type PracownikProps = {
    //tu można dodać coś jeszcze
    //liczba: number,
    pracownik: Pracownik
}

export const PracownikItem = (props: PracownikProps) => {
    const { pracownik } = props; 
    return (<tr>
        <td>{pracownik.imie}</td>
        <td>{pracownik.nazwisko}</td>
        <td>{pracownik.stanowisko}</td>
        <td>{pracownik.placaBrutto}</td>
    </tr>)
}