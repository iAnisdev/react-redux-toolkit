import { useState , useEffect } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useDispatch, useSelector } from 'react-redux';
import { FormActions } from './formDialogSlice';
import { TodoActions } from '../todos/todosSlice';
import { TextareaAutosize, TextField , Snackbar , Alert } from '@mui/material';

export default function FormDialog() {
  const [showSnack, setShowSnack] = useState(() => {
    return false
  })

  const [title, setTitle] = useState(() => {
    return ''
  })

  const [description, setDescription] = useState(() => {
    return ''
  })

  const isOpen = useSelector((state) => state.formDialog.isOpen)
  const dispatch = useDispatch()

  const handleClose = () => {
    dispatch(FormActions.toggleDialog(false))
  };

  const handleSnackClose = () => {
    setShowSnack(false)
    setTitle('')
    setDescription('')
  }

  function handleAdd() {
    if(title.trim() === '' || description.trim() === ''){
      setShowSnack(true)
    }else{

    }
    dispatch(TodoActions.addTodo(
      {
        title,
        id: Date.now(),
        description,
        createdAt: new Date().toLocaleString()
      }))
    dispatch(FormActions.toggleDialog(false))
    setTitle('')
    setDescription('')
  }

  useEffect(() => {
    setShowSnack(false)
  }, [title , description]);

  return (
    <div>
      <Dialog open={isOpen} onClose={handleClose}>
        <DialogTitle>Add New Todo</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Add a new todo to your list
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Title"
            type="text"
            fullWidth
            variant="outlined"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
          <TextareaAutosize
            aria-label="Description"
            minRows={3}
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            style={{ width: '100%', padding: '5px', marginTop: '2vh' }}
            required
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleAdd}>Add</Button>
        </DialogActions>
      </Dialog>
      <Snackbar open={showSnack} autoHideDuration={6000} onClose={handleSnackClose}>
        <Alert onClose={handleSnackClose} severity="error" sx={{ width: '100%' }}>
          Both Title and description is required
        </Alert>
      </Snackbar>
    </div>
  );
}
