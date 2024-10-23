
let colorScheme: string = 'light';
//let colorScheme: string = 'dark';
let greenOnly = '#00B976';
let green_black = '#00B976';
let green_999 = '#00B976';
let white_back = '#fff';
let eee_000 = '#eee';
let eee_333 = '#eee';
let $000_eee = '#000';
let fff_444 = '#fff';
let ccc_999 = '#ccc';
//----- text ----
let green_eee_txt = '#00B976';
let green_white_txt = '#00B976';
let $999_eee_txt = '#999';
let black_eee_txt = '#000'
//----- text ----
if (colorScheme === 'dark') {
  green_black = '#001600'; //headerStyle //loginBtn & regBtnOnRegisterScreen*
  green_999 = '#999'; //aperture from Feather
  white_back = '#001600'; //navigationBarColor
  eee_000 = '#13131A'; //mainContainer
  eee_333 = '#333'; //homeButton
  $000_eee = '#eee'; //bottom bottons
  fff_444 = '#444'; //inputField// sign in with google Button border
  ccc_999 = '#999'; //check-circle/ fieldIcon side margin bar
  //----- text ----
  green_eee_txt = '#eee';
  green_white_txt = '#fff';
  $999_eee_txt = '#eee';
  black_eee_txt = '#eee'
  //===
}

export const objcolors = {
  greenOnly,
  green_black,
  green_999,
  white_back,
  eee_000,
  eee_333,
  $000_eee,
  fff_444,
  ccc_999,
  green_eee_txt,
};

export const txtcolors = {
  green_eee_txt,
  green_white_txt,
  $999_eee_txt,
  black_eee_txt
};
