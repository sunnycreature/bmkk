import { LANG_BE, HISTORY } from './const.js'

const getInitialState = () => 
  {
    return(
      {
        lang: LANG_BE,
        activeItem: 1,
        historyText: HISTORY[LANG_BE]
      }
    );
  };

export const bmkkReducer = (state = getInitialState(), action) => {
  console.log(JSON.stringify(action));
  console.log(JSON.stringify(state));

  if (action.type === 'CHANGE_LANG') {
    const { newLang } = action;
    return {...state, lang: newLang, historyText: HISTORY[newLang]};
  }
  
  if (action.type === 'CHANGE_MENUITEM') {
    const { newItem } = action;
    return {...state, activeItem: newItem}   
  }

  return state;
};
