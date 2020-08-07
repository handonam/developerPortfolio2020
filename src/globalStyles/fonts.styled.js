import {COLORS} from "../shared/colors.js"
import { createGlobalStyle } from 'styled-components';

import RubikRegular from './fonts/Rubik/Rubik-Regular.ttf';
import RubikItalic from './fonts/Rubik/Rubik-Italic.ttf';
import RubikBold from './fonts/Rubik/Rubik-Bold.ttf';
import RubikBoldItalic from './fonts/Rubik/Rubik-BoldItalic.ttf';
import RubikMedium from './fonts/Rubik/Rubik-Medium.ttf';
import RubikMediumItalic from './fonts/Rubik/Rubik-MediumItalic.ttf';
import RubikBlack from './fonts/Rubik/Rubik-Black.ttf';
import RubikBlackItalic from './fonts/Rubik/Rubik-BlackItalic.ttf';
import RubikLight from './fonts/Rubik/Rubik-Light.ttf';
import RubikLightItalic from './fonts/Rubik/Rubik-LightItalic.ttf';

import LibreFranklinRegular from './fonts/LibreFranklin/LibreFranklin-Regular.ttf';
import LibreFranklinItalic from './fonts/LibreFranklin/LibreFranklin-Italic.ttf';
import LibreFranklinBold from './fonts/LibreFranklin/LibreFranklin-Bold.ttf';
import LibreFranklinBoldItalic from './fonts/LibreFranklin/LibreFranklin-BoldItalic.ttf';
import LibreFranklinMedium from './fonts/LibreFranklin/LibreFranklin-Medium.ttf';
import LibreFranklinMediumItalic from './fonts/LibreFranklin/LibreFranklin-MediumItalic.ttf';
import LibreFranklinBlack from './fonts/LibreFranklin/LibreFranklin-Black.ttf';
import LibreFranklinBlackItalic from './fonts/LibreFranklin/LibreFranklin-BlackItalic.ttf';
import LibreFranklinThin from './fonts/LibreFranklin/LibreFranklin-Thin.ttf';
import LibreFranklinThinItalic from './fonts/LibreFranklin/LibreFranklin-ThinItalic.ttf';
import LibreFranklinLight from './fonts/LibreFranklin/LibreFranklin-Light.ttf';
import LibreFranklinLightItalic from './fonts/LibreFranklin/LibreFranklin-LightItalic.ttf';
import LibreFranklinExtraLight from './fonts/LibreFranklin/LibreFranklin-ExtraLight.ttf';
import LibreFranklinExtraLightItalic from './fonts/LibreFranklin/LibreFranklin-ExtraLightItalic.ttf';

import PTSerifRegular from './fonts/PTSerif/PTSerif-Regular.ttf';
import PTSerifItalic from './fonts/PTSerif/PTSerif-Italic.ttf';
import PTSerifBold from './fonts/PTSerif/PTSerif-Bold.ttf';
import PTSerifBoldItalic from './fonts/PTSerif/PTSerif-BoldItalic.ttf';

import PolyRegular from './fonts/Poly/Poly-Regular.ttf';
import PolyItalic from './fonts/Poly/Poly-Italic.ttf';

export default createGlobalStyle`
  @font-face {
    font-family: "Rubik";
    src: local("Rubik"), url(${RubikRegular}) format("truetype");
    font-weight: 400;
    font-style: normal;
  }
  @font-face {
    font-family: "Rubik";
    src: local("Rubik"), url(${RubikItalic}) format("truetype");
    font-weight: 400;
    font-style: italic;
  }
  @font-face {
    font-family: "Rubik";
    src: local("Rubik"), url(${RubikBold}) format("truetype");
    font-weight: 700;
    font-style: normal;
  }
  @font-face {
    font-family: "Rubik";
    src: local("Rubik"), url(${RubikBoldItalic}) format("truetype");
    font-weight: 700;
    font-style: italic;
  }
  @font-face {
    font-family: "Rubik";
    src: local("Rubik"), url(${RubikMedium}) format("truetype");
    font-weight: 500;
    font-style: normal;
  }
  @font-face {
    font-family: "Rubik";
    src: local("Rubik"), url(${RubikMediumItalic}) format("truetype");
    font-weight: 500;
    font-style: italic;
  }
  @font-face {
    font-family: "Rubik";
    src: local("Rubik"), url(${RubikBlack}) format("truetype");
    font-weight: 900;
    font-style: normal;
  }
  @font-face {
    font-family: "Rubik";
    src: local("Rubik"), url(${RubikBlackItalic}) format("truetype");
    font-weight: 900;
    font-style: italic;
  }
  @font-face {
    font-family: "Rubik";
    src: local("Rubik"), url(${RubikLight}) format("truetype");
    font-weight: 300;
    font-style: normal;
  }
  @font-face {
    font-family: "Rubik";
    src: local("Rubik"), url(${RubikLightItalic}) format("truetype");
    font-weight: 300;
    font-style: italic;
  }
  
  
  @font-face {
    font-family: "Libre Franklin";
    src: local("LibreFranklin"), url(${LibreFranklinRegular}) format("truetype");
    font-weight: 400;
    font-style: normal;
  }
  @font-face {
    font-family: "Libre Franklin";
    src: local("LibreFranklin"), url(${LibreFranklinItalic}) format("truetype");
    font-weight: 400;
    font-style: italic;
  }
  @font-face {
    font-family: "Libre Franklin";
    src: local("LibreFranklin"), url(${LibreFranklinBold}) format("truetype");
    font-weight: 700;
    font-style: normal;
  }
  @font-face {
    font-family: "Libre Franklin";
    src: local("LibreFranklin"), url(${LibreFranklinBoldItalic}) format("truetype");
    font-weight: 700;
    font-style: italic;
  }
  @font-face {
    font-family: "Libre Franklin";
    src: local("LibreFranklin"), url(${LibreFranklinMedium}) format("truetype");
    font-weight: 500;
    font-style: normal;
  }
  @font-face {
    font-family: "Libre Franklin";
    src: local("LibreFranklin"), url(${LibreFranklinMediumItalic}) format("truetype");
    font-weight: 500;
    font-style: italic;
  }
  @font-face {
    font-family: "Libre Franklin";
    src: local("LibreFranklin"), url(${LibreFranklinBlack}) format("truetype");
    font-weight: 900;
    font-style: normal;
  }
  @font-face {
    font-family: "Libre Franklin";
    src: local("LibreFranklin"), url(${LibreFranklinBlackItalic}) format("truetype");
    font-weight: 900;
    font-style: italic;
  }
  @font-face {
    font-family: "Libre Franklin";
    src: local("LibreFranklin"), url(${LibreFranklinLight}) format("truetype");
    font-weight: 300;
    font-style: normal;
  }
  @font-face {
    font-family: "Libre Franklin";
    src: local("LibreFranklin"), url(${LibreFranklinLightItalic}) format("truetype");
    font-weight: 300;
    font-style: italic;
  }
  @font-face {
    font-family: "Libre Franklin";
    src: local("LibreFranklin"), url(${LibreFranklinThin}) format("truetype");
    font-weight: 100;
    font-style: normal;
  }
  @font-face {
    font-family: "Libre Franklin";
    src: local("LibreFranklin"), url(${LibreFranklinThinItalic}) format("truetype");
    font-weight: 100;
    font-style: italic;
  }
  @font-face {
    font-family: "Libre Franklin";
    src: local("LibreFranklin"), url(${LibreFranklinExtraLight}) format("truetype");
    font-weight: 200;
    font-style: normal;
  }
  @font-face {
    font-family: "Libre Franklin";
    src: local("LibreFranklin"), url(${LibreFranklinExtraLightItalic}) format("truetype");
    font-weight: 200;
    font-style: italic;
  }
  
  
  @font-face {
    font-family: "PT Serif";
    src: local("PTSerif"), local("PT Serif"), url(${PTSerifRegular}) format("truetype");
    font-weight: 400;
    font-style: normal;
  }
  @font-face {
    font-family: "PT Serif";
    src: local("PTSerif"), local("PT Serif"), url(${PTSerifItalic}) format("truetype");
    font-weight: 400;
    font-style: italic;
  }
  @font-face {
    font-family: "PT Serif";
    src: local("PTSerif"), local("PT Serif"), url(${PTSerifBold}) format("truetype");
    font-weight: 700;
    font-style: normal;
  }
  @font-face {
    font-family: "PT Serif";
    src: local("PTSerif"), local("PT Serif"), url(${PTSerifBoldItalic}) format("truetype");
    font-weight: 700;
    font-style: italic;
  }
  
  @font-face {
    font-family: "Poly";
    src: local("Poly"), url(${PolyRegular}) format("truetype");
    font-weight: 400;
    font-style: normal;
  }
  @font-face {
    font-family: "Poly";
    src: local("Poly"), url(${PolyItalic}) format("truetype");
    font-weight: 400;
    font-style: italic;
  }
  
  
  html,
  body {
    font-family: Rubik, sans-serif;
    color: ${COLORS.GRAY_6};
    font-size: 18px;
    line-height: 21px;
  }
`;
