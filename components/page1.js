import React from 'react';
const axios = require('axios');
import {
  // SafeAreaView,
  StyleSheet,
  // ScrollView,
  // View,
  // StatusBar,
  FlatList,
  Image,
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
  ScrollView,
  View,
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
      flag: 'hello world',
      list: [
        {
          weekday: {
            en: 'Mon',
            cn: '星期一',
            ja: '月耀日',
            id: 1,
          },
          items: [
            {
              id: 238962,
              url: 'http://bgm.tv/subject/238962',
              type: 2,
              name: '私、能力は平均値でって言ったよね！',
              name_cn: '我，不是说了能力要平均值么！',
              summary: '',
              air_date: '2019-10-07',
              air_weekday: 1,
              rating: {
                total: 372,
                count: {
                  '10': 10,
                  '9': 5,
                  '8': 46,
                  '7': 141,
                  '6': 122,
                  '5': 35,
                  '4': 5,
                  '3': 6,
                  '2': 0,
                  '1': 2,
                },
                score: 6.6,
              },
              rank: 3368,
              images: {
                large: 'http://lain.bgm.tv/pic/cover/l/2e/97/238962_FHnTT.jpg',
                common: 'http://lain.bgm.tv/pic/cover/c/2e/97/238962_FHnTT.jpg',
                medium: 'http://lain.bgm.tv/pic/cover/m/2e/97/238962_FHnTT.jpg',
                small: 'http://lain.bgm.tv/pic/cover/s/2e/97/238962_FHnTT.jpg',
                grid: 'http://lain.bgm.tv/pic/cover/g/2e/97/238962_FHnTT.jpg',
              },
              collection: {
                doing: 1229,
              },
            },
            {
              id: 240835,
              url: 'http://bgm.tv/subject/240835',
              type: 2,
              name: 'バビロン',
              name_cn: '巴比伦',
              summary: '',
              air_date: '2019-10-07',
              air_weekday: 1,
              rating: {
                total: 139,
                count: {
                  '10': 7,
                  '9': 2,
                  '8': 78,
                  '7': 32,
                  '6': 16,
                  '5': 1,
                  '4': 0,
                  '3': 0,
                  '2': 2,
                  '1': 1,
                },
                score: 7.5,
              },
              rank: 953,
              images: {
                large: 'http://lain.bgm.tv/pic/cover/l/0c/eb/240835_B1dz0.jpg',
                common: 'http://lain.bgm.tv/pic/cover/c/0c/eb/240835_B1dz0.jpg',
                medium: 'http://lain.bgm.tv/pic/cover/m/0c/eb/240835_B1dz0.jpg',
                small: 'http://lain.bgm.tv/pic/cover/s/0c/eb/240835_B1dz0.jpg',
                grid: 'http://lain.bgm.tv/pic/cover/g/0c/eb/240835_B1dz0.jpg',
              },
              collection: {
                doing: 610,
              },
            },
            {
              id: 260729,
              url: 'http://bgm.tv/subject/260729',
              type: 2,
              name: 'スタンドマイヒーローズ PIECE OF TRUTH',
              name_cn: 'STAND MY HEROES PIECE OF TRUTH',
              summary: '',
              air_date: '2019-10-07',
              air_weekday: 1,
              rating: {
                total: 17,
                count: {
                  '10': 0,
                  '9': 0,
                  '8': 0,
                  '7': 3,
                  '6': 7,
                  '5': 4,
                  '4': 2,
                  '3': 1,
                  '2': 0,
                  '1': 0,
                },
                score: 5.5,
              },
              images: {
                large: 'http://lain.bgm.tv/pic/cover/l/de/f3/260729_4Mv62.jpg',
                common: 'http://lain.bgm.tv/pic/cover/c/de/f3/260729_4Mv62.jpg',
                medium: 'http://lain.bgm.tv/pic/cover/m/de/f3/260729_4Mv62.jpg',
                small: 'http://lain.bgm.tv/pic/cover/s/de/f3/260729_4Mv62.jpg',
                grid: 'http://lain.bgm.tv/pic/cover/g/de/f3/260729_4Mv62.jpg',
              },
              collection: {
                doing: 72,
              },
            },
            {
              id: 265712,
              url: 'http://bgm.tv/subject/265712',
              type: 2,
              name: 'Castlevania Season 3',
              name_cn: '恶魔城 第三季',
              summary: '',
              air_date: '0000-00-00',
              air_weekday: 1,
              images: null,
              collection: {
                doing: 11,
              },
            },
            {
              id: 273510,
              url: 'http://bgm.tv/subject/273510',
              type: 2,
              name: 'SUPER SHIRO',
              name_cn: '超级小白',
              summary: '',
              air_date: '2019-10-14',
              air_weekday: 1,
              rating: {
                total: 49,
                count: {
                  '10': 0,
                  '9': 0,
                  '8': 9,
                  '7': 24,
                  '6': 15,
                  '5': 0,
                  '4': 1,
                  '3': 0,
                  '2': 0,
                  '1': 0,
                },
                score: 6.8,
              },
              images: {
                large: 'http://lain.bgm.tv/pic/cover/l/07/4d/273510_1MVnn.jpg',
                common: 'http://lain.bgm.tv/pic/cover/c/07/4d/273510_1MVnn.jpg',
                medium: 'http://lain.bgm.tv/pic/cover/m/07/4d/273510_1MVnn.jpg',
                small: 'http://lain.bgm.tv/pic/cover/s/07/4d/273510_1MVnn.jpg',
                grid: 'http://lain.bgm.tv/pic/cover/g/07/4d/273510_1MVnn.jpg',
              },
              collection: {
                doing: 189,
              },
            },
            {
              id: 277217,
              url: 'http://bgm.tv/subject/277217',
              type: 2,
              name: 'ファンタシースターオンライン2 エピソード・オラクル',
              name_cn: '梦幻之星online2 EPISODE ORACLE',
              summary: '',
              air_date: '2019-10-07',
              air_weekday: 1,
              rating: {
                total: 24,
                count: {
                  '10': 1,
                  '9': 0,
                  '8': 1,
                  '7': 8,
                  '6': 11,
                  '5': 2,
                  '4': 1,
                  '3': 0,
                  '2': 0,
                  '1': 0,
                },
                score: 6.4,
              },
              images: {
                large: 'http://lain.bgm.tv/pic/cover/l/db/3d/277217_mCR6C.jpg',
                common: 'http://lain.bgm.tv/pic/cover/c/db/3d/277217_mCR6C.jpg',
                medium: 'http://lain.bgm.tv/pic/cover/m/db/3d/277217_mCR6C.jpg',
                small: 'http://lain.bgm.tv/pic/cover/s/db/3d/277217_mCR6C.jpg',
                grid: 'http://lain.bgm.tv/pic/cover/g/db/3d/277217_mCR6C.jpg',
              },
              collection: {
                doing: 77,
              },
            },
            {
              id: 291646,
              url: 'http://bgm.tv/subject/291646',
              type: 2,
              name: '梦幻书院 游学季',
              name_cn: '',
              summary: '',
              air_date: '2019-10-07',
              air_weekday: 1,
              images: {
                large: 'http://lain.bgm.tv/pic/cover/l/a8/76/291646_mfOjh.jpg',
                common: 'http://lain.bgm.tv/pic/cover/c/a8/76/291646_mfOjh.jpg',
                medium: 'http://lain.bgm.tv/pic/cover/m/a8/76/291646_mfOjh.jpg',
                small: 'http://lain.bgm.tv/pic/cover/s/a8/76/291646_mfOjh.jpg',
                grid: 'http://lain.bgm.tv/pic/cover/g/a8/76/291646_mfOjh.jpg',
              },
            },
            {
              id: 292503,
              url: 'http://bgm.tv/subject/292503',
              type: 2,
              name: "Genndy Tartakovsky's Primal",
              name_cn: '野蛮纪源',
              summary: '',
              air_date: '2019-10-07',
              air_weekday: 1,
              rating: {
                total: 5,
                count: {
                  '10': 0,
                  '9': 0,
                  '8': 0,
                  '7': 3,
                  '6': 2,
                  '5': 0,
                  '4': 0,
                  '3': 0,
                  '2': 0,
                  '1': 0,
                },
                score: 6.6,
              },
              images: {
                large: 'http://lain.bgm.tv/pic/cover/l/79/fa/292503_Gznwu.jpg',
                common: 'http://lain.bgm.tv/pic/cover/c/79/fa/292503_Gznwu.jpg',
                medium: 'http://lain.bgm.tv/pic/cover/m/79/fa/292503_Gznwu.jpg',
                small: 'http://lain.bgm.tv/pic/cover/s/79/fa/292503_Gznwu.jpg',
                grid: 'http://lain.bgm.tv/pic/cover/g/79/fa/292503_Gznwu.jpg',
              },
              collection: {
                doing: 3,
              },
            },
            {
              id: 293470,
              url: 'http://bgm.tv/subject/293470',
              type: 2,
              name: '万界仙踪 第三季',
              name_cn: '',
              summary: '',
              air_date: '2019-10-21',
              air_weekday: 1,
              images: {
                large: 'http://lain.bgm.tv/pic/cover/l/1f/aa/293470_Rl2Rw.jpg',
                common: 'http://lain.bgm.tv/pic/cover/c/1f/aa/293470_Rl2Rw.jpg',
                medium: 'http://lain.bgm.tv/pic/cover/m/1f/aa/293470_Rl2Rw.jpg',
                small: 'http://lain.bgm.tv/pic/cover/s/1f/aa/293470_Rl2Rw.jpg',
                grid: 'http://lain.bgm.tv/pic/cover/g/1f/aa/293470_Rl2Rw.jpg',
              },
              collection: {
                doing: 3,
              },
            },
            {
              id: 293872,
              url: 'http://bgm.tv/subject/293872',
              type: 2,
              name: 'Hazbin Hotel',
              name_cn: '地狱客栈',
              summary: '',
              air_date: '2019-10-28',
              air_weekday: 1,
              images: {
                large: 'http://lain.bgm.tv/pic/cover/l/51/99/293872_RG745.jpg',
                common: 'http://lain.bgm.tv/pic/cover/c/51/99/293872_RG745.jpg',
                medium: 'http://lain.bgm.tv/pic/cover/m/51/99/293872_RG745.jpg',
                small: 'http://lain.bgm.tv/pic/cover/s/51/99/293872_RG745.jpg',
                grid: 'http://lain.bgm.tv/pic/cover/g/51/99/293872_RG745.jpg',
              },
              collection: {
                doing: 6,
              },
            },
          ],
        },
      ],
      keyword: '',
      res: {
        msg: 'fdf',
      },
    };
    this.search = this.search.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.redict = this.redict.bind(this);
  }

  async componentDidMount() {}
  async search() {
    this.setState({
      flag: this.state.keyword,
    });
    let res = await axios.get(`https://api.bgm.tv/calendar`);
    this.setState({
      res: res.data,
      list: res.data,
    });
  }
  handleChange(text) {
    this.setState({
      keyword: text,
    });
  }
  redict() {
    // this.setState({
    //   flag:'hhhh'
    // })
    const { state, navigate } = this.props.navigation;
    this.props.navigation.navigate('Details');
  }

  render() {
    const WeekList = this.state.list.map(item => (
      <View style={styles.viewList1}>
        <Text style={styles.viewTitle}>{item.weekday.cn}</Text>
        <View style={styles.viewList}>
          {item.items.map(i => (
            <Button transparent  style={styles.listItem} onPress={this.redict}>
              <Image
                style={{width: 70, height: 70}}
                source={{
                  uri: i.images
                    ? i.images.common
                    : 'https://facebook.github.io/react-native/img/tiny_logo.png',
                }}
              />
<<<<<<< HEAD
              <Text style={{width: 100, height: 35, fontSize: 12,marginTop:7}}>
=======
              <Text style={{width: 70, height: 35, fontSize: 12}}>
>>>>>>> fd2ebd098ea61803111fe1fb659c07b85778d6cd
                {i.name}
              </Text>
            </Button>
          ))}
        </View>
      </View>
    ));

    return (
      <Content style={styles.content}>
        <Header style={styles.header} searchBar rounded>
          <Item>
            <Icon name="ios-search" />
            <Input
              placeholder="Search"
              type="search"
              value={this.state.keyword}
              onChangeText={this.handleChange}
            />
<<<<<<< HEAD
            <Button style={styles.searchButton} onPress={this.search}>
=======
            <Button onPress={this.search}>
>>>>>>> fd2ebd098ea61803111fe1fb659c07b85778d6cd
              <Text>Search</Text>
            </Button>
          </Item>
        </Header>
        {WeekList}
      </Content>
    );
  }
}

const styles = StyleSheet.create({
<<<<<<< HEAD
  searchButton:{
    height:30
  },  
=======
>>>>>>> fd2ebd098ea61803111fe1fb659c07b85778d6cd
  content: {
    overflow: 'scroll',
    // paddingTop:50
  },
  header: {
    // height:50,
    // position:'absolute',
    // top:0
  },
  listItem: {
<<<<<<< HEAD
    marginBottom:10,
=======
>>>>>>> fd2ebd098ea61803111fe1fb659c07b85778d6cd
    borderWidth:0,
    backgroundColor:'#fff',
    width: 80,
    height: 120,
    overflow: 'hidden',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  viewTitle: {
    paddingLeft: 15,
    paddingBottom: 15,
  },
  viewList1: {
    marginTop: 20,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  viewList: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    flexWrap: 'wrap',
  },
  searchBar: {},
  List: {
    overflow: 'scroll',
  },
  ScrollView: {
    height: 200,
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
});
