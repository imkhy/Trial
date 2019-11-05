
import React from 'react';

import { StyleSheet, View, Text, Image } from 'react-native';

import AppIntroSlider from 'react-native-app-intro-slider';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showRealApp: false,

    };
  }
  _onDone = () => {
    this.setState({ showRealApp: true });
  };
  _onSkip = () => {
    this.setState({ showRealApp: true });
  };
  _renderItem = ({ item }) => {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: item.backgroundColor,
          alignItems: 'center',
          justifyContent: 'space-around',
          paddingBottom: 100
        }}>
        <Text style={styles.title}>{item.title}</Text>
        <Image style={styles.image} source={item.image} />
        <Text style={styles.text}>{item.text}</Text>
      </View>
    );
  };
  render() {

    if (this.state.showRealApp) {

      return (
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            padding: 50,
          }}>
          <Text>
            .....
          </Text>
        </View>
      );
    } else {
      //Intro slides
      return (
        <AppIntroSlider
          slides={slides}
          renderItem={this._renderItem}
          onDone={this._onDone}
          showSkipButton={true}
          onSkip={this._onSkip}
        />
      );
    }
  }
}
const styles = StyleSheet.create({
  image: {
    width: 200,
    height: 200,
  },
  text: {
    fontSize: 18,
    color: 'white',
    textAlign: 'center',
    paddingVertical: 30,
  },
  title: {
    fontSize: 25,
    color: 'white',
    textAlign: 'center',
    marginBottom: 16,
  },
});

const slides = [
  {
    key: 's1',
    text: 'Tech It Easy, Pharmacy ....',
    title: 'Tech',
    image: {
      uri:
        'https://dduconnect.in/wp-content/uploads/2019/02/Code_Computer-2-512.png',
    },
    backgroundColor: '#22bcb5',
  },
  {
    key: 's2',
    title: 'Non-Tech',
    text: 'Fiction, Open Letters, Verses .....',
    image: {
      uri:
        'https://dduconnect.in/wp-content/uploads/2019/05/Convocation-PopUp-Website.jpg',
    },
    backgroundColor: '#20d2bb',
  },
  {
    key: 's3',
    title: 'Buzz',
    text: 'Whats happening around',
    image: {
      uri: 'https://dduconnect.in/wp-content/uploads/2019/02/buzz-1.jpg',
    },
    backgroundColor: '#f6437b',
  },
  {
    key: 's4',
    title: 'Placements',
    text: ' Keep a check',
    image: {
      uri: 'https://dduconnect.in/wp-content/uploads/2019/02/800px_COLOURBOX25727338.jpg',
    },
    backgroundColor: '#22bcb5',
  },
  {
    key: 's5',
    title: 'Past Year Papers',
    text: 'Lets prepare a bit harder',
    image: {
      uri:
        'https://dduconnect.in/wp-content/uploads/2019/05/PAST_YEAR_PAPER_1080_1920-1.jpg',
    },
    backgroundColor: '#febe29',
  },
  {
    key: 's6',
    title: 'More Content',
    text: ' Much more to Explore',
    image: {
      uri:
        'https://dduconnect.in/wp-content/uploads/2019/05/big2.jpg',
    },
    backgroundColor: '#3395ff',
  },
];