import React, { Component } from 'react';
import '../App.css';

export class History extends Component {
  render() {

    const { historyText } = this.props;

    return(
      <section>
        <div className="history flex">
          <div className="history_left">
            <h1>История</h1>            
            <div className="history_text">
              {historyText}
            </div>
            <div className="button_red">
              Подробнее
            </div> 
          </div>
          <div className="history_slider">            
          </div> 
        </div>      
      </section>  
)
  }
} 
