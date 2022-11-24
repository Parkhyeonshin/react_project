import React, { useState, useEffect, useCallback } from "react";
import { Aside, Contetns, HeaderCont, Footer } from "./";
// import { Contetns, HeaderCont, Footer } from "./";

const Main = () => {
    const [Area, setArea] = useState("부산");
    const [temp, setTemp] = useState([]);
    const [lon, setlon] = useState([]);
    // 돈내라고해서 안함
    // useEffect(() => {
    //     fetch(`https://api.openweathermap.org/data/3.0/onecall?lat=${lon.lat}&lon=${lon.lon}&appid=5409c77e81f618325e0ef657a28f2114&lang=kr`)
    //         .then((Response) => Response.json())
    //         .then((result) => console.log(result))
    //         // .then((result) => setTemp(result))
    //         .catch((error) => console.log(error));
    // }, [lon]);
    // ?아마 되어있는 제이썬인거같기도?
    const pleaseTemp = useCallback(async () => {
        await fetch(
            `https://api.openweathermap.org/data/2.5/weather?lat=${lon.lat}&lon=${lon.lon}&appid=ca3d1914667aa26ea2f7562fe6b0fefb&lang=kr&units=metric`
            // `https://api.openweathermap.org/data/2.5/weather?lat=43.6908432&lon=0.7735233&lang=kr&units=metric&appid=5409c77e81f618325e0ef657a28f2114`
        )
            .then((Response) => Response.json())
            // .then((result) => console.log(lon.lon))
            .then((result) => setTemp(result))
            .catch((error) => console.log(error));
    }, [lon]);
    const pleaseArea = useCallback(async () => {
        await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${Area}&limit=1&appid=ca3d1914667aa26ea2f7562fe6b0fefb`)
            .then((Response) => Response.json())
            .then((result) => setlon(result[0]))
            .catch((error) => console.log(error));
    }, [Area]);
    useEffect(() => {
        pleaseTemp();
    }, [pleaseTemp]);

    useEffect(() => {
        pleaseArea();
    }, [pleaseArea]);
    return (
        <>
            <HeaderCont />
            <main id="main" className="main__wrap">
                <div className="main__inner">
                    <Contetns lon={lon} />

                    <Aside temps={temp} onSearch={setArea} />
                </div>
            </main>
            <Footer />
        </>
    );
};

export default Main;
