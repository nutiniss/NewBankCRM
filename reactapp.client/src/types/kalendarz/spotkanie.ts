export type Spotkanie = {
    klient: string;
    dataIGodzina: string;
    tryb: 'Stacjonarnie' | 'Zdalnie';
    temat?: string;
    status?: 'Zaplanowane' | 'Potwierdzone' | 'Zrealizowane';
};
