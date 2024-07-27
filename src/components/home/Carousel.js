import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const imageProp = ["pizza.jpg", "biryani.jpg", "mutton.jpg"];

function CarouselComponent() {
    return (
        <Carousel autoPlay
            navButtonsAlwaysVisible
            infiniteLoop
            showStatus={false}
            emulateTouch
            showThumbs={false}>

            {imageProp.map((image) => {
                return (
                    <div key={image}
                        style={{ maxHeight: "36rem" }}
                        className="object-center brightness-50">
                        <img src={image} alt={image} />
                    </div>
                )
            })}

        </Carousel>
    );
}

export default CarouselComponent;