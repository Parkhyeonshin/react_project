// import React from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import img1 from "../assets/img/냉면.png";
// import "swiper/css";
// import "swiper/css/effect-coverflow";
// import "swiper/css/navigation";
// import { EffectCoverflow, Navigation } from "swiper";

// // function addbtn() {
// //     // setTimeout(() => {
// //     //     document.querySelector(".swiper-button-prev").innerHTML = "Nope!";
// //     //     document.querySelector(".swiper-button-next").innerHTML = "Good!";
// //     // }, 100);
// // }
// const ContentSlide = () => {
//     return (
//         <div className="contetns__slideWrap">
//             <Swiper
//                 effect={"coverflow"}
//                 grabCursor={true}
//                 centeredSlides={true}
//                 slidesPerView={"auto"}
//                 loop={true}
//                 coverflowEffect={{
//                     rotate: -10,
//                     stretch: -200,
//                     depth: 100,
//                     modifier: 1,
//                     slideShadows: false,
//                 }}
//                 navigation={true}
//                 // navigation={{
//                 //     prevEl: true,
//                 //     nextEl: false,
//                 // }}
//                 modules={[EffectCoverflow, Navigation]}
//                 className="mySwiper"
//             >
//                 <SwiperSlide>
//                     <img src={img1} alt="이미지" />
//                     <div className="swiper-name">냉면</div>
//                 </SwiperSlide>
//                 <SwiperSlide>
//                     <img src={img1} alt="이미지" />
//                     <div className="swiper-name">냉면</div>
//                 </SwiperSlide>
//                 <SwiperSlide>
//                     <img src={img1} alt="이미지" />
//                     <div className="swiper-name">냉면</div>
//                 </SwiperSlide>
//                 <SwiperSlide>
//                     <img src={img1} alt="이미지" />
//                     <div className="swiper-name">냉면</div>
//                 </SwiperSlide>
//             </Swiper>
//             {/* {addbtn()} */}
//             {/* <div className="swiper mySwiper">
//         <div className="swiper-wrapper">
//             <div className="swiper-slide">
//                 <img src="/assets/img/냉면.png" alt="스와이프이미지" />
//                 <div className="swiper-name">냉면</div>
//             </div>
//             <div className="swiper-slide">
//                 <img src="./assets/img/삼계탕.png" alt="스와이프이미지" />
//                 <div className="swiper-name">삼계탕</div>
//             </div>
//             <div className="swiper-slide">
//                 <img src="./assets/img/화채.png" alt="스와이프이미지" />
//                 <div className="swiper-name">화채</div>
//             </div>
//             <div className="swiper-slide">
//                 <img src="./assets/img/냉면.png" alt="스와이프이미지" />
//                 <div className="swiper-name">냉면</div>
//             </div>
//             <div className="swiper-slide">
//                 <img src="./assets/img/삼계탕.png" alt="스와이프이미지" />
//                 <div className="swiper-name">삼계탕</div>
//             </div>
//             <div className="swiper-slide">
//                 <img src="./assets/img/화채.png" alt="스와이프이미지" />
//                 <div className="swiper-name">화채</div>
//             </div>
//             <div className="swiper-slide">
//                 <img src="./assets/img/냉면.png" alt="스와이프이미지" />
//                 <div className="swiper-name">냉면</div>
//             </div>
//             <div className="swiper-slide">
//                 <img src="./assets/img/삼계탕.png" alt="스와이프이미지" />
//                 <div className="swiper-name">삼계탕</div>
//             </div>
//             <div className="swiper-slide">
//                 <img src="./assets/img/화채.png" alt="스와이프이미지" />
//                 <div className="swiper-name">화채</div>
//             </div>
//         </div>
//         <button className="swiper-button-next">Nope!</button>
//         <button className="swiper-button-prev">Good!</button>
//     </div> */}
//         </div>
//     );
// };

// export default ContentSlide;
