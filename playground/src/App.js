import { I18nextProvider } from 'react-i18next';
import i18next from "i18next";

// Redux
import { Provider } from 'react-redux'
import configureStore from './redux/redux_old/configureStore';
import store from './redux/redux_toolkit/store'

// Utils
import translations from './utils/translations';
import { DEFAULT_LANGUAGE } from './utils/constants';
import AppRouter from './router/AppRouter';

// MUI
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
// Custom
import theme from './Theme';
import CustomSnackbar from './components/snackbar';



// Initialize translation
i18next.init({
  interpolation: { escapeValue: false },
  lng: DEFAULT_LANGUAGE,
  fallbackLng: DEFAULT_LANGUAGE,
  resources: translations,
});

// Initialize redux in old way
// const store = configureStore();


function App() {
  return (
    <I18nextProvider i18n={i18next}>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <AppRouter />
          <CustomSnackbar />
        </ThemeProvider>
      </Provider>
    </I18nextProvider>

  )
}

export default App;
