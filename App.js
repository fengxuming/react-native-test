/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Page1 from './components/page1';
import Home from './components/home';
import Detail from './components/detailPage';
import Page2 from './components/page2';
import Page3 from './components/page3';
import Page4 from './components/page4';
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
} from 'native-base';
import {
  // Header,
  // LearnMoreLinks,
  Colors,
  // DebugInstructions,
  // ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
const RootStack = createStackNavigator(
  {
    Home: Home,
    Details: Page3,
  },
  {
    initialRouteName: 'Home',
    backBehavior: 'initialRoute'
  }
);

const AppContainer = createAppContainer(RootStack);
export default class App extends React.Component {
  constructor(props) {
    super(props);

    let navList = [
      {
        name: 'apps',
        title: 'Apdffdps',
      },
      {
        name: 'camera',
        title: 'Camera',
      },
      {
        name: 'navigate',
        title: 'Navigate',
      },
      {
        name: 'person',
        title: 'Contact',
      },
    ];
    this.state = {
      isReady: false,
      navList,
      flag: 'ff',
      activeNav: {
        name: 'apps',
        title: 'Apdffdps',
      },
    };
    this.changeNav = this.changeNav.bind(this);
  }

  async componentDidMount() {}
  changeNav(nav) {
    this.setState({
      activeNav: nav,
    });
    // this.props.navigation.navigate('Details')
  }

  render() {
    const NavList = this.state.navList.map(nav => (
      <Button
        vertical
        onPress={() => {
          this.changeNav(nav);
        }}
        active={this.state.activeNav.name === nav.name ? true : false}>
        <Icon name={nav.name} />
        <Text>{nav.title}</Text>
      </Button>
    ));
    const MainContent = () => {
      if (this.state.activeNav.name === 'apps') {
        return <Page1 />;
      }
      if (this.state.activeNav.name === 'camera') {
        return <Page2 />;
      }
      if (this.state.activeNav.name === 'navigate') {
        return <Page3 />;
      }
      if (this.state.activeNav.name === 'person') {
        return <Page4 />;
      }
      return <Page1 />;
    };

    return (
      <AppContainer />
    );
  }
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});
