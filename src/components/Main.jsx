import React, { useState, useEffect } from "react";
import { fetchAPI } from "../utils/fetchAPI";
// import React, { useState, useEffect } from "react";
// import { Aside, Contetns, HeaderCont, Footer } from "./";
import { HeaderCont, Footer, Aside } from "./";

const Main = () => {
    const [Area, setArea] = useState(["부산"]);
    const [lon, setlon] = useState([]);

    useEffect(() => {
        fetchAPI(`geo/1.0/direct?q=${Area}&limit=1`).then((data) => setlon(data[0]));
    }, [Area]);

    // const pleaseArea = useCallback(async () => {
    //     await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${Area}&limit=1&appid=ca3d1914667aa26ea2f7562fe6b0fefb`)
    //         .then((Response) => Response.json())
    //         .then((result) => setlon(result[0]))
    //         .catch((error) => console.log(error));
    // }, [Area]);

    // useEffect(() => {
    //     pleaseArea();
    // }, [pleaseArea]);

    // useEffect(() => {
    //     fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${Area}&limit=1&appid=ca3d1914667aa26ea2f7562fe6b0fefb`)
    //         .then((Response) => Response.json())
    //         .then((result) => console.log(result[0]))
    //         .catch((error) => console.log(error));
    // }, [Area]);

    return (
        <>
            <HeaderCont />
            <main id="main" className="main__wrap">
                <div className="main__inner">
                    {/* <Contetns lon={lon} /> */}

                    <Aside lon={lon} onSearch={setArea} />
                </div>
            </main>
            <Footer />
        </>
    );
};

export default Main;
