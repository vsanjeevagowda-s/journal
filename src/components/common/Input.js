import React from 'react';
import { Text, TextInput, View } from 'react-native';

const Input = (props) => {
  console.log(props);
  return (
    <View style={styles.emailContainer}>
      <Text style={styles.labelText}>{props.label}</Text>
      <TextInput keyboardType={props.keypadtype} style={styles.emailField} placeholder={props.placeholder}
        underlineColorAndroid="transparent"
        secureTextEntry={props.securedText}
        value={props.value}
        onChangeText={props.onChangeText}/>
      </View>
    );
  };
  const styles = {
    emailContainer:{
      flex:1,
      paddingLeft:10,
      paddingRight:10
    },
    emailField:{
      borderRadius: 8,
      borderWidth: 1,
      fontSize: 18
    },
    labelText:{
      fontSize: 18
    }
  };

  export default Input;
