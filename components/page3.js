import React from 'react';

import {
  // SafeAreaView,
  StyleSheet,
  // ScrollView,
  // View,
  // StatusBar,
} from 'react-native';
import {
  Container,
  Header,
  Content,
  Footer,
  FooterTab,
  Button,
  Icon,
  Text,
  Title,
  Input,
  Item,
  List,
  ListItem,
} from 'native-base';
import {
  // Header,
  // LearnMoreLinks,
  Colors,
  // DebugInstructions,
  // ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import {AndroidBackHandler} from 'react-navigation-backhandler';
export default class App extends React.Component {
  static navigationOptions = {
    title: 'Page3',
  };
  onBackButtonPressAndroid = () => {
    /*
     *   Returning `true` from `onBackButtonPressAndroid` denotes that we have handled the event,
     *   and react-navigation's lister will not get called, thus not popping the screen.
     *
     *   Returning `false` will cause the event to bubble up and react-navigation's listener will pop the screen.
     * */

    this.props.navigation.navigate('Home');
  };
  constructor(props) {
    super(props);
    this.state = {
      flag: 'gdasgfebea',
    };
  }

  async componentDidMount() {}

  render() {
    const { state, goBack } = this.props.navigation;
    const params = state.params || {};
    return (
      <AndroidBackHandler onBackPress={this.onBackButtonPressAndroid}>
        <Content>
          <Text>{this.state.flag}</Text>
          <Button
          title="Go back"
          onPress={() => {
            goBack(null);
          }}

        ><Text>go back</Text></Button>
        </Content>
      </AndroidBackHandler>
    );
  }
}

const styles = StyleSheet.create({
  container: {},
  searchBar: {},
});
