import React, { Component } from 'react';
import { View, Text, ImageBackground, Image, ActivityIndicator, TouchableOpacity } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Colors } from '../../Assets/ThemeColors/ThemeColors';
import { BannerAd, BannerAdSize, TestIds } from 'react-native-google-mobile-ads';

import Sound from 'react-native-sound';
import Num1 from '../../Assets/CountingSounds/one.mp3'
import Num2 from '../../Assets/CountingSounds/two.mp3'
import Num3 from '../../Assets/CountingSounds/three.mp3'
import Num4 from '../../Assets/CountingSounds/four.mp3'
import Num5 from '../../Assets/CountingSounds/five.mp3'
import Num6 from '../../Assets/CountingSounds/six.mp3'
import Num7 from '../../Assets/CountingSounds/seven.mp3'
import Num8 from '../../Assets/CountingSounds/eight.mp3'
import Num9 from '../../Assets/CountingSounds/nine.mp3'
import Num10 from '../../Assets/CountingSounds/ten.mp3'

export default class CountingScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            AdsControlList: this.props.route.params?.AdsControllerList ?? "",
            hasAd: false
        }

        this.sound = {};
        const soundList = [Num1, Num2, Num3, Num4, Num5, Num6, Num7, Num8, Num9, Num10]
        soundList.forEach(note => {
            this.sound[note] = new Sound(note, Sound.MAIN_BUNDLE, error => {
                if (error) {
                    console.log("failed to load the sound.", error);
                }
            })
        });
    }

    numbers_count(props) {
        return (
            <TouchableOpacity
                onPress={() => { props.Num_Sound() }}
                activeOpacity={0.5}
                style={{
                    width: hp(8),
                    height: hp(8),
                    backgroundColor: props.BgColor,
                    borderRadius: 100,
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                <Text style={{
                    fontSize: hp(5),
                    color: Colors.black_text,
                    // textAlign:'center'
                }}>
                    {props.Number}
                </Text>

            </TouchableOpacity>
        )
    }

    stroke(note) {
        // this.sound[note].play();
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
        console.log('===== COUNTING banner ad clicked ======');
    }
    adReceived() {
        console.log('======COUNTING banner ad received=======');
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
                    source={require('../../Assets/Images/SBG16.png')}
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
                    }}>Counting</Text>


                    {/* ============== Counting Pad ============= */}
                    <View style={{
                        marginTop: hp(10),
                        width: wp(100),
                        paddingHorizontal: wp(5)
                    }}>


                        {/* ========== 1st Row ========= */}
                        <View style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            marginBottom: hp(7),
                        }}>

                            <this.numbers_count
                                Num_Sound={() => this.stroke(Num1)}
                                BgColor={Colors.border_red}
                                Number={"1"}
                            />
                            <this.numbers_count
                                Num_Sound={() => this.stroke(Num2)}
                                BgColor={Colors.primary_color}
                                Number={"2"}
                            />
                            <this.numbers_count
                                Num_Sound={() => this.stroke(Num3)}
                                BgColor={Colors.blue}
                                Number={"3"}
                            />
                        </View>

                        {/* ========== 2nd Row ========= */}
                        <View style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            marginBottom: hp(7),
                        }}>

                            <this.numbers_count
                                Num_Sound={() => this.stroke(Num4)}
                                BgColor={Colors.border_red}
                                Number={"4"}
                            />
                            <this.numbers_count
                                Num_Sound={() => this.stroke(Num5)}
                                BgColor={Colors.primary_color}
                                Number={"5"}
                            />
                            <this.numbers_count
                                Num_Sound={() => this.stroke(Num6)}
                                BgColor={Colors.blue}
                                Number={"6"}
                            />
                        </View>

                        {/* ========== 3rd Row ========= */}
                        <View style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            marginBottom: hp(7),
                        }}>

                            <this.numbers_count
                                Num_Sound={() => this.stroke(Num7)}
                                BgColor={Colors.border_red}
                                Number={"7"}
                            />
                            <this.numbers_count
                                Num_Sound={() => this.stroke(Num8)}
                                BgColor={Colors.primary_color}
                                Number={"8"}
                            />
                            <this.numbers_count
                                Num_Sound={() => this.stroke(Num9)}
                                BgColor={Colors.blue}
                                Number={"9"}
                            />
                        </View>

                        {/* ========== 4th Row ========= */}
                        <View style={{
                            alignItems: 'center',
                        }}>
                            <this.numbers_count
                                Num_Sound={() => this.stroke(Num10)}
                                BgColor={Colors.primary_color}
                                Number={"10"}
                            />

                        </View>


                    </View>



                    {this.state.AdsControlList[0]?.CountingBanAd &&
                        <View style={{
                            width: wp(100),
                            alignItems: 'center',
                            position: 'absolute',
                            bottom: hp(1),
                            height: !this.state.hasAd ? 0 : hp(7)
                        }}>
                            <BannerAd
                                size={BannerAdSize.ANCHORED_ADAPTIVE_BANNER}
                                unitId={this.state.AdsControlList[0]?.CountingBanAd_ID}
                                onAdOpened={this.adClicked.bind(this)}
                                onAdLoaded={this.adReceived.bind(this)}
                            />
                        </View>}

                </ImageBackground>
            </View>
        );
    }
}
