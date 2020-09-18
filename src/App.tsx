import React from 'react';
import { MobxProvider } from './contexts/mobx-context';
import { Todos } from './views/Todos';
import { createStore } from './store';

const store = createStore();


const App = () => <MobxProvider store={store}>
  <Todos />
</MobxProvider>

export default App;
