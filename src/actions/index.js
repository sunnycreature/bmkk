export function changeLang(newLang) {
  return {
    type: 'CHANGE_LANG',
    newLang
  }
}

export function changeMenuItem(newItem) {
  return {
    type: 'CHANGE_MENUITEM',
    newItem
  }
}