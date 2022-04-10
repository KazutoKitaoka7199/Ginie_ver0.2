import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import { string, func, shape } from 'prop-types';

export default function Button(props) {
  const { label, onPress, style } = props;
  return (
    <TouchableOpacity style={[styles.button, style]} onPress={onPress}>
      <Text style={styles.buttonLabel}>{ label }</Text>
    </TouchableOpacity>
  );
}

Button.propTypes = {
  label: string.isRequired,
  onPress: func,
  style: shape(),
};

Button.defaultProps = {
  onPress: null,
  style: null,
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#0066FF',
    borderRadius: 4,
    alignSelf: 'flex-start',
    width: 115,
    marginBottom: 24,
  },
  buttonLabel: {
    fontSize: 16,
    lineHeight: 32,
    paddingVertical: 8,
    paddingHorizontal: 32,
    textAlign: 'center',
    color: '#ffffff',
  },
});
