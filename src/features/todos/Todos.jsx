
import { Alert } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'
import TodoCard from '../todo/Todo'

function Todos() {
    const todos = useSelector((state) => state.todos.list)
    
    let TodoList = todos.map((todo) => {
       return <TodoCard {...todo}  key={todo.id} />
    })

    if (todos.length > 0) {
        return (
            <>
            {TodoList}
            </>
        )
    } else {
        return (
            <>
                <Alert severity="error">No Todo items available for now</Alert>
            </>

        )
    }


}

export default Todos