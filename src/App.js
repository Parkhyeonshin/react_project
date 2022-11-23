import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Main } from "../src/components";
// import $ from "jquery";

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Main />}></Route>
            </Routes>
        </BrowserRouter>
    );
};

// function enterKey() {
//     if (window.event.keyCode === 13) {
//         // 엔터키가 눌렸을 때 실행하는 반응
//         $("#search").submit();
//         // alert("엔터 적용 완료");
//     }
// }
// enterKey();

export default App;
