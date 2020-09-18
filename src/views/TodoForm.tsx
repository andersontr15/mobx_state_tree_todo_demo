import React, { useState, useEffect } from 'react'
import { Button, FormGroup, FormControlLabel, Checkbox, Input, Box, Card, CardContent } from '@material-ui/core';
import { observer } from 'mobx-react';
import { useStore } from '../contexts/mobx-context';



interface Props {

}

export const TodoForm = observer((props: Props) => {

  const store = useStore();

  const [todoName, setTodoName] = useState('');
  const [todoCompletion, setTodoCompletion] = useState(false)

  useEffect(() => {
    if (store.selectedTodo) {
      setTodoName(store.selectedTodo.name)
      setTodoCompletion(store.selectedTodo.completed)
    }
  }, [store.selectedTodo])

  const resetTodoForm = () => {
    setTodoName('')
    setTodoCompletion(false)
  }

  const onChangeTodoName = (evt: React.ChangeEvent<HTMLInputElement>) => setTodoName(evt.target.value)

  const onChangeTodoCompletion = (evt: React.ChangeEvent<HTMLInputElement>) => setTodoCompletion(evt.target.checked)

  const onCreateTodo = () => {
    const payload = {
      name: todoName,
      completed: todoCompletion
    }
    store.createTodo(payload);
    resetTodoForm();
  }

  const onUpdateTodo = () => {
    if(!store.selectedTodo) return;
    const payload = {
      name: todoName,
      completed: todoCompletion
    }
    store.updateTodo({
      ...payload,
      id: store?.selectedTodo?.id
    });
    store.clearSelectedTodo();
    resetTodoForm();
  }

  const isButtonDisabled = !todoName.length;

  return (
    <Card style={{ marginBottom: '40px' }}>
      <CardContent>
        {store.selectedTodo && <Box component="div" m={3}>
          Editing todo # {store.selectedTodo.id}
        </Box>}
        <Box component="div" m={3}>
          <Input
            placeholder="What do you need done?"
            onChange={onChangeTodoName}
            value={todoName}
            fullWidth
          />
        </Box>
        <Box component="div" m={3}>
          <FormControlLabel
            control={<Checkbox checked={todoCompletion} color='primary' onChange={onChangeTodoCompletion} name="todoCompletion" />}
            label="Completed"
          />
        </Box>
        <Box component="div" m={3}>
          <Button disabled={isButtonDisabled} onClick={store.selectedTodo ? onUpdateTodo : onCreateTodo} variant='outlined' placeholder="Submit">{store.selectedTodo ? 'Update' : 'Create'}</Button>
        </Box>
      </CardContent>
    </Card>
  )
})

