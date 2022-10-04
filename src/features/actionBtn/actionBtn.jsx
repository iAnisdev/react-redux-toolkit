import React from 'react'
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import { useSelector , useDispatch } from 'react-redux';
import { FormActions } from './../formDialog/formDialogSlice';
import FormDialog from '../formDialog/FormDialog';

function ActionBtn() {
    const theme = useSelector((state) => state.app.theme)
    const isOpen = useSelector((state) => state.formDialog.isOpen)
    const dispatch = useDispatch()
    const fabStyle = {
        position: 'absolute',
        bottom: 16,
        right: 16,
    };

    function openDialog(){
        if(!isOpen){
            dispatch(FormActions.toggleDialog(true))
        }
    }
    return (
        <>
        <FormDialog />
            <Fab sx={fabStyle} aria-label={'Add Todo'} color={theme === 'light' ? 'primary' : 'dark'} onClick={openDialog}>
                <AddIcon />
            </Fab>
        </>
    )
}

export default ActionBtn