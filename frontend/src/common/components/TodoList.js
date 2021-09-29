import React from "react";
import { useSelector, useDispatch } from "react-redux"; 
import { toggleTodoAction, deleteTodoAction  } from "reducers/todo.reducer";
// import List from '@mui/material/List';
// import ListItem from '@mui/material/ListItem';
// import ListItemButton from '@mui/material/ListItemButton';
// import ListItemIcon from '@mui/material/ListItemIcon';
// import ListItemText from '@mui/material/ListItemText';
// import Checkbox from '@mui/material/Checkbox';
// import IconButton from '@mui/material/IconButton';
// import CommentIcon from '@mui/icons-material/Comment';

export default function TodoList(){
    const todos = useSelector( state => state.todoReducer.todos )
    const dispatch = useDispatch()
    const toggleTodo = id => dispatch(toggleTodoAction(id))
    const deleteTodo = id => dispatch(deleteTodoAction(id))

    return(
        <div>
        {todos.length === 0 && (<h1>등록된 할일 목록이 없습니다.</h1>)}
        {todos.length !== 0 && (<h1>{todos.length} 개의 할일 목록 있습니다.</h1>)}
        {todos.length !== 0 && todos.map(
            todo => (<div key={todo.id}>
                <input type ='checkbox' checked = {todo.complete} onChange = {toggleTodo.bind(null, todo.id)}/>
                {todo.complete ?
                <span style={{textDecoderation:'line-through'}}>{todo.name}</span>
                : <span>{todo.name}</span>}
                <button onClick={deleteTodo.bind(null, todo.id)}>X</button>
            </div>)
        )}
        
        </div>)
}

