import React, { Component } from 'react';
import '../App.css';
import { MENU } from '../const.js'

export class MenuBar extends Component {
  render() {
    const {lang, onClickMenu, activeSection} = this.props; 
    return(
      <ul className="menu_bar">
        {MENU.map( m => <li key={m.id} className = {activeSection === m.id ? "active" : ""} onClick={() => onClickMenu(m)}>{m.caption[lang]} </li>)}
      </ul>   
    )
  }
} 

