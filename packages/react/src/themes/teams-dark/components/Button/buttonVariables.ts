import { ButtonVariables } from '../../../teams/components/Button/buttonVariables'

export default (siteVars: any): Partial<ButtonVariables> => {
  return {
    color: siteVars.colors.white,
    colorActive: siteVars.colors.white,
    colorHover: siteVars.colors.white,
    colorFocus: siteVars.colors.white,
    colorDisabled: siteVars.colors.grey[450],
    backgroundColor: 'transparent',
    backgroundColorHover: siteVars.colors.grey[700],
    backgroundColorFocus: siteVars.colors.grey[500],
    backgroundColorActive: siteVars.colors.grey[500],
    backgroundColorDisabled: siteVars.colors.grey[550],
    borderColor: siteVars.colors.grey[500],
    borderColorActive: siteVars.colors.grey[450],
    borderColorFocus: siteVars.black,
    borderColorHover: siteVars.colors.grey[450],
    borderColorFocusIndicator: siteVars.colors.white,

    primaryBackgroundColorActive: siteVars.brand08,
    primaryBackgroundColorHover: siteVars.brand08,
    primaryBackgroundColorFocus: siteVars.brand14,
    primaryBorderColorFocus: siteVars.black,
    primaryBorderColorFocusIndicator: siteVars.colors.white,

    circularColor: siteVars.colors.grey[250],
    circularColorActive: siteVars.black,
    circularBackgroundColorActive: siteVars.colors.grey[250],
    circularBackgroundColorHover: siteVars.colors.grey[300],
    circularBackgroundColorFocus: siteVars.colors.grey[250],
    circularBorderColor: siteVars.colors.grey[250],
    circularBorderColorFocusIndicator: siteVars.black,
  }
}
