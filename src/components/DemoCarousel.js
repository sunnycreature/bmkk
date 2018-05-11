import React, { Component } from 'react';
import ReactDOM from 'react-dom';

 
export class CarouselSlider extends Component {
    render() {

        let data = [

            {
                "des": "1",
                "imgSrc": "./img/clients/client1.png"
            },
            {
                "des": "2",
                "imgSrc": "./img/clients/client1.png"
            },
            {
                "des": "3",
                "imgSrc": "./img/clients/client1.png"
            },
            {
                "des": "4",
                "imgSrc": "./img/clients/client1.png"
            },
            {
                "des": "5",
                "imgSrc": "https://i.imgur.com/qkPMr9D.jpg"
            }
        ];

        return  <CarouselSlider1 slideItems = {data} />;   

    }
}
//ReactDOM.render(<DemoCarousel />, document.querySelector('.demo-carousel'));