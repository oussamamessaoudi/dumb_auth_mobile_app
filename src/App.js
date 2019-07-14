import React from 'react';
import {StyleSheet, View} from 'react-native';
import Routes from './scenes';

const styles = StyleSheet.create({
  layoutContainerStyle: {
    flex: 1,
  },
});

const App = () => {
  return (
    <View style={styles.layoutContainerStyle}>
      <Routes/>
      </View>
  );
};

export default App;
