import React, { useState, useEffect } from "react";
import Header from "../layout/Header.jsx";
import Contents from "../layout/Contents.jsx";
import Footer from "../layout/Footer.jsx";
import Maincont from "../include/Maincont.jsx";

const Main = () => {
    const [temp, setTemp] = useState([]);

    useEffect(() => {
        fetch("https://goweather.herokuapp.com/weather/Gangneung")
            .then((Response) => Response.json())
            .then((result) => setTemp(result))
            .catch((error) => console.log(error));
    }, []);

    return (
        <>
            <Header />
            <Contents>
                <Maincont temp={temp} />
            </Contents>
            <Footer />
        </>
    );
};

export default Main;
