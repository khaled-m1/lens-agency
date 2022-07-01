import { extendTheme } from '@chakra-ui/react';
import '@openfonts/cairo_arabic';
const theme = extendTheme({
  fonts: {
    heading: 'cairo_arabic',
    body: 'cairo_arabic',
  },
});
export default theme;
