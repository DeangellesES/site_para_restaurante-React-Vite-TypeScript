import { BrowserRouter, Route, Routes } from "react-router-dom";

import Inicio from "./pages/Inicio/Inicio";
import Menu from "./pages/Menu/Menu"
import Servicos from "./pages/Servicos/Servicos";
import Contato from "./pages/Contato/Contato";

function AppRoutes() {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Inicio/>}></Route>
                <Route path="/menu" element={<Menu/>}></Route>
                <Route path="/servicos" element={<Servicos/>}></Route>
                <Route path="/contato" element={<Contato/>}></Route>
            </Routes> 
        </BrowserRouter>
    )
}

export default AppRoutes