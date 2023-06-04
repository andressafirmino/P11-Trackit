import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage/HomePage";
import Register from "./Pages/Register/Register";
import Today from "./Pages/Today/Today";
import Historic from "./Pages/Historic/Historic";
import Habits from "./Pages/Habits/Habits";
import { useState } from "react";


export default function App() {
   
    const [token, setToken] = useState('');
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<HomePage token={token} setToken={setToken}/>}></Route>
                <Route path='/cadastro' element={<Register />}></Route>
                <Route path='/hoje' element={<Today />}></Route>
                <Route path='/historico' element={<Historic />}></Route>
                <Route path='/habitos' element={<Habits token={token} setToken={setToken}/> } ></Route>
            </Routes>
            
        </BrowserRouter>
    )
}
