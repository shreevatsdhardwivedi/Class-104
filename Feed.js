import React, { Component } from 'react';
import { View,
Text,
StyleSheet,
SafeAreaView,
platForm,
SratusBar,
image }
from 'react-native';

import { RFValue } from "react-native-responsive-fontsize";
import StoryCard from "./StoryCard";

import AppLoading from "expo-app-loading";
import * as font from "expo-font";
import { FlatList } from "react-native-gesture-handler";

let customFonts=  {
  "bubbleGum-sans": require("../assets/fonts/bubbleGumSans-Regular.tff")
};

let stories = require("./temp_stories.json");

export default class Feed extends Component {
  constructior(props){
    super(props);
    this.state = {
      fontsLoaded: false
    };
  }

  async _loadFontsAsync() {
    await Font.loadAsync(customFonts);
    this.setState({ fontsLoaded: true });
  }

  componentDidMount() {
    this._loadFontsAsync();
  }

  renderItem = ({ item: story}) => {
    return <storyCard story={story} />
  };

  keyExtrator = (item, index) => index.toString();

  render() {
    if (!this.state.fontsLoaded) {
      return <AppLoading />;
    } else {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <text>Feeds</text>
      </View>
    );
  }
}
