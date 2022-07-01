import { Global } from '@emotion/react';

const Fonts = () => (
  <Global
    styles={`
      /* Copied from https://fonts.googleapis.com/css2?family=Cairo:wght@300;400;700&display=swap */

      /* latin-ext */
      @font-face {
        font-family: 'Cairo';
        font-style: normal;
        font-weight: 300;
        font-display: swap;
        src: url(https://fonts.googleapis.com/css2?family=Cairo:wght@300;400;700&display=swap) format('woff2');
        unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
      }
      `}
  />
);
