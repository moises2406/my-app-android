import React, { Component } from "react";
import { Button, Text, View } from "react-native";

export default class Bue extends Component {
  state = {
    ok:this.props.route.params[0],
  };
  

  render() {
      const oo ={moises:"moises"}
    return (
      <View>
        <Button
          title="ok"
          onPress={() => this.props.navigation.navigate("Home",oo)}
        />
        <Text> textInComponent </Text>
      </View>
    );
  }
}
