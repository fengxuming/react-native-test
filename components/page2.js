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

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      flag: 'ndndndndnd',
    };
  }

  async componentDidMount() {}

  render() {
    return (
      <Content>
        <Text>{this.state.flag}</Text>
      </Content>
    );
  }
}

const styles = StyleSheet.create({
  container: {},
  searchBar: {},
});
