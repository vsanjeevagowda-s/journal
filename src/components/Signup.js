import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput
} from 'react-native';
import { connect } from 'react-redux';
import { signupFormUpdate, signupButtonPress } from '../actions';
import Button from './common/Button';
import Input from './common/Input';

class Signup extends Component {

  submitButton(){
    return  {backgroundColor: 'blue', color: 'white', marginTop: 70}
  }
  cancelButton(){
    return  {backgroundColor: 'white', color: 'black', borderWidth:1, marginTop: 10}
  }
  onSignupButtonPress(){
    debugger
    const {email, password, password_confirmation, code} = this.props;
    this.props.signupButtonPress({email, password, password_confirmation, code})
  }
  render() {

    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Sign Up</Text>
        </View>
        <View style={styles.form}>
          <Input label="Email/Phone No." keypadtype={'email-address'}     placeholder="user@example.com"
          onChangeText={(text) => this.props.signupFormUpdate({prop: "email", value: text})}
          value={this.props.email}
        />
        <Input label="Password"  placeholder="*********************"
          securedText={true}
          onChangeText={(text) => this.props.signupFormUpdate({prop: "password", value: text})}
          value={this.props.password}
        />
        <Input label="Password Confirmation"  placeholder="*********************"
          securedText={true}
          onChangeText={(text) => this.props.signupFormUpdate({prop: "password_confirmation", value: text})}
          value={this.props.password_confirmation}
        />
        <Input label="Code"  placeholder="*********************"
          onChangeText={(text) => this.props.signupFormUpdate({prop: "code", value: text})}
          value={this.props.code}
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button styles={this.submitButton()} onPress={this.onSignupButtonPress.bind(this)}>SUBMIT</Button>
        <Button styles={this.cancelButton()}>CANCEL</Button>
      </View>
    </View>
  );
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  header: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: 8,
    backgroundColor: 'black',
    alignSelf: 'stretch'
  },
  headerText:{
    fontSize: 30,
    color: 'white'
  },
  form: {
    flex: 9,
    flexDirection: 'column',
    alignSelf: 'stretch',
    marginTop: 20,
    paddingLeft:10,
    paddingRight:10
  },
  agreementContainer:{
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignSelf: 'stretch',
    paddingLeft: 25
  },
  termsText:{
    paddingTop: 11,
    paddingLeft: 5,
    fontSize: 17,
    color: 'blue',
    fontStyle: 'italic'
  },
  buttonContainer:{
    flex: 5
  }

});

const mapStateToProps = (state) =>{
  const {email, password, password_confirmation, code} = state.signup
  return {email, password, password_confirmation, code}
}


export default connect(mapStateToProps,{signupFormUpdate, signupButtonPress})(Signup);
