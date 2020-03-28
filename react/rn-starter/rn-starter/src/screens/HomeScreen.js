import React from 'react';
import { Text, StyleSheet, View, Button, TouchableOpacity } from 'react-native';
import { setRecoveryProps } from 'expo/build/ErrorRecovery/ErrorRecovery';

const HomeScreen = ({ navigation }) => {
  return (
  <View> 
    <Text style={styles.text}>What are you doing!!!!!</Text>
    <Button
      onPress={() => navigation.navigate('Components')} 
      title="Go to Components Demo" 
    />
    <Button
      title="Go to List Demo"
      onPress={() => navigation.navigate('List')}
    />
  </View>
  );
};  

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default HomeScreen;
