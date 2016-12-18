import {
  cyan500, cyan700, cyanA200,
  pink500, pink700, pinkA200,
  indigo500, indigo700, indigoA200,
  green500, green700, greenA200,
  grey100, grey300, grey400, grey500,
  white, darkBlack, fullBlack
} from 'material-ui/styles/colors'

export default {
  NONE: {
    palette: {
      primary1Color: cyan500,
      primary2Color: cyan700,
      primary3Color: grey400,
      accent1Color: pinkA200,
      accent2Color: grey100,
      accent3Color: grey500,
      textColor: darkBlack,
      alternateTextColor: white,
      canvasColor: white,
      borderColor: grey300,
      pickerHeaderColor: cyan500
    }
  },
  ROLE_USER: {
    palette: {
      primary1Color: fullBlack,
      primary2Color: pink700,
      primary3Color: grey400,
      accent1Color: cyanA200,
      accent2Color: grey100,
      accent3Color: grey500,
      textColor: darkBlack,
      alternateTextColor: white,
      canvasColor: white,
      borderColor: grey300,
      pickerHeaderColor: pink500
    }
  },
  ROLE_ORGANIZADOR: {
    palette: {
      primary1Color: indigo500,
      primary2Color: indigo700,
      primary3Color: grey400,
      accent1Color: greenA200,
      accent2Color: grey100,
      accent3Color: grey500,
      textColor: darkBlack,
      alternateTextColor: white,
      canvasColor: white,
      borderColor: grey300,
      pickerHeaderColor: indigo500
    }
  },
  ROLE_ADMIN: {
    palette: {
      primary1Color: green500,
      primary2Color: green700,
      primary3Color: grey400,
      accent1Color: indigoA200,
      accent2Color: grey100,
      accent3Color: grey500,
      textColor: darkBlack,
      alternateTextColor: white,
      canvasColor: white,
      borderColor: grey300,
      pickerHeaderColor: green500
    }
  }
}
