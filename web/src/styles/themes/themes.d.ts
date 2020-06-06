import 'styled-components';

declare module 'styled-components'{
  export interface DefaultTheme {
    title: string,
    colors: {
      background: {
        primary_color: string,
        secondary_color: string,
      },
      texts: {
        text_color: string,
        title_color: string,
        texts_suport: string,
      },
      others: {
        desaturado: string,
        blocks: string,
      },
    },
  }
}
