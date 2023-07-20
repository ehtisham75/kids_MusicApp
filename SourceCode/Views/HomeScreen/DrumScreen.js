import React, { Component } from 'react';
import { ImageBackground, Image, Text, View,ActivityIndicator, TouchableOpacity } from 'react-native';
import Sound from 'react-native-sound';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Colors } from '../../Assets/ThemeColors/ThemeColors';
import DrumSoundLeft from '../../Assets/DrumSounds/drumbeat1.mp3'
import DrumSoundRight from '../../Assets/DrumSounds/drumbeat2.wav'
import { BannerAd, BannerAdSize, TestIds } from 'react-native-google-mobile-ads';

export default class DrumScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            colorC: "white",
            colorCs: "black",
            AdsControlList: this.props.route.params?.AdsControllerList ?? "",
            hasAd: false
        }

        this.sound = {};
        const soundList = [DrumSoundLeft, DrumSoundRight]
        soundList.forEach(note => {
            this.sound[note] = new Sound(note, Sound.MAIN_BUNDLE, error => {
                console.log('----------//// ', note)
                if (error) {
                    console.log("failed to load the sound.", error);
                }
            })
        });

    }

    componentDidMount() {
        // console.log('-=-=-=--==-- ',DrumSoundLeft)
    }

    stroke(note) {

        if (this.sound[note] == null) {
            this.sound[note].play();
            return
        }
        if(this.sound[note] != null){
            this.sound[note].stop()

            this.sound[note].play();
            return
        }
    }

    adClicked() {
        console.log('=======DRUM banner ad clicked ======');
    }
    adReceived() {
        console.log('=======DRUM banner ad received=======');
        this.setState({
            ...this.state,
            hasAd: true
        });
    }

    render() {
        let { AdsControlList } = this.state

        return (
            <View style={{
                flex: 1,
            }}>

                <ImageBackground
                    source={require('../../Assets/Images/SBG5.png')}
                    style={{
                        width: wp(100),
                        height: hp(104),
                        alignItems: 'center',
                    }}>

                    <Text style={{
                        fontSize: hp(7),
                        color: Colors.white,
                        marginTop: hp(10),
                        fontWeight: '600',
                        fontFamily: "Acme-Regular",
                    }}>Drum Beat</Text>


                    <View style={{
                        width: wp(100),
                        flexDirection: 'row',
                        // backgroundColor: 'red',
                        justifyContent: 'space-between',
                        paddingHorizontal: wp(2),
                        marginTop: hp(10),
                    }}>
                        <TouchableOpacity
                            onPress={() => { this.stroke(DrumSoundLeft) }}
                            activeOpacity={0.5}>
                            <Image source={require('../../Assets/Images/drumLeft.png')}
                                resizeMode='cover'
                                style={{
                                    width: wp(47),
                                    height: hp(31),
                                    alignSelf: 'center',
                                    // backgroundColor: 'plum',
                                    // marginTop: hp(2),
                                }}>
                            </Image>
                        </TouchableOpacity>

                        <TouchableOpacity
                            onPress={() => { this.stroke(DrumSoundRight) }}
                            activeOpacity={0.5}>
                            <Image source={require('../../Assets/Images/drumRight.png')}
                                resizeMode='cover'
                                style={{
                                    width: wp(47),
                                    height: hp(31),
                                    alignSelf: 'center',
                                    // backgroundColor: 'plum',
                                    // marginTop: hp(2),
                                }}>
                            </Image>
                        </TouchableOpacity>

                    </View>

                    {this.state.AdsControlList[0]?.DrumBanAd &&
                        <View style={{
                            width: wp(100),
                            alignItems: 'center',
                            position: 'absolute',
                            bottom: hp(1),
                            height: !this.state.hasAd ? 0 : hp(7)
                        }}>
                                <BannerAd
                                    size={BannerAdSize.ANCHORED_ADAPTIVE_BANNER}
                                    unitId={this.state.AdsControlList[0]?.DrumBanAd_ID}
                                    onAdOpened={this.adClicked.bind(this)}
                                    onAdLoaded={this.adReceived.bind(this)}
                                />
                        </View>}
                </ImageBackground>
            </View>
        );
    }
}
