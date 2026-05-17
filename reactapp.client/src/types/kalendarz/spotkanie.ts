export type Spotkanie = {
    firma: string;
    typ: 'Spotkanie' | 'Rozmowa telefoniczna' | 'Spotkanie wewnętrzne';
    dataIGodzina: string;
    miejsce: 'Bank' | 'Siedziba klienta' | 'Inne';
    temat: string;
    organizator: string;
    status?: 'Zaplanowane' | 'Zakończone' | 'Anulowane';
};
