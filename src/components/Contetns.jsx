import React, { useState, useEffect } from "react";
import { ContentSlide, ContentDesc } from "./";

const Contetns = ({ lon }) => {
    console.log(lon);
    const [hourtemp, sethourTemp] = useState(null);

    // const pleasehourTemp = useCallback(async () => {
    //     await fetch(
    //         `https://api.openweathermap.org/data/2.5/forecast?lat=${lon.lat}&lon=${lon.lon}&appid=ca3d1914667aa26ea2f7562fe6b0fefb&lang=kr&units=metric`
    //     )
    //         .then((Response) => Response.json())
    //         // .then((result) => console.log(result))
    //         .then((result) => sethourTemp(result))
    //         .catch((error) => console.log(error));
    // }, [lon]);

    // useEffect(() => {
    //     pleasehourTemp();
    // }, [pleasehourTemp]);

    useEffect(() => {
        fetch(
            `https://api.openweathermap.org/data/2.5/forecast?lat=${lon.lat}&lon=${lon.lon}&appid=ca3d1914667aa26ea2f7562fe6b0fefb&lang=kr&units=metric`
        )
            .then((Response) => Response.json())
            // .then((result) => console.log(result))
            .then((result) => sethourTemp(result))
            .catch((error) => console.log(error));
    }, [lon]);

    return (
        <section id="contents" className="contents__wrap">
            <div className="contents__inner">
                <h2>이런날 이런 음식 어때?</h2>
                <ContentSlide />
                <ContentDesc hourtemp={hourtemp} />
            </div>
        </section>
    );
};

export default Contetns;
