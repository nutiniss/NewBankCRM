export type Wydarzenie = {
    data: string;
    godzina: string;
    typ: 'Spotkanie' | 'Zadanie';
    opis: string;
    klient?: string;
    priorytet?: 'Wysoki' | 'Średni' | 'Niski';
};
