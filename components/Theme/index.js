const Colors = {
  catskillWhite: 'hsla(171, 33%, 96%)',
  codGray: 'hsla(345, 14%, 5%, 1)',
  downy: 'hsla(182, 51%, 62%, 1)',
  ebb: 'hsla(345, 14%, 89%, 1)',
  electricViolet: 'hsla(271, 88%, 56%, 1)',
  forestGreen: 'hsla(125, 57%, 42%, 1)',
  funBlue: 'hsla(223, 72%, 37%, 1)',
  keyLime: 'hsla(63, 76%, 47%, 1)',
  lima: 'hsla(94, 66%, 45%, 1)',
  martinique: 'hsla(251, 30%, 25%, 1)',
  quarterPearlLustra: 'hsla(43, 100%, 99%, 1)',
  red: 'hsla(0, 100%, 50%, 1)',
  rhino: 'hsla(220, 36%, 30%, 1)',
  tusk: 'hsla(94, 68%, 90%, 1)',
  white: 'hsla(100, 100%, 100%, 1)',
};

const Theme = {
  bodyBackground: Colors.catskillWhite,
  bodyText: Colors.codGray,
  contentBackground: Colors.quarterPearlLustra,
  contentLinksColor: Colors.funBlue,
  contentLinksHover: Colors.electricViolet,
  footerLinksColor: Colors.funBlue,
  footerLinksHover: Colors.electricViolet,

  pageMargin: '0 auto',
  pageWidth: '96rem',
  pagePadding: '0 2rem',

  headerBackground: Colors.codGray,
  headerLinksColor: Colors.quarterPearlLustra,
  logoBackgroundColor: Colors.lima,
  slideDrawerBackground: Colors.ebb,
  toggleBackground: Colors.lima,

  authFormBackground: Colors.white,
  inputBorder: '0.1rem solid {Colors.codGray}',
  submitButtonBg: Colors.codGray,
  submitButtonBgH: Colors.rhino,
  submitButtonColor: Colors.white,

  black: '#393939',
  grey: '#3A3A3A',
  lightgrey: '#E1E1E1',
  offWhite: '#EDEDED',
  boxShadow: '0 1px 3px hsla(0, 15%, 12%, 0.4)',
};

export default Theme;
