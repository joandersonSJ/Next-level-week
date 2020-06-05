import 'styled-components';

declare module 'styled-components'{
  export interface DefaultTheme {
    title: string,
    colors: {
      background: {
        background_green: string,
        background_grey: string,
        background_blue: string
      },
      texts: {
        text: string,
        texts_suport: string
      },
      others: {
        desaturado: string,
        blocks: string
      },
    },
  }
}
