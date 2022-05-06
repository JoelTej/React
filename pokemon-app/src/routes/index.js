import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "../views/Home";
import Error404 from "../views/Error404";
import PokemonDetail from "../views/PokemonDetail";

export default function MyRoutes() {
 return (
   <Router>
        <Routes>
             <Route path="/" exact element={<Home />} />
             <Route path="/pokemon/:id" element={<PokemonDetail />}/>
             <Route path="*" element={<Error404 />} />
         </Routes>
   </Router>
 );
}
