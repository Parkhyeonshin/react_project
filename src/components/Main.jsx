import React, { useState, useEffect } from "react";
import { Aside, Contetns, HeaderCont, Footer } from "./";

const Main = () => {
    const [Area, setArea] = useState("안산");
    const [temp, setTemp] = useState([]);
    const [lon, setlon] = useState([]);
    useEffect(() => {
        fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lon.lat}&lon=${lon.lon}&appid=5409c77e81f618325e0ef657a28f2114`)
            .then((Response) => Response.json())
            .then((result) => setTemp(result))
            .catch((error) => console.log(error));
    }, [lon]);
    useEffect(() => {
        fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${Area}&limit=1&appid=5409c77e81f618325e0ef657a28f2114`)
            .then((Response) => Response.json())
            .then((result) => setlon(result[0]))
            .catch((error) => console.log(error));
    }, [Area]);
    return (
        <>
            <HeaderCont />
            <main id="main" className="main__wrap">
                <div className="main__inner">
                    <Contetns />

                    <Aside temps={temp} onSearch={setArea} />
                </div>
            </main>
            <Footer />
        </>
    );
};

export default Main;
