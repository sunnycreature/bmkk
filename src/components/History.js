import React, { Component } from 'react';
import '../App.css';

export class History extends Component {
  render() {
    const { historyText, historyTitle, historyBtnName} = this.props;
    return(
      <section>
        <div className="history flex">
          <div className="history_left">
            <h1>{historyTitle}</h1>            
            <div className="history_text">
              {historyText}
            </div>
            <div className="button_red">
              {historyBtnName}
            </div> 
          </div>
          <div className="history_slider">            
          </div> 
        </div>      
      </section>  
    )
  }
} 
