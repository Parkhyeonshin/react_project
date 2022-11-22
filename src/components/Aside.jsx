import React from "react";

const Aside = ({ temps }) => {
    console.log({ temps });
    return (
        <aside id="aside" className="aside__wrap">
            <div className="aside__inner">
                <form action="#c" className="search__box">
                    <p>
                        <label htmlFor="search" className="blind">
                            검색
                        </label>
                        <input type="text" id="search" placeholder="도시 이름을 입력해주세요." />

                        <img src="assets/img/search_ico.svg" alt="검색 아이콘" />
                    </p>
                </form>
                <div className="mainWeather__box">
                    <div className="mainWeather__inner">
                        <p className="main_cityName">
                            <img src="assets/img/mapMarker_ico.svg" alt="" />
                            Incheon
                        </p>
                        <p className="main_cityTemp">
                            <em>{temps.temperature}</em> º
                        </p>
                        <div className="main_weatherImg"></div>
                        <div className="main__weatherInfo">
                            <div className="mainWeatherInfo__inner">
                                <article className="info precipitation">
                                    <h5>강수확률</h5>
                                    <p>3%</p>
                                </article>
                                <article className="info humidity">
                                    <h5>습도</h5>
                                    <p>63%</p>
                                </article>
                                <article className="info wind">
                                    <h5>바람</h5>
                                    <p>{temps.wind}</p>
                                </article>
                                <article className="info dust">
                                    <h5>미세먼지</h5>
                                    <p>보통</p>
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
