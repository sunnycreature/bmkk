import React, { Component } from 'react';
import logo from './img/logo.png';
import logoName from './img/logo_name.png';
import './App.css';
import { Provider, connect } from 'react-redux';
import { store } from './store';
import { MenuLang } from './components/MenuLang'
import { MenuBar } from './components/MenuBar'
import { History } from './components/History'
import { Products } from './components/Products'
import { Achievements } from './components/Achievements'
import { Clients } from './components/Clients'
import { MenuFooter } from './components/MenuFooter'

import { clickMenu, changeLang } from './actions'

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
      lang: state.bmkkReducer.lang,
      activeSection: state.bmkkReducer.activeSection
    }
  ),
  (dispatch) => (
    {
      onClickMenu: (newItem) => dispatch(clickMenu(newItem)),
    }
  ) 
)(MenuBar);

const ConnectedHistory = connect(
  (state) => (
    {
      lang: state.bmkkReducer.lang,
      historyText: state.bmkkReducer.historyText,
      historyTitle: state.bmkkReducer.historyTitle,
      historyBtnName: state.bmkkReducer.historyBtnName,
      clientsBtnName: state.bmkkReducer.clientsBtnName,
    }
   ) 
)(History);

const ConnectedProducts = connect(
  (state) => (
    {
      lang: state.bmkkReducer.lang,
      productsTitle: state.bmkkReducer.productsTitle,
      productsBtnSausages: state.bmkkReducer.productsBtnSausages,
      productsBtnMeat: state.bmkkReducer.productsBtnMeat,
      productsBtnConserves: state.bmkkReducer.productsBtnConserves,
    }
   ) 
)(Products);

const ConnectedAchievements = connect(
  (state) => (
    {
      lang: state.bmkkReducer.lang,
      achievementsText: state.bmkkReducer.achievementsText,
      achievementsTitle: state.bmkkReducer.achievementsTitle,
      achievementsBtnName: state.bmkkReducer.achievementsBtnName,
    }
   ) 
)(Achievements);

const ConnectedClients = connect(
  (state) => (
    {
      lang: state.bmkkReducer.lang,
      clientsBtnName: state.bmkkReducer.clientsBtnName
    }
   ) 
)(Clients);

const ConnectedMenuFooter = connect(
  (state) => (
    {
      lang: state.bmkkReducer.lang,
      footerRightsText: state.bmkkReducer.footerRightsText,
      activeSection: state.bmkkReducer.activeSection
    }
  ),
  (dispatch) => (
    {
      onClickMenu: (newSection) => dispatch(clickMenu(newSection)),
    }
  ) 
)(MenuFooter);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="app">
          <header className="header">
            <div className="header_container">          
              <a className="sLogo" href="http://localhost:3000/">
                <img src={logo} className="App-logo" alt="logo" />
              </a>
              <div className="header_top flex">
                <ConnectedMenuBar/>
                <ConnectedMenuLang/>  
              </div>  
              <a className="logoName" href="http://localhost:3000/">
                <img src={logoName} alt="logoName" />
              </a>
            </div>        
          </header>  
          <div className="main">
            <ConnectedProducts/>          
          </div>
         
        </div>
      </Provider>            
      );
  }
}

export default App;
/*            <ConnectedHistory/>
            <ConnectedProducts/>          
            <ConnectedAchievements/> 
            <ConnectedClients/>  
          <div className="footer">
            <a className="sLogo footLogo" href="http://localhost:3000/">
              <img src={logo} className="App-logo" alt="logo" />
            </a>
            <ConnectedMenuFooter/>  
          </div>              */
//<a href="/pw/contact-us/">+375-17-2561759</a>  onChangeMenuItem: (newItem) => dispatch(changeMenuItem(activeItem))}
/*    <div><CarouselSlider/></div>   import { CarouselSlider } from './components/DemoCarousel'      */