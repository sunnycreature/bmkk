export function changeLang(newLang) {
  return {
    type: 'CHANGE_LANG',
    newLang
  }
}

export function clickMenu(newSection) {
  return {
    type: 'CHANGE_MENUITEM',
    newSection
  }
}
