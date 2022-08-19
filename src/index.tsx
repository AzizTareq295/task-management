import ReactDOM from 'react-dom/client';
import App from 'App';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react'
import { store, persistor } from 'Store/index'
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider, createTheme } from '@mui/material/styles';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);


const theme = createTheme({
  components: {
    MuiCssBaseline: {
      styleOverrides: (themeParam) => `
        body{
          margin: 0;
          padding: 0;
        }
      `,
    },
  },
});

root.render(
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </ThemeProvider>
);

