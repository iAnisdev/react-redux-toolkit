import React from 'react'
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import { useSelector } from 'react-redux';

function ActionBtn() {
    const theme = useSelector((state) => state.app.theme)
    const fabStyle = {
        position: 'absolute',
        bottom: 16,
        right: 16,
    };

    return (
        <>
            <Fab sx={fabStyle} aria-label={'Add Todo'} color={theme === 'light' ? 'primary' : 'dark'}>
                <AddIcon />
            </Fab>
        </>
    )
}

export default ActionBtn