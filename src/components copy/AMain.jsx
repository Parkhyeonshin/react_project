// import React, { useState, useEffect } from "react";
// import { fetchAPI } from "../utils/fetchAPI";
// // import React, { useState, useEffect } from "react";
// // import { Aside, Contetns, HeaderCont, Footer } from "./";
// import { HeaderCont, Footer, Aside } from "./";

// const Main = () => {
//     const [Area, setArea] = useState(["부산"]);
//     const [lon, setlon] = useState([]);
//     const [temp, setTemp] = useState([]);
//     const [hourtemp, sethourtemp] = useState([]);

//     useEffect(() => {
//         fetchAPI(`geo/1.0/direct?q=${Area}&limit=1`).then((data) => setlon(data[0]));
//     }, [Area]);
//     useEffect(() => {
//         fetchAPI(`data/2.5/weather?lat=${lon.lat}&lon=${lon.lon}&lang=kr&&units=metric`).then((data) => setTemp(data));
//     }, [lon]);
//     useEffect(() => {
//         fetchAPI(`data/2.5/forecast?lat=${lon.lat}&lon=${lon.lon}&lang=kr&&units=metric`).then((data) => console.log(data));
//     }, [lon]);

//     return (
//         <>
//             <HeaderCont />
//             <main id="main" className="main__wrap">
//                 <div className="main__inner">
//                     {/* <Contetns lon={lon} /> */}

//                     <Aside temp={temp} onSearch={setArea} />
//                 </div>
//             </main>
//             <Footer />
//         </>
//     );
// };

// export default Main;
