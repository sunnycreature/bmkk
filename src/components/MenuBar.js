import React, { Component } from 'react';
import '../App.css';
import { MENU } from '../const.js'

export class MenuBar extends Component {
  render() {
    const {lang} = this.props; 
    console.log(lang);
    return(
      <ul className="menu_bar flex">
        {MENU.map( m => <li key={m.id}>{m.caption[lang]}</li>)}
      </ul>   
    )
  }
} 

