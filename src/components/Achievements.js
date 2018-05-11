import React, { Component } from 'react';
import '../App.css';

export class Achievements extends Component {
  render() {

    const { achievementsText, achievementsTitle, achievementsBtnName } = this.props;

    return(
      <section>
        <div className="achievements">
          <h1>{achievementsTitle}</h1>            
          <div className="achievements_text">
            {achievementsText}
          </div>
        </div>      
        <div className="row justify-content-center">
          <div className="button_red">
            {achievementsBtnName}
          </div> 
        </div>  
      </section>  
)
  }
} 