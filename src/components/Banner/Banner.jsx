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
                                <img src="https://i.ibb.co/RhyVzS5/Add-a-little-bit-of-body-text.jpg" alt="" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div>
                                <img src="https://i.ibb.co/WBMGNLr/Run-your-company-with-ease.jpg" alt="" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div>
                                <img src="https://i.ibb.co/pnXDkCK/Beige-Gray-Aesthetic-Photo-Collage-Shop-New-Collection-Promotion-Banner.jpg" alt="" />
                            </div>
                        </SwiperSlide>
                         <SwiperSlide>
                            <div>
                                <img src="https://i.ibb.co/sqzfTqw/Beige-Black-Modern-Photo-Collage-Summer-New-Collection-Banner.jpg" alt="" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div>
                                <img src="https://i.ibb.co/SRw4R2n/Simple-Modern-Photo-Collage-Autumn-Fashion-Sale-Banner.jpg" alt="" />
                            </div>
                        </SwiperSlide>

                        {/*<SwiperSlide>
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