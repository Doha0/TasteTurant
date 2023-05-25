import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import SectionTitle from '../../Components/SectionTitle/SectionTitle';
import { BsChatSquareQuoteFill } from 'react-icons/bs';

import "swiper/css";
import "swiper/css/navigation";
import StarRatings from 'react-star-ratings';


const Testimonials = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('reviews.json')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, []);

    return (
        <section className="my-20 lg:mx-40 lg:px-20 text-center">
            <SectionTitle
                subHeading="What Our Client Say"
                heading={'Testimonials'}
            ></SectionTitle>

            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">

                {
                    reviews.map(review => <SwiperSlide
                        key={review._id}
                    >
                        <div className="flex flex-col items-center mx-24 my-16">
                            <StarRatings
                                rating={review.rating}
                                starRatedColor="orange"
                                starDimension="25px"
                                starSpacing="5px"
                            />
                            <BsChatSquareQuoteFill size={48} className='mt-4' />
                            <p className="py-8">{review.details}</p>
                            <h3 className="text-2xl text-orange-400">{review.name}</h3>
                        </div>
                    </SwiperSlide>)
                }
            </Swiper>
        </section>
    );
};

export default Testimonials;