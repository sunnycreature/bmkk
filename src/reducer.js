import { LANG_BE, HISTORY, ACHIEVEMETS, MENU, CLIENTS, PRODUCTS, RIGHTS } from './const.js'

const getInitialState = () => 
  {
    return(
      {
        lang: LANG_BE,
        activeSection: 1,
        historyText: HISTORY.text[LANG_BE],
        historyTitle: HISTORY.title[LANG_BE],
        historyBtnName: HISTORY.btnName[LANG_BE],         
        achievementsText: ACHIEVEMETS.text[LANG_BE],
        achievementsTitle: ACHIEVEMETS.title[LANG_BE],
        achievementsBtnName: ACHIEVEMETS.btnName[LANG_BE], 
        clientsBtnName: CLIENTS.btnName[LANG_BE],   
        productsTitle: PRODUCTS.title[LANG_BE],
        productsBtnSausages: PRODUCTS.btnSausages[LANG_BE],        
        productsBtnMeat: PRODUCTS.btnMeat[LANG_BE], 
        productsBtnConserves: PRODUCTS.btnConserves[LANG_BE],
        footerRightsText: RIGHTS.text[LANG_BE],                 
        menuText: MENU 
      }
    );
  };

export const bmkkReducer = (state = getInitialState(), action) => {

  if (action.type === 'CHANGE_LANG') {
    const { newLang } = action;
    console.log(HISTORY.title[newLang]);
    return {...state, lang: newLang, 
      historyText: HISTORY.text[newLang], 
      historyTitle: HISTORY.title[newLang], 
      historyBtnName: HISTORY.btnName[newLang],
      achievementsText: ACHIEVEMETS.text[newLang], 
      achievementsTitle: ACHIEVEMETS.title[newLang], 
      achievementsBtnName: ACHIEVEMETS.btnName[newLang],
      clientsBtnName: CLIENTS.btnName[newLang],
      productsTitle: PRODUCTS.title[newLang], 
      productsBtnSausages: PRODUCTS.btnSausages[newLang], 
      productsBtnMeat: PRODUCTS.btnMeat[newLang], 
      productsBtnConserves: PRODUCTS.btnConserves[newLang], 
      footerRightsText: RIGHTS.text[newLang],     
    };
  }
  
  if (action.type === 'CHANGE_MENUITEM') {
    const { newSection } = action;
    return {...state, activeSection: newSection}   
  }

  return state;
};
