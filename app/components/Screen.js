import React from 'react';
import { StyleSheet, StatusBar, SafeAreaView } from 'react-native';
import color from '../misc/color';

const Screen = ({ children }) => {
  return <SafeAreaView style={styles.container}>{children}</SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.APP_BG,
    paddingTop:StatusBar.currentHeight,
  },
});

export default Screen;
