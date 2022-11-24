import React, { useRef } from "react";
// import { Loader } from "../components";

const Aside = ({ temps, onSearch }) => {
    const inputRef = useRef();
    // if (!temps?.length) return <Loader />;

    const handleSearch = () => {
        const value = inputRef.current.value;
        onSearch(value);
        // document.querySelector(".main_cityName").innerHTML = `
        // <img src=${require("../assets/img/mapMarker_ico.svg").default} alt="" />${temps.name}`;
        inputRef.current.value = "";
        // <img src=${require("../assets/img/mapMarker_ico.svg").default} alt="" />${value}`;
    };
    const enterKey = (event) => {
        if (event.key === "Enter") {
            console.log(inputRef.current.value);
            handleSearch();
        }
    };
    const onClick = () => {
        handleSearch();
    };
    // console.log(temps);
    // const tempstransform = Math.floor(temps.main.temp);
    // const feeltempstransform = Math.floor(temps.main.feels_like);
    // const tempIcon = temps.weather[0].icon;
    console.log(temps.weather);
    return (
        <aside id="aside" className="aside__wrap">
            <div className="aside__inner">
                <p>
                    <label htmlFor="search" className="blind">
                        검색
                    </label>
                    <input ref={inputRef} type="text" id="search" title="검색" placeholder="도시 이름을 입력해주세요." onKeyPress={enterKey} />
                    <button type="submit" onClick={onClick} className="searchBtn">
                        검색
                    </button>
                    <img src={require("../assets/img/search_ico.svg").default} alt="검색 아이콘" />
                </p>
                <div className="mainWeather__box">
                    <div className="mainWeather__inner">
                        <p className="main_cityName">
                            <img src={require("../assets/img/mapMarker_ico.svg").default} alt="" />
                            {temps.name}
                        </p>
                        <p className="main_cityTemp">
                            <em>{temps.main?.temp}</em> º
                        </p>
                        <div className="main_weatherImg">
                            {/* <img src={`http://openweathermap.org/img/wn/${temps.weather[0]?.icon}@2x.png`} alt="날씨아이콘" /> */}
                        </div>
                        <div className="main__weatherInfo">
                            <div className="mainWeatherInfo__inner">
                                <article className="info precipitation">
                                    <h5>체감온도</h5>
                                    <p>{temps.main?.feels_like} º</p>
                                </article>
                                <article className="info humidity">
                                    <h5>습도</h5>
                                    <p>{temps.main?.humidity} %</p>
                                </article>
                                <article className="info wind">
                                    <h5>바람</h5>
                                    <p>{temps.wind?.speed}m/s</p>
                                </article>
                                <article className="info dust">
                                    <h5>흐림지수</h5>
                                    <p>{temps.clouds?.all} %</p>
                                </article>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="subWeather__box">
                    <div className="subWeather__inner">
                        <article className="sub_info japan">
                            <h4>Japan</h4>
                            <div className="subInfo_box">
                                <div className="subWeather_img"></div>
                                <p className="sub_temp">-8º</p>
                            </div>
                        </article>
                        <article className="sub_info china">
                            <h4>China</h4>
                            <div className="subInfo_box">
                                <div className="subWeather_img"></div>
                                <p className="sub_temp">-8º</p>
                            </div>
                        </article>
                        <article className="sub_info russia">
                            <h4>Russia</h4>
                            <div className="subInfo_box">
                                <div className="subWeather_img"></div>
                                <p className="sub_temp">-8º</p>
                            </div>
                        </article>
                        <article className="sub_info us">
                            <h4>US</h4>
                            <div className="subInfo_box">
                                <div className="subWeather_img"></div>
                                <p className="sub_temp">-8º</p>
                            </div>
                        </article>
                        <article className="sub_info western">
                            <h4>Western</h4>
                            <div className="subInfo_box">
                                <div className="subWeather_img"></div>
                                <p className="sub_temp">-8º</p>
                            </div>
                        </article>
                        <article className="sub_info eastern">
                            <h4>Eastern</h4>
                            <div className="subInfo_box">
                                <div className="subWeather_img"></div>
                                <p className="sub_temp">-8º</p>
                            </div>
                        </article>
                    </div>
                </div>
            </div>
        </aside>
    );
};

export default Aside;
