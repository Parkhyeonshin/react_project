import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Main } from "../src/components";

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Main />}></Route>
            </Routes>
        </BrowserRouter>
    );
};

export default App;
