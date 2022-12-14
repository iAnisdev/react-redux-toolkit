import React from 'react';
import ActionBtn from './../features/actionBtn/actionBtn';
import LoaderBackdrop from './../features/loader/loader';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { useSelector } from 'react-redux';
import Todos from './../features/todos/Todos';

function Home() {

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
                    <div style={{ padding: '1vh 2vw' }}>
                        <Todos />
                    </div>
                    <LoaderBackdrop />
                    <ActionBtn />
                </div>
            </ThemeProvider>
        </>
    );
}

export default Home;
