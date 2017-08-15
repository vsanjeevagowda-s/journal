import React, { Component } from 'react';
import { Scene, Router } from 'react-native-router-flux';
import { Actions } from 'react-native-router-flux';
import Signup from './components/Signup';

const RouterComponent = () => {
  return (
    <Router sceneStyle={{paddingTop: 60}}>
      <Scene key="auth" style={styles.signupNavBarContainer}>
        <Scene key="login" component={Signup} title="Sign up" style={styles.signupNavBarText}
          hideNavBar
        />
      </Scene>
    </Router>
  )
}

const styles ={
  signupNavBarContainer:{
    justifyContent:'center',
    alignItems: 'center'
  },
  signupNavBarText:{
    textalign: 'center'
  }
}

export default  RouterComponent;
