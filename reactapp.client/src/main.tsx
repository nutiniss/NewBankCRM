import React from 'react';
import ReactDOM from "react-dom/client";
import App from './App.jsx';
import './index.css';
//import {
//    createBrowserRouter,
//    RouterProvider,
//} from "react-router-dom";
import { Towar } from './towar/TowarPage';
import { Towary } from './towar/TowaryPage';
import { Pracownik } from './pracownik/PracownikPage';
import { Pracownicy } from './pracownik/PracownicyPage';
import { Samochod } from './samochod/SamochodPage';
import { Samochody } from './samochod/SamochodyPage';
import { Layout } from './layout/Layout.jsx';
import { BrowserRouter, Route, Routes } from 'react-router-dom'

//const router = createBrowserRouter([
//    {
//        path: "/",
//        element: <App/>,
//    },
//    {
//        path: "/towar",
//        element: <Towar />,
//    },
//    {
//        path: "/towary",
//        element: <Towary />
//    },
//    {
//        path: "/pracownik",
//        element: <Pracownik />
//    },
//    {
//        path: "/pracownicy",
//        element: <Pracownicy />
//    }
//]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <React.StrictMode>
        {/*<RouterProvider router={router} />*/}
        <BrowserRouter>
            <Routes>
                <Route path='/' element={ <Layout/>}>
                    <Route index element={<App/> }/>
                </Route>
                <Route path='/towary' element={<Layout />}>
                    <Route index element={<Towary />} />
                </Route>
                <Route path='/pracownicy' element={<Layout />}>
                    <Route index element={<Pracownicy />} />
                </Route>
                <Route path='/towar' element={<Layout />}>
                    <Route index element={<Towar />} />
                </Route>
                <Route path='/pracownik' element={<Layout />}>
                    <Route index element={<Pracownik />} />
                </Route>
                <Route path='/samochod' element={<Layout />}>
                    <Route index element={<Samochod />} />
                </Route>
                <Route path='/samochody' element={<Layout />}>
                    <Route index element={<Samochody />} />
                </Route>
            </Routes>
        </BrowserRouter>
    </React.StrictMode>
);