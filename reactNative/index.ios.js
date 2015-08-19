/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var BasicSwitch = require('./components/SwitchIOS');
var BasicTextInput = require('./components/TextInput');

var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
} = React;

var reactNative = React.createClass({
  render: function() {
    return (
<<<<<<< HEAD
      <View style={styles.container}>
=======
      <BasicScrollView />

/*      <View style={styles.container}>
>>>>>>> def11456702254217a91413ee691266b60adf787
        <BasicSwitch />
        <BasicTextInput />
        <Text style={styles.welcome}>
          Cooper's Smart Phone!
        </Text>
        <Text style={styles.instructions}>
          Press Cmd+R to reload,{'\n'}
          Cmd+D or shake for dev menu
        </Text>
      </View>
    );
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('reactNative', () => reactNative);





