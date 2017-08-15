import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput
} from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import ReduxThunk from 'redux-thunk';
import RouterComponent from './Router';

class App extends Component {
  render(){
    store = createStore(reducers, {},applyMiddleware(ReduxThunk));
    return(
      <Provider store={store}>
        <RouterComponent />
      </Provider>
    )
  }
}
export default App;
