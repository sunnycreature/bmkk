import React, { Component } from 'react';
import '../App.css';
import { LANGUAGES } from '../const.js'

export class MenuLang extends Component {
  render() {
    const {lang, onChangeLang} = this.props; 

    return(
      <ul className="menu_lang">
        {LANGUAGES.map( 
          l => <li className={l === lang ? 'active' : ''} onClick={() => onChangeLang(l)}>{l}</li>
        )}
      </ul>    
    )
  }
} 



  



