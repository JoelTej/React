import { BrowserRouter, Routes, Route } from "react-router-dom";

import Results from "../views/Results";
import Detail from "../views/Detail";
import Home from "../views/Home";

const RoutesComponent = () => (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/results/:title" element={<Results />} />
            <Route path="/detail/:movieId" element={<Detail />} />
        </Routes>
    </BrowserRouter>
);

export default RoutesComponent;