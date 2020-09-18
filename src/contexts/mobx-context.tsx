import * as React from 'react';
import { MobXProviderContext } from 'mobx-react';
import { ITodoStoreModel } from '../models/TodoStoreModel'

interface IMobxProvider {
  store: ITodoStoreModel;
}

export const MobxProvider: React.FC<IMobxProvider> = (props) => (
  <MobXProviderContext.Provider value={props.store}>
    {props.children}
  </MobXProviderContext.Provider>
);

export const useStore = (): ITodoStoreModel => {
  const context = React.useContext(MobXProviderContext);
  if (context === undefined) {
    throw new Error(
      'MobxProviderContext value is undefined.' +
        'Ensure you user the MobxProvider before using the context'
    );
  }
  return context as ITodoStoreModel;
};
