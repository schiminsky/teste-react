import React, { Component, useState } from 'react';
import './style.css';

import bannerImg from '../../assets/img/banner.jpg';
import Slider from 'react-slick'

const Banner = () => {
    
    const settings={
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        arrows: false,
        slidesToScroll: 1,
        className: "banner"
    };

    const photos =[
        {
            name: 'Photos 1',
            url: bannerImg,
        },
        {
            name: 'Photos 2',
            url: bannerImg,
        },
        {
            name: 'Photos 3',
            url: bannerImg,
        },
        {
            name: 'Photos 4',
            url: bannerImg,
        },
    ]

    

    return (
    <div className="banner">
        <Slider {...settings}>
            {photos.map((photo, index)  => {
                console.log(photo)
                return (<img src={photo.url} key={index} alt ="banner"/>)
            })}        
        </Slider>
    </div> 
    );
}

export default Banner;