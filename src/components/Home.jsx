import React from 'react';

export  default () => (
    	    <React.Fragment>
                <div className="banner">
                    <div className="banner__content flex-column justify-content__center align-items__center">
                        <div className="headline">
                            SendIT
                            <p className="subtitle">Your No.<span>1</span> Parcel Delivery solution</p>
                        </div>
                        <p className="text-center">
                        SendIT is a courier service that helps users deliver parcels to different destinations. We provide courier quotes based on weight categories. 
                        </p>
                        <button className="button home__btn attention">
                            <a href="#learn">Learn More</a>
                        </button>
                    </div>
                </div>
                <section className="howto flex-column" id="learn">
                    <p>Send a parcel in just three steps.</p>
                    <div className="flex justify-content__center">
                        <p>Create account <a href="signup" className="link">here</a></p>
                        <p>Fill out details of parcel</p>
                        <p>Track your order</p>
                        <p>Opt in for email notifications</p>
                    </div>
                </section>
                <section className="showcase flex">
                    <div className="showcase__item flex-column">
                        <figure className="figure">
                            <img src="images/ship.jpg" alt="Shipping Parcel" className="showvase__image" />
                        </figure>
                        <figcaption className="showcase__text">You Create Order</figcaption>
                    </div>
                    <div className="showcase__item flex-column">
                        <figure className="figure">
                            <img src="images/track.png" alt="Tracking Parcel" className="showcase__image" />
                        </figure>
                        <figcaption className="showcase__text">You Track Order</figcaption>
                    </div>
                    <div className="showcase__item flex-column">
                        <figure className="figure">
                            <img src="images/deliver.jpg" alt="Deliver Parcel" className="showcase__image" />
                        </figure>
                        <figcaption className="showcase__text">We Deliver Order</figcaption>
                    </div>
                </section>
            </React.Fragment>
);
