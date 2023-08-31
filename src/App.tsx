import React from 'react';
import ApplicationNavigator from './navigators/Application';
import { Provider } from 'react-redux';
import { store } from '~/store';

if (__DEV__) {
  import('../ReactotronConfig').then(() => console.log('Reactotron Configured'));
}
const App = () => {
  return (
    <>
      <Provider store={store}>
        <ApplicationNavigator />
      </Provider>
    </>
  );
};

export default App;
