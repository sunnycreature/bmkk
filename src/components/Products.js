import React, { Component } from 'react';
import '../App.css';


export class Products extends Component {
  render() {
    const { productsTitle, productsBtnSausages, productsBtnMeat, productsBtnConserves} = this.props;    
    return(
      <section>
        <div className="products">
          <h1>{productsTitle}</h1>          
          <div className="products_btn flex">            
            <div className="products_bgr sausages">
              <div className="button_white">
                {productsBtnSausages}
              </div>
            </div>  
            <div className="products_bgr meat">
              <div className="button_white meat">
                {productsBtnMeat}
              </div>
            </div>
            <div className="products_bgr conserves">  
              <div className="button_white">
                {productsBtnConserves}
              </div>
            </div>   
          </div>
        </div>      
      </section>  
)
  }
} 
