import { Samochod } from "../types/samochod/samochod"
type SamochodProps = {
    samochod: Samochod
}

export const SamochodItem = (props: SamochodProps) => {
    const { samochod } = props; 
    return (<tr>
        <td>{samochod.numerRejestracyjny} </td>
        < td > {samochod.vin} </td>
        < td > {samochod.opis} </td>
        < td > {samochod.cena} </td>
    </tr>)
}