
import { HOST_ADDR, ID_PRODUCTS } from '../const';

export function changeLang(newLang) {
  return {
    type: 'CHANGE_LANG',
    newLang
  }
}

export function clickMenu(dispatch, newSection) {
  if (newSection === ID_PRODUCTS) {
    fetch(HOST_ADDR)
    .then(res => { return res.text(); })
    .then(res => JSON.parse(res) )
    .then(obj => {
        dispatch(LoadGoodGroup(obj.group));
    });     
  } 
  return {
    type: 'CHANGE_MENUITEM',
    newSection
  }
}

export function LoadGoodGroup (goodgroup) {
  return {
    type: 'LOAD_GOODGROUP',
    goodgroup
  }
}

