import GlobalStyles from '../styles/global';
import { ThemeProvider } from 'styled-components';

import defaultTheme from '../themes/default';

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
