import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Delete from '@mui/icons-material/Delete';
import { red } from '@mui/material/colors';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useState } from 'react';
import { TodoActions } from '../todos/todosSlice';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';


const hoverPointer = { cursor: 'pointer' };

export default function TodoCard(props) {
    const [open, setOpen] = useState(false);
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleClickOpen = (e) => {
        e.stopPropagation()
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleDelete = () => {
        dispatch(TodoActions.removeTodo(props.id))
    }

    const viewTodo = () => {
        navigate(`/todo/${props.id}`)
    }
    return (
        <>
            <Card sx={{ width: '100%', marginTop: 1 }} style={hoverPointer}  onClick={viewTodo}>
                <CardHeader
                    action={
                        <IconButton aria-label="delete" onClick={(e) => handleClickOpen(e)}>
                            <Delete sx={{ color: red[500] }} />
                        </IconButton>
                    }
                    title={props.title}
                    subheader={props.createdAt}
                />
                <CardContent>
                    <Typography variant="body2" color="text.secondary">
                        {props.description}
                    </Typography>
                </CardContent>
            </Card>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    {"Delete todo fron list"}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        Are you sure to delete <b>{props.title}</b> from your todo list?
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={handleDelete} autoFocus color='error'>
                        Delete
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    );
}
