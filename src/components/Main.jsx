import React, { useState, useEffect } from "react";
import { HeaderCont, MainCont, Footer } from "./index.jsx";
// import { fetchAPI } from "../utils/fetchAPI";
const Main = () => {
    console.log("ddd");
    const [Area, setArea] = useState(["부산"]);
    const [lon, setlon] = useState([]);
    useEffect(() => {
        fetch("https://api.openweathermap.org/geo/1.0/direct?q=%EB%B6%80%EC%82%B0&limit=1&appid=ca3d1914667aa26ea2f7562fe6b0fefb")
            .then((response) => response.json())
            .then((result) => console.log(result))
            .catch((error) => console.log("error", error));
    }, []);
    // useEffect(() => {
    //     fetchAPI(`geo/1.0/direct?q=${Area}&limit=1`).then((data) => console.log(data));
    // }, [Area]);
    return (
        <>
            <HeaderCont />
            <MainCont lon={lon} onSearch={setArea} onlon={setlon} />
            <Footer />
        </>
    );
};

export default Main;
