import React, { Component } from 'react';
import { View, Text, StatusBar, Image, } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Colors } from '../../Assets/ThemeColors/ThemeColors';


export default class NoInternetScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Colors.white,
      }}>

        <StatusBar
          backgroundColor={"transparent"}
          translucent 
          barStyle={"dark-content"}
        />

        <Image
          source={require('../../Assets/Images/Nonet3.png')} 
          resizeMode="cover"
          style={{
            height: hp(50),
            width: hp(50),
            // marginBottom: 38,
            // backgroundColor: 'plum',
          }}
          />

        {/* <Text style={{
          fontFamily: 'monospace',
          alignSelf: 'center',
          letterSpacing: 1,
          fontSize: hp(4.5),
          // fontWeight:'700',
          color: Colors.orange
        }}>Oops!
        </Text> */}

        <Text style={{
          fontSize: hp(4.2),
          // letterSpacing: 1,
          color: Colors.orange,
          textAlign:'center',
          fontFamily:"Acme-Regular",
        }}>Ask your parents {"\n"}to connect the {"\n"}Internet.
        </Text>


      </View>
      
    );
  }
}
