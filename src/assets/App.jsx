import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage/HomePage";
import Register from "./Pages/Register/Register";
import Today from "./Pages/Today/Today";
import Historic from "./Pages/Historic/Historic";
import Habits from "./Pages/Habits/Habits";
import { useState } from "react";
import AuthProvider from "./contexts/auth";



export default function App() {

    return (
        <BrowserRouter>
            <AuthProvider>
                <Routes>
                    <Route path='/' element={<HomePage />}></Route>
                    <Route path='/cadastro' element={<Register />}></Route>
                    <Route path='/hoje' element={<Today />}></Route>
                    <Route path='/historico' element={<Historic />}></Route>
                    <Route path='/habitos' element={<Habits />} ></Route>
                </Routes>
            </AuthProvider>
        </BrowserRouter>
    )
}
