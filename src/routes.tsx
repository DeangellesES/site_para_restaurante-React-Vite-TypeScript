import { BrowserRouter, Route, Routes } from "react-router-dom";

import Inicio from "./pages/Inicio/Inicio";
import Menu from "./pages/Menu/Menu"

function AppRoutes() {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Inicio/>}></Route>
                <Route path="/menu" element={<Menu/>}></Route>
            </Routes> 
        </BrowserRouter>
    )
}

export default AppRoutes