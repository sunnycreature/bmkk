import React, { Component } from 'react';
import '../App.css';

export class Production extends Component {
  render() {

    return(
      <section>
        <div className="production">
          <h1>Продукция</h1>
          <div className="bgr_sausages"></div>
          <div className="production_btn flex">
            

            <div className="button_white sausages">
              Колбасы
            </div>
            <div className="button_white meat">
              Мясо
            </div>
            <div className="button_white conserve">
              Консервы
            </div> 
          </div>
        </div>      
      </section>  
)
  }
} 
