// import React, { useRef } from "react";
// // import React, { useState, useEffect, useRef } from "react";
// import { AsidemainBox } from "./";
// // import { fetchAPI } from "../utils/fetchAPI";
// // import React, { useRef } from "react";

// const Aside = ({ temp, onSearch }) => {
//     // const [temp, setTemp] = useState([]);
//     // useEffect(() => {
//     //     fetchAPI(`data/2.5/weather?lat=${lon.lat}&lon=${lon.lon}&lang=kr&&units=metric`).then((data) => setTemp(data));
//     // }, [lon]);
//     const inputRef = useRef();
//     const handleSearch = () => {
//         const value = inputRef.current.value;
//         onSearch(value);
//         inputRef.current.value = "";
//     };
//     const enterKey = (event) => {
//         if (event.key === "Enter") {
//             console.log(inputRef.current.value);
//             handleSearch();
//         }
//     };
//     const onClick = () => {
//         handleSearch();
//     };

//     return (
//         <aside id="aside" className="aside__wrap">
//             <div className="aside__inner">
//                 <p>
//                     <label htmlFor="search" className="blind">
//                         검색
//                     </label>
//                     <input ref={inputRef} type="text" id="search" title="검색" placeholder="도시 이름을 입력해주세요." onKeyPress={enterKey} />
//                     <img src={require("../assets/img/search_ico.svg").default} alt="검색 아이콘" onClick={onClick} />
//                 </p>
//                 <AsidemainBox temp={temp} />
//                 <div className="subWeather__box">
//                     <div className="subWeather__inner">
//                         <article className="sub_info japan">
//                             <h4>Japan</h4>
//                             <div className="subInfo_box">
//                                 <div className="subWeather_img"></div>
//                                 <p className="sub_temp">-8º</p>
//                             </div>
//                         </article>
//                         <article className="sub_info china">
//                             <h4>China</h4>
//                             <div className="subInfo_box">
//                                 <div className="subWeather_img"></div>
//                                 <p className="sub_temp">-8º</p>
//                             </div>
//                         </article>
//                         <article className="sub_info russia">
//                             <h4>Russia</h4>
//                             <div className="subInfo_box">
//                                 <div className="subWeather_img"></div>
//                                 <p className="sub_temp">-8º</p>
//                             </div>
//                         </article>
//                         <article className="sub_info us">
//                             <h4>US</h4>
//                             <div className="subInfo_box">
//                                 <div className="subWeather_img"></div>
//                                 <p className="sub_temp">-8º</p>
//                             </div>
//                         </article>
//                         <article className="sub_info western">
//                             <h4>Western</h4>
//                             <div className="subInfo_box">
//                                 <div className="subWeather_img"></div>
//                                 <p className="sub_temp">-8º</p>
//                             </div>
//                         </article>
//                         <article className="sub_info eastern">
//                             <h4>Eastern</h4>
//                             <div className="subInfo_box">
//                                 <div className="subWeather_img"></div>
//                                 <p className="sub_temp">-8º</p>
//                             </div>
//                         </article>
//                     </div>
//                 </div>
//             </div>
//         </aside>
//     );
// };

// export default Aside;
