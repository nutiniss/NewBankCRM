import React from 'react';
import ReactDOM from "react-dom/client";
import App from './DashboardHome.js';
import './index.css';
import { Layout } from './layout/Layout.jsx';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { MoiKlienci } from './portfel/MoiKlienciPage';
import { NowyKlientPotencjalny } from './portfel/NowyKlientPotencjalnyPage';
import { AnalizaPortfela } from './portfel/AnalizaPortfelaPage';
import { Kalendarz } from './kalendarz/KalendarzPage';
import { Spotkania } from './kalendarz/SpotkaniaPage';
import { Zadania } from './kalendarz/ZadaniaPage';
import { NoweSpotkanie } from './kalendarz/NoweSpotkaniePage';
import { NoweZadanie } from './kalendarz/NoweZadaniePage';
import { SzanseSprzedazowe } from './szanseSprzedazowe/SzanseSprzedazowePage';
import { Pipeline } from './szanseSprzedazowe/PipelinePage';
import { NowaOkazjaBiznesowa } from './szanseSprzedazowe/NowaOkazjaBiznesowaPage';
import { Sprawy } from './sprawy/SprawyPage';
import { NowaSprawa } from './sprawy/NowaSprawaPage';
import { Towary } from './towar/TowaryPage';
import { Towar } from './towar/TowarPage';
import { Samochody } from './samochod/SamochodyPage';
import { Samochod } from './samochod/SamochodPage';
import { Pracownicy } from './pracownik/PracownicyPage';
import { Pracownik } from './pracownik/PracownikPage';

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Layout />}>
                    <Route index element={<App />} />
                </Route>
                <Route path='/moi-klienci' element={<Layout />}>
                    <Route index element={<MoiKlienci />} />
                </Route>
                <Route path='/nowy-klient-potencjalny' element={<Layout />}>
                    <Route index element={<NowyKlientPotencjalny />} />
                </Route>
                <Route path='/analiza-portfela' element={<Layout />}>
                    <Route index element={<AnalizaPortfela />} />
                </Route>
                <Route path='/kalendarz' element={<Layout />}>
                    <Route index element={<Kalendarz />} />
                </Route>
                <Route path='/spotkania' element={<Layout />}>
                    <Route index element={<Spotkania />} />
                </Route>
                <Route path='/zadania' element={<Layout />}>
                    <Route index element={<Zadania />} />
                </Route>
                <Route path='/nowe-spotkanie' element={<Layout />}>
                    <Route index element={<NoweSpotkanie />} />
                </Route>
                <Route path='/nowe-zadanie' element={<Layout />}>
                    <Route index element={<NoweZadanie />} />
                </Route>
                <Route path='/szanse-sprzedazowe' element={<Layout />}>
                    <Route index element={<SzanseSprzedazowe />} />
                </Route>
                <Route path='/pipeline' element={<Layout />}>
                    <Route index element={<Pipeline />} />
                </Route>
                <Route path='/nowa-okazja-biznesowa' element={<Layout />}>
                    <Route index element={<NowaOkazjaBiznesowa />} />
                </Route>
                <Route path='/sprawy' element={<Layout />}>
                    <Route index element={<Sprawy />} />
                </Route>
                <Route path='/nowa-sprawa' element={<Layout />}>
                    <Route index element={<NowaSprawa />} />
                </Route>
                <Route path='/towary' element={<Layout />}>
                    <Route index element={<Towary />} />
                </Route>
                <Route path='/towar' element={<Layout />}>
                    <Route index element={<Towar />} />
                </Route>
                <Route path='/samochody' element={<Layout />}>
                    <Route index element={<Samochody />} />
                </Route>
                <Route path='/samochod' element={<Layout />}>
                    <Route index element={<Samochod />} />
                </Route>
                <Route path='/pracownicy' element={<Layout />}>
                    <Route index element={<Pracownicy />} />
                </Route>
                <Route path='/pracownik' element={<Layout />}>
                    <Route index element={<Pracownik />} />
                </Route>
            </Routes>
        </BrowserRouter>
    </React.StrictMode>
);
