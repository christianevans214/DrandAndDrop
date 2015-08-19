var React = require('react-native');
var {
  SwitchIOS,
  StyleSheet,
  View,
} = React;


module.exports = React.createClass({
  getInitialState() {
    return {
      falseSwitchIsOn: false,
    };
  },
  render() {
    return (
      <View>
        <SwitchIOS
          // onTintColor = "#00ff00" //backgound color when the switch is turned on
          // thumbTintColor = "#000000" //background color for the switch round button
          // tintColor = "#000000" //background color when the switch is turned off
          // style={{marginBottom: 0}} //css styling
          // disabled = 'false' //if true, the user won't be able to toggle switch, default is false
          onValueChange={(value) => this.setState({falseSwitchIsOn: value})} //callback when user toggles switch
          value={this.state.falseSwitchIsOn} //value of the switch, if true switch is on, default is false
        />
      </View>
    );
  }
});