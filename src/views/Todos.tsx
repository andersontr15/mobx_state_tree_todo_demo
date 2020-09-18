import React from 'react'
import { observer } from 'mobx-react';
import { Container, TableContainer, Paper, Table, TableHead, TableRow, TableCell, TableBody, Card, CardContent } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';

import { TodoForm } from './TodoForm';
import { useStore } from '../contexts/mobx-context';


export const Todos = observer(() => {
  const store = useStore();
  const { completedTodos, incompleteTodos, todos } = store;
  return (
    <>
      <Container maxWidth="md">
        <h2 style={{ paddingLeft: '16px' }}>Mobx state tree todo application - Theodore Anderson</h2>
        <TodoForm />
        <hr />
        <h3>All Todos</h3>
        {todos.length ? <TableContainer component={Paper}>
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>ID</TableCell>
                <TableCell>Name</TableCell>
                <TableCell>Done?</TableCell>
                <TableCell>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {todos.map((todo) => (
                <TableRow key={todo.id}>
                  <TableCell component="th" scope="row">
                    {todo.id}
                  </TableCell>
                  <TableCell component="th" scope="row">
                    {todo.name}
                  </TableCell>
                  <TableCell>{todo.completed ? 'Yes' : 'No'}</TableCell>
                  <TableCell>
                    <EditIcon onClick={() => store.setSelectedTodo(todo)} style={{ cursor: 'pointer' }} />
                    <DeleteIcon onClick={() => store.deleteTodo(+todo.id)} style={{ cursor: 'pointer' }} />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer> : <Card>
            <CardContent>
              No todos have been created yet.
            </CardContent>
          </Card>}
        <h3>Completed Todos</h3>
        <TableContainer component={Paper}>
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>ID</TableCell>
                <TableCell>Name</TableCell>
                <TableCell>Done?</TableCell>
                <TableCell>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {completedTodos.map((todo) => (
                <TableRow key={todo.id}>
                  <TableCell component="th" scope="row">
                    {todo.id}
                  </TableCell>
                  <TableCell component="th" scope="row">
                    {todo.name}
                  </TableCell>
                  <TableCell>{todo.completed ? 'Yes' : 'No'}</TableCell>
                  <TableCell>
                    <EditIcon onClick={() => store.setSelectedTodo(todo)} style={{ cursor: 'pointer' }} />
                    <DeleteIcon onClick={() => store.deleteTodo(+todo.id)} style={{ cursor: 'pointer' }} />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <h3>Incomplete Todos</h3>
        <TableContainer component={Paper}>
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>ID</TableCell>
                <TableCell>Name</TableCell>
                <TableCell>Done?</TableCell>
                <TableCell>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {incompleteTodos.map((todo) => (
                <TableRow key={todo.id}>
                  <TableCell component="th" scope="row">
                    {todo.id}
                  </TableCell>
                  <TableCell component="th" scope="row">
                    {todo.name}
                  </TableCell>
                  <TableCell>{todo.completed ? 'Yes' : 'No'}</TableCell>
                  <TableCell>
                    <EditIcon onClick={() => store.setSelectedTodo(todo)} style={{ cursor: 'pointer' }} />
                    <DeleteIcon onClick={() => store.deleteTodo(+todo.id)} style={{ cursor: 'pointer' }} />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Container>
    </>
  )
})

