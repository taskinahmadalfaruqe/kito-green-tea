import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import './Banner.css'

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { Zoom } from "react-awesome-reveal";



const Banner = () => {
    return (
        <>
            <Zoom>
                <div className="container">

                    <Swiper
                        spaceBetween={30}
                        centeredSlides={true}
                        autoplay={{
                            delay: 3000,
                            disableOnInteraction: false,
                        }}
                        pagination={{
                            clickable: true,
                        }}
                        navigation={true}
                        modules={[Autoplay, Pagination, Navigation,]}
                        className="mySwiper"
                    >
                        <SwiperSlide className="md:h-[100px]">
                            <div>
                                <img src="https://i.ibb.co/t8vyGhV/1711907352305.png" alt="" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div>
                                <img src="https://i.ibb.co/MM0sQQR/1711907352362.png" alt="" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div>
                                <img src="https://i.ibb.co/Pm1Nw3w/1711907352258.png" alt="" />
                            </div>
                        </SwiperSlide>
                        {/* <SwiperSlide>
                            <div>
                                <img src="https://i.ibb.co/tQFtdzg/selective-focus-shot-two-cute-friendly-dogs-sitting-each-other-nature.jpg" alt="" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div>
                                <img src="https://i.ibb.co/kKcnSYb/portrait-white-rabbit-playing-green-grass.jpg" alt="" />
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div>
                                <img src="https://i.ibb.co/cDd0L25/2150782303-1.jpg" alt="" />
                            </div>
                        </SwiperSlide> */}


                    </Swiper>

                </div>
            </Zoom>
        </>
    );
};

export default Banner;