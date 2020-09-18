import React from 'react'
import { observer } from 'mobx-react';
import { Container, Divider, TableContainer, Paper, Table, TableHead, TableRow, TableCell, TableBody, Card, CardContent, Typography, CardActions, Button } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';

import { TodoForm } from './TodoForm';
import { useStore } from '../contexts/mobx-context';



interface Props {

}

export const Todos = observer((props: Props) => {
  const store = useStore();
  const { todos } = store;
  return (
    <>
      <Container maxWidth="md">
        <h2 style={{ paddingLeft: '16px' }}>Mobx state tree todo application - Theodore Anderson</h2>
        <TodoForm />
        <hr />
        {todos.length ? <TableContainer component={Paper}>
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>ID</TableCell>
                <TableCell>Name</TableCell>
                <TableCell>Done?</TableCell>

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
                    <DeleteIcon />
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
      </Container>
    </>
  )
})

