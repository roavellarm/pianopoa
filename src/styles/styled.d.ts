import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      black: string
      blackLight: string
      white: string
      primary: string
    }

    fontFamily: {
      oswald: string
      raleway: string
      urbanist: string
    }

    fontSize: {
      title1: string
      title2: string
      title3: string
      text: string
      link: string
      buttonText: string
    }
  }
}
