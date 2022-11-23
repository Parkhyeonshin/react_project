import React, { useRef } from "react";
// import $ from "jquery";

const Aside = ({ temps, onSearch }) => {
    console.log({ temps });
    // // input 박스 엔터키 검색 적용
    // function enterKey() {
    //     if (window.event.keyCode === 13) {
    //         // 엔터키가 눌렸을 때 실행하는 반응
    //         $("#search").submit();
    //         // alert("엔터 적용 완료");
    //     }
    // }
    const handleSearch = () => {
        const value = inputRef.current.value;
        onSearch(value);
    };
    const inputRef = useRef();
    const enterKey = (event) => {
        if (event.key === "Enter") {
            handleSearch();
        }
    };
    const onClick = () => {
        handleSearch();
    };
    return (
        <aside id="aside" className="aside__wrap">
            <div className="aside__inner">
                {/* <form action="#c" className="search__box"> */}
                <p>
                    <label htmlFor="search" className="blind">
                        검색
                    </label>
                    <input type="search" id="search" placeholder="도시 이름을 입력해주세요." onKeyPress={enterKey} />
                    <button type="submit" onClick={onClick}>
                        1111
                    </button>
                    <img src="assets/img/search_ico.svg" alt="검색 아이콘" />
                </p>
                {/* </form> */}
                <div className="mainWeather__box">
                    <div className="mainWeather__inner">
                        <p className="main_cityName">
                            <img src="assets/img/mapMarker_ico.svg" alt="" />
                            Ansan
                        </p>
                        <p className="main_cityTemp">
                            <em>{temps?.main?.temp}</em> º
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
                                    <p>{temps?.main?.humidity}%</p>
                                </article>
                                <article className="info wind">
                                    <h5>바람</h5>
                                    <p>{temps?.wind?.speed}m/s</p>
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
