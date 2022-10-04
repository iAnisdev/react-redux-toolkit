import { Typography } from '@mui/material';
import { Container } from '@mui/system';
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'

function Todo() {
  const { id } = useParams()
  const todos = useSelector((state) => state.todos.list)
  const [todo, setTodo] = useState({});

  useEffect(() => {
    let current_todo = todos.find((todo) => todo.id === Number(id))
    setTodo(current_todo)
  }, [id ,todos])

  return (
    <Container component="main" sx={{ mt: 8, mb: 2 }} maxWidth="lg">
        <Typography variant="h2" component="h1" gutterBottom>
          {todo.title}
        </Typography>
        <Typography variant="body1">{todo.createdAt}</Typography>
        <Typography variant="p" component="p" gutterBottom  sx={{ mt: 2, mb: 1 }}>
          {todo.description}
        </Typography>
      </Container>
  )
}

export default Todo