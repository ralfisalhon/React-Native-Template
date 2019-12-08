import React from "react";
import { Text, View, Dimensions, TouchableOpacity } from "react-native";
const { width: windowWidth, height: windowHeight } = Dimensions.get("window");
import { human } from "react-native-typography";

import { styles } from "./style.js";

// import { Profile } from "../assets/components/Profile";

export class Screen1 extends React.Component {
  static navigationOptions = {
    header: null
  };

  constructor() {
    super();
    this.state = {};
  }

  componentDidMount() {}

  render() {
    const {} = this.props.navigation;

    return (
      <View style={styles.container}>
        <Text style={human.title1}>Screen1</Text>
        <TouchableOpacity onPress={() => this.props.navigation.navigate("Screen2")}>
          <Text>Go to Screen2</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
