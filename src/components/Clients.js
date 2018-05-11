import React, { Component } from 'react';
import '../App.css';
import '../Carousel.css';



export class Clients extends Component {
  render() {    
    const { clientsBtnName } = this.props;
    return(
      <section>
        <div className="clients">
          <div className="clients_slider row">
          </div>
        </div>      
        <div className="row justify-content-center">
          <div className="button_red big">
            {clientsBtnName}
          </div> 
        </div>  
      </section>  
)
  }
} 
/*            <button className="slick-prev slick-arrow" aria-label="Previous" type="button">
              Previous
            </button>
            <button className="slick-next slick-arrow" aria-label="Next" type="button">
              Next
            </button>            
            */