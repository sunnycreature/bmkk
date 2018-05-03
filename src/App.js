import React, { Component } from 'react';
import logo from './img/logo.png';
import logoName from './img/logo_name.png';
import './App.css';
import { Provider, connect } from 'react-redux';
import { store } from './store';
import { MenuLang } from './components/MenuLang'
import { MenuBar } from './components/MenuBar'
import { History } from './components/History'
import { Production } from './components/Production'
import { changeMenuItem, changeLang } from './actions'

const ConnectedMenuLang = connect(
  (state) => (
    {
      lang: state.bmkkReducer.lang
    }
  ),
  (dispatch) => (
    {
      onChangeLang: (newLang) => dispatch(changeLang(newLang))
    }
  )
)(MenuLang);

const ConnectedMenuBar = connect(
  (state) => (
    {
      lang: state.bmkkReducer.lang
    }
  ),
  (dispatch) => (
    {
      onChangeMenuItem: (newItem) => dispatch(changeMenuItem(newItem)),
    }
  ) 
)(MenuBar);

const ConnectedHistory = connect(
  (state) => (
    {
      lang: state.bmkkReducer.lang,
      historyText: state.bmkkReducer.historyText
    }
   ) 
)(History);

const ConnectedProduction = connect(
  (state) => (
    {
      lang: state.bmkkReducer.lang
    }
   ) 
)(Production);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="app">
          <header className="app_header flex">          
            <a className="sLogo" href="http://localhost:3000/">
              <img src={logo} className="App-logo" alt="logo" />
            </a>
            <a className="logoName" href="http://localhost:3000/">
              <img src={logoName} alt="logoName" />
            </a>
            <div className="head"> 
              <ConnectedMenuBar/>
              <ConnectedMenuLang/>
            </div>  
          </header>  
          <ConnectedHistory/>
          <ConnectedProduction/>          
        </div>
      </Provider>            
      );
  }
}

export default App;

//<a href="/pw/contact-us/">+375-17-2561759</a>  onChangeMenuItem: (newItem) => dispatch(changeMenuItem(activeItem))}
