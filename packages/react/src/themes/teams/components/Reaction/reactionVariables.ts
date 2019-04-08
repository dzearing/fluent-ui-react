import { pxToRem } from '../../../../lib'

export interface ReactionVariables {
  color: string
  colorHover: string
  contentFontSize: string
  fontWeightHover: string
  outlineColorFocus: string
  outlineWidthFocus: string
  outlineOffsetFocus: string
}

export default (siteVars): ReactionVariables => ({
  color: siteVars.colors.grey[450],
  colorHover: siteVars.colors.grey[750],
  contentFontSize: siteVars.fontSizes.small,
  fontWeightHover: siteVars.fontWeightBold,
  outlineColorFocus: siteVars.colors.primary[500],
  outlineWidthFocus: pxToRem(2),
  outlineOffsetFocus: pxToRem(-2),
})
