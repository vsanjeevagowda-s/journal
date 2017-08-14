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
import Signup from './components/Signup';
// import Input from './components/common/Input';
import Button from './components/common/Button';


class App extends Component {
  render(){
    store = createStore(reducers, {},applyMiddleware(ReduxThunk));
    return(
      <Provider store={store}>
        <Signup />
      </Provider>
      //<Button />
      //<Input />
    )
  }
}
export default App;
