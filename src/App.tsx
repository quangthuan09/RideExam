import React from 'react';
import ApplicationNavigator from './navigators/Application';

if (__DEV__) {
  import('../ReactotronConfig').then(() => console.log('Reactotron Configured'));
}
const App = () => {
  return (
    <>
      <ApplicationNavigator />
    </>
  );
};

export default App;
