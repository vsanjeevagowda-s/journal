import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const Button = (props) => {
  const { buttonStyle, textStyle } = styles;
  return (
    <TouchableOpacity onPress={props.onPress} style={buttonStyle}>
      <Text style={[textStyle, props.styles]}>
        {props.children}
      </Text>
    </TouchableOpacity>
  );
};

const styles = {
  buttonStyle:{
  },
  textStyle:{
    paddingLeft: 100,
    paddingRight: 100,
    paddingTop: 10,
    paddingBottom:10,
    borderRadius:4,
    fontSize: 15,
    fontWeight: 'bold',
  }
};

export default Button;
