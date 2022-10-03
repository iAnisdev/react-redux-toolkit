import React from 'react';
import ActionBtn from './features/actionBtn/actionBtn';
import Appbar from './features/appbar/Appbar';
import LoaderBackdrop from './features/loader/loader';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { useSelector } from 'react-redux';

function App() {

  const currentTheme = useSelector((state) => state.app.theme)
  const theme = createTheme({
    palette: {
      mode: currentTheme
    }
  })
  return (
    <>
      <ThemeProvider theme={theme}>
        <div className="App">
          <Appbar />
          <LoaderBackdrop />
          <ActionBtn />
        </div>
      </ThemeProvider>
    </>
  );
}

export default App;
