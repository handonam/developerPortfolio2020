/**
 * This color file is best viewed with editor plugins like Pigment for Atom:
 *
 * https://atom.io/packages/pigments
 */

/**
 * The foundational solid colors
 *
 * Core is the primary set of vibrant colors that should be used.
 *
 * @type {Object}
 */
export const COLORS = {
  GRAY1: "#282828",
  GRAY2: "#515151",
  GRAY3: "#7B7B7B",
  GRAY4: "#A4A4A4",
  GRAY5: "#CECECE",
  GRAY6: "#F7F7F7",
  WHITE: "#FFFFFF",
  RED: "#F44335",
  ORANGE: "#EAA765",
  YELLOW: "#F2C94C",
  GREEN: "#4BAE72",
  BRAND_PRIMARY: "#47AABD",
  BLUE_DARK_ACCENT: "#446875",
  LIGHT_ACCENT: "#689397",
  BRANDS: {
    FACEBOOK: "#3B5999",
    TWITTER: "#1DA1F2",
    GOOGLEPLUS: "#DD4B39",
    INSTAGRAM: "#E4405F",
    PINTEREST: "#BD081C",
    YOUTUBE: "#CD201F",
    VIMEO: "#04A0F0",
    SLACK: "#3AAF85",
    DRIBBLE: "#EA4C89"
  },
};


/**
 * Foreground set of colors.
 * @type {Object}
 */
export const FG_COLORS = {
  DARK: COLORS.GRAY_1,
  LIGHT: COLORS.GRAY_6,
}

export const SHADOWS = {
  TEXTSHADOW1: "text-shadow: 0px 1px 4px rgba(0, 0, 0, 0.25);",
  TEXTSHADOW2: "text-shadow: 0px 3px 8px rgba(0,0,0,.5);",
  BOXSHADOW1: "box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.25);"
}
