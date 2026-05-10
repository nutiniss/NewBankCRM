export type Klient = {
    nazwa: string;
    branza: string;
    dataNawiazaniaRelacji: string;
    segment?: 'VIP' | 'Premium' | 'Standard';
    wartoscPortfela?: number;
    statusRelacji?: 'Aktywna' | 'Do kontaktu' | 'Nowa';
    id?: string;
    imieNazwisko?: string;
};
