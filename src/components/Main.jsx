import React from "react";
// import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import img1 from "../assets/img/냉면.png";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";

import { EffectCoverflow, Navigation } from "swiper";

// const Navigation2 = {
//     clickable: true,
//     renderBullet: function (index, className) {
//         return '<button class="' + className + '">' + "Nope!" + "</button";
//     },
// };
function addbtn() {
    setTimeout(() => {
        document.querySelector(".swiper-button-prev").innerHTML = "Nope!";
        document.querySelector(".swiper-button-next").innerHTML = "Good!";
    }, 100);
    console.log(document.querySelector(".swiper-button-next"));
}

const Main = () => {
    return (
        <main id="main" className="main__wrap">
            <div className="main__inner">
                <section id="contents" className="contents__wrap">
                    <div className="contents__inner">
                        <h2>이런날 이런 음식 어때?</h2>
                        <div className="contetns__slideWrap">
                            <Swiper
                                effect={"coverflow"}
                                grabCursor={true}
                                centeredSlides={true}
                                slidesPerView={"auto"}
                                loop={true}
                                coverflowEffect={{
                                    rotate: -10,
                                    stretch: -200,
                                    depth: 100,
                                    modifier: 1,
                                    slideShadows: false,
                                }}
                                navigation={true}
                                // navigation={{
                                //     prevEl: true,
                                //     nextEl: false,
                                // }}
                                modules={[EffectCoverflow, Navigation]}
                                className="mySwiper"
                            >
                                <SwiperSlide>
                                    <img src={img1} alt="이미지" />
                                    <div className="swiper-name">냉면</div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img src={img1} alt="이미지" />
                                    <div className="swiper-name">냉면</div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img src={img1} alt="이미지" />
                                    <div className="swiper-name">냉면</div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img src={img1} alt="이미지" />
                                    <div className="swiper-name">냉면</div>
                                </SwiperSlide>
                            </Swiper>
                            {(window.onload = addbtn())}
                            {/* <div className="swiper mySwiper">
                                <div className="swiper-wrapper">
                                    <div className="swiper-slide">
                                        <img src="/assets/img/냉면.png" alt="스와이프이미지" />
                                        <div className="swiper-name">냉면</div>
                                    </div>
                                    <div className="swiper-slide">
                                        <img src="./assets/img/삼계탕.png" alt="스와이프이미지" />
                                        <div className="swiper-name">삼계탕</div>
                                    </div>
                                    <div className="swiper-slide">
                                        <img src="./assets/img/화채.png" alt="스와이프이미지" />
                                        <div className="swiper-name">화채</div>
                                    </div>
                                    <div className="swiper-slide">
                                        <img src="./assets/img/냉면.png" alt="스와이프이미지" />
                                        <div className="swiper-name">냉면</div>
                                    </div>
                                    <div className="swiper-slide">
                                        <img src="./assets/img/삼계탕.png" alt="스와이프이미지" />
                                        <div className="swiper-name">삼계탕</div>
                                    </div>
                                    <div className="swiper-slide">
                                        <img src="./assets/img/화채.png" alt="스와이프이미지" />
                                        <div className="swiper-name">화채</div>
                                    </div>
                                    <div className="swiper-slide">
                                        <img src="./assets/img/냉면.png" alt="스와이프이미지" />
                                        <div className="swiper-name">냉면</div>
                                    </div>
                                    <div className="swiper-slide">
                                        <img src="./assets/img/삼계탕.png" alt="스와이프이미지" />
                                        <div className="swiper-name">삼계탕</div>
                                    </div>
                                    <div className="swiper-slide">
                                        <img src="./assets/img/화채.png" alt="스와이프이미지" />
                                        <div className="swiper-name">화채</div>
                                    </div>
                                </div>
                                <button className="swiper-button-next">Nope!</button>
                                <button className="swiper-button-prev">Good!</button>
                            </div> */}
                        </div>
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
                                    <em>3</em> º
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
                                            <p>2m/s</p>
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
            </div>
        </main>
    );
};

export default Main;
