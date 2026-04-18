export type Zadanie = {
    nazwa: string;
    priorytet: 'Wysoki' | 'Średni' | 'Niski';
    termin: string;
    status?: 'Nowe' | 'W toku' | 'Zakończone';
};
