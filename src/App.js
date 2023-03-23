import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import './App.css';
import Index from './components/Index';
import Header from './components/Header';
import { Container, Grid } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    text: {
      main: '#000000',
    },
    background: {
      main: '#caedf7'
    },
    accent: {
      main: '#dd2222'
    },
    strong: {
      main: '#368149',
    },
    medium: {
      main: '#efc20f',
    }
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth='md'>
        <Grid container spacing={2} justifyContent="center">
          <Grid item xs={12} textAlign="center">
            <Header />
          </Grid>
          <Grid item xs={12}>
            <Index />
          </Grid>
        </Grid>
      </Container>
    </ThemeProvider>
  );
}

export default App;
