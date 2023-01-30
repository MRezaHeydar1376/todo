import '@emotion/react';
import {CustomTheme} from "./variables"

declare module '@emotion/react' {
  export interface Theme extends CustomTheme {
  }
}