import { TextVariables } from '../../../base/components/Text/textVariables'

export interface TeamsTextVariables extends TextVariables {
  atMentionMeFontWeight: number
  importantWeight: number
  timestampHoverColor: string
}

export default (siteVariables): Partial<TeamsTextVariables> => {
  return {
    colorScheme: siteVariables.colorScheme,
    atMentionOtherColor: siteVariables.colors.primary[500],
    atMentionMeColor: siteVariables.naturalColors.darkOrange[400],
    atMentionMeFontWeight: siteVariables.fontWeightBold,
    disabledColor: siteVariables.colors.grey[250],
    errorColor: siteVariables.colors.red[900],
    importantWeight: siteVariables.fontWeightBold,
    importantColor: siteVariables.colors.red[900],
    successColor: siteVariables.colors.green[900],
    timestampColor: siteVariables.colors.grey[350],
    timestampHoverColor: siteVariables.colors.grey[500],
  }
}
