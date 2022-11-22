import React, { useState, useEffect } from "react";
import { Aside, ContentSlide } from "./";

const Main = () => {
    const [temp, setTemp] = useState([]);

    useEffect(() => {
        fetch("https://goweather.herokuapp.com/weather/Ansan")
            .then((Response) => Response.json())
            .then((result) => setTemp(result))
            .catch((error) => console.log(error));
    }, []);
    return (
        <main id="main" className="main__wrap">
            <div className="main__inner">
                <section id="contents" className="contents__wrap">
                    <div className="contents__inner">
                        <h2>이런날 이런 음식 어때?</h2>
                        <ContentSlide />
                        <div className="contents__descWrap">
                            <div className="time_weather">
                                <div>
                                    <img src="../../src/assets/img/Sun cloud.png" alt="icon" className="time_weather_svg" />
                                    <div>AM 06</div>
                                </div>
                                <div>
                                    <img src="./assets/img/Sun cloud.png" alt="icon" className="time_weather_svg" />
                                    <div>AM 09</div>
                                </div>
                                <div>
                                    <img src="./assets/img/Sun cloud.png" alt="icon" className="time_weather_svg" />
                                    <div>AM 12</div>
                                </div>
                                <div>
                                    <img src="./assets/img/Sun cloud.png" alt="icon" className="time_weather_svg" />
                                    <div>PM 03</div>
                                </div>
                                <div>
                                    <img src="./assets/img/Sun cloud.png" alt="icon" className="time_weather_svg" />
                                    <div>PM 06</div>
                                </div>
                                <div>
                                    <img src="./assets/img/Sun cloud.png" alt="icon" className="time_weather_svg" />
                                    <div>PM 09</div>
                                </div>
                            </div>
                            <div className="time__desc">
                                <div>
                                    <p>
                                        오늘은 날씨가 너무 더워요. <br />
                                        시원한 음식으로 더위를 풀어보는 건 어떨까요?
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <Aside temps={temp} />
            </div>
        </main>
    );
};

export default Main;
