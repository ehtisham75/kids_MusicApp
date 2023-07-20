import React, { Component } from 'react';
import { View, StatusBar, Image, Dimensions} from 'react-native';
import { CommonActions } from '@react-navigation/native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import NetInfo from "@react-native-community/netinfo";
import { Colors } from '../../Assets/ThemeColors/ThemeColors';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default class SplashScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };

  }

  componentDidMount() {
    console.log('===   height =====>> ', windowHeight)
    console.log('===   width =====>> ', windowWidth)
    // setTimeout(() => {
    //   this.props.navigation.dispatch(
    //     CommonActions.reset({
    //       index: 0,
    //       routes: [
    //         {
    //           name: 'HomeScreen1',
    //           // params:{}
    //         }
    //       ],
    //     })
    //   );
    // }, 3000);
    this.Net_info()
  }

  Net_info() {
    NetInfo.addEventListener(state => {
      console.log("Connection type", state.type);
      console.log("Is connected?", state.isConnected);

      if (state.isConnected == true) {
        setTimeout(() => {
          this.props.navigation.dispatch(
            CommonActions.reset({
              index: 0,
              routes: [
                {
                  name: "HomeScreen",
                }
              ],
            })
          );
        }, 3000);
      }
      else {
        setTimeout(() => {
          this.props.navigation.dispatch(
            CommonActions.reset({
              index: 0,
              routes: [
                {
                  name: "NoInternetScreen",
                }
              ],
            })
          );
        }, 3000);
      }
    })
  }

  render() {
    return (
      <View style={{
        flex: 1,
        // backgroundColor: Colors.primary_color,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
        <StatusBar backgroundColor={'transparent'} translucent />

        <Image
          resizeMode='cover'
          source={require('../../Assets/Images/Bg5.png')}
          style={{
            height: hp(105),
            width: wp(100),
            // backgroundColor: '#CEBCC0',
          }} />

      </View>
    );
  }
}