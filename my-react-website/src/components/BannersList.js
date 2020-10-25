import React from 'react';

const BannersList = ({ banners }) => (
    <>
    <h3>Other banners:</h3>
    {banners.map((banner, key) => (
        <div className="banner" key={key}>
            <img src={"/banner_images/" + banner.bgr} alt="bannerImg" />
            <div className="centered">
                <h4>{banner.title}</h4>
                <p>{banner.text}</p>
                {banner.buttonText && banner.buttonUrl &&
                <a href={banner.buttonUrl}>
                    <p className="link-button">{banner.buttonText}</p>
                </a>}
                {!banner.buttonText && !banner.buttonUrl && null}
                {banner.buttonText && !banner.buttonUrl &&
                <a href="/">
                    <p className="link-button">{banner.buttonText}</p>
                </a>}
                {!banner.buttonText && banner.buttonUrl && 
                <a href={banner.buttonUrl}>
                    <p className="link-button">{'Click here'}</p>
                </a>}
            </div>
        </div>
    ))}
    </>
);

export default BannersList;