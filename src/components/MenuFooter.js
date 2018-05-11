import React, { Component } from 'react';
import '../App.css';
import { MENU, MENUFOOT } from '../const.js'

export class MenuFooter extends Component {
  render() {
    const {lang, footerRightsText, activeSection} = this.props; 
    return(
      <div>
        <div className="menu_foot flex">
          <ul className="menu_bar menuFoot">
            {MENU.map( m => 
              <li key={m.id} className = {activeSection === m.id ? "active" : ""}>
                {m.caption[lang]}              
                {MENUFOOT.map( mf => 
                  <ul className = {m.id === mf.id ? "" : "display_none"} > 
                    <li key={mf.id}>
                      {mf.caption[lang]}
                    </li>
                  </ul>)
                }              
              </li>
              )
            }
          </ul>  
        </div>  
        <div className="foot_rights">
          {footerRightsText}
        </div>   
      </div> 
    )
  }
} 
